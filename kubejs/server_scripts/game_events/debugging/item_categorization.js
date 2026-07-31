const itemCategories = [
    { tag: "insurgence:category/unused", label: "Unused", exportKey: "categoryUnused" },
    { tag: "insurgence:category/creative_mode", label: "Creative Mode", exportKey: "categoryCreativeMode" },
    { tag: "insurgence:category/guide_book", label: "Guide Book", exportKey: "categoryGuideBook" },
    { tag: "insurgence:category/unlock_item", label: "Unlock Item", exportKey: "categoryUnlockItem" },
    { tag: "insurgence:category/collectable", label: "Collectable", exportKey: "categoryCollectable" },
    { tag: "insurgence:category/material", label: "Material", exportKey: "categoryMaterial" },
    { tag: "insurgence:category/tool", label: "Tool", exportKey: "categoryTool" },
    { tag: "insurgence:category/ammo", label: "Ammo", exportKey: "categoryAmmo" },
    { tag: "insurgence:category/plant", label: "Plant", exportKey: "categoryPlant" },
    { tag: "insurgence:category/crop", label: "Crop", exportKey: "categoryCrop" },
    { tag: "insurgence:category/consumable", label: "Consumable", exportKey: "categoryConsumable" },
    { tag: "insurgence:category/cosmetic", label: "Cosmetic", exportKey: "categoryCosmeticItem" },
    { tag: "insurgence:category/natural_block", label: "Natural Block", exportKey: "categoryNaturalBlock" },
    { tag: "insurgence:category/decorative_block", label: "Decorative Block", exportKey: "categoryDecorativeBlock" },
    { tag: "insurgence:category/material_block", label: "Material Block", exportKey: "categoryMaterialBlock" },
    { tag: "insurgence:category/functional_block", label: "Functional Block", exportKey: "categoryFunctionalBlock" },
    { tag: "insurgence:category/redstone_block", label: "Redstone Block", exportKey: "categoryRedstoneBlock" },
    { tag: "insurgence:category/crafting_station", label: "Crafting Station", exportKey: "categoryCraftingStation" },
    { tag: "insurgence:unique_item", label: "Unique Item", exportKey: "uniqueItems" },
    { tag: "insurgence:crafted_item", label: "Crafted Item", exportKey: "craftedItems" },
    { tag: "insurgence:tarot_cards", label: "Tarot Card", exportKey: "tarotCards" }
];

const categoryItemTags = itemCategories.map(category => category.tag);
const categorizationSessions = {};

const itemsToSkip = [

];

function getAllItems() {
    return Item.getTypeList();
}

function getAllUncategorizedItems() {
    let allItems = getAllItems();
    let uncategorized = [];
    for (let i in allItems) {
        let id = String(allItems[i]);

        if (itemsToSkip.includes(id)) {
            continue;
        }

        let item = Item.of(id);
        let matchedTag = categoryItemTags.find(tag => item.hasTag(tag));
        if (!matchedTag) {
            uncategorized.push(id);
        } 
    }
    return uncategorized.sort();
}

function getPlayerSessionKey(player) {
    return String(player.getUuid());
}

function createActionToken() {
    return `${Date.now().toString(36)}${Math.floor(Math.random() * 1679616).toString(36)}`;
}

function createCategorizationSession(player) {
    let results = {};
    for (let category of itemCategories) {
        results[category.exportKey] = [];
    }

    return {
        playerName: String(player.getGameProfile().getName()),
        items: getAllUncategorizedItems(),
        index: 0,
        phase: "choosing",
        token: createActionToken(),
        results: results,
        skippedItems: []
    };
}

function getValidSession(player, token, expectedPhase) {
    let session = categorizationSessions[getPlayerSessionKey(player)];
    if (!session || session.token !== token || session.phase !== expectedPhase) {
        player.tell(Component.literal("That item categorization action has expired.").red());
        return null;
    }
    return session;
}

function rotateActionToken(session) {
    session.token = createActionToken();
}

function getCurrentItemId(session) {
    return session.items[session.index];
}

function tellraw(server, playerName, parts) {
    server.runCommandSilent(`tellraw ${playerName} ${JSON.stringify(parts)}`);
}

function clickableText(label, command, color) {
    return {
        text: `[${label}]`,
        color: color,
        clickEvent: {
            action: "run_command",
            value: command
        },
        hoverEvent: {
            action: "show_text",
            contents: { text: command, color: "gray" }
        }
    };
}

function givePlayerItem(player, session) {
    let inventory = player.getInventory();
    let freeSlot = inventory.getFreeSlot();
    if (freeSlot < 0) {
        return false;
    }

    let marker = `${getPlayerSessionKey(player)}:${session.token}`;
    let stack = Item.of(getCurrentItemId(session), 1);
    let customData = stack.getCustomData();
    customData.putString("insurgenceItemCategorizer", marker);
    stack.setCustomData(customData);
    inventory.setItem(freeSlot, stack);
    inventory.setChanged();
    session.previewMarker = marker;
    return true;
}

function takePlayerItem(player, session) {
    if (!session.previewMarker) {
        return;
    }

    let inventory = player.getInventory();
    for (let slot = 0; slot < inventory.getContainerSize(); slot++) {
        let stack = inventory.getItem(slot);
        if (stack.isEmpty()) {
            continue;
        }

        let customData = stack.getCustomData();
        if (customData.getString("insurgenceItemCategorizer") === session.previewMarker) {
            inventory.removeItem(slot, stack.getCount());
            inventory.setChanged();
            break;
        }
    }
    session.previewMarker = null;
}

function printTagOptions(player, session) {
    let server = player.getServer();
    let itemId = getCurrentItemId(session);
    player.tell(Component.literal(`Item ${session.index + 1}/${session.items.length}: ${itemId}`).gold());
    player.tell(Component.literal("Select the category to record for this item:").gray());

    for (let start = 0; start < itemCategories.length; start += 4) {
        let line = [];
        for (let index = start; index < Math.min(start + 4, itemCategories.length); index++) {
            if (line.length > 0) {
                line.push({ text: " " });
            }
            line.push(clickableText(
                itemCategories[index].label,
                `/categorizeitems choose ${session.token} ${index}`,
                "aqua"
            ));
        }
        tellraw(server, session.playerName, line);
    }

    tellraw(server, session.playerName, [
        clickableText("Skip", `/categorizeitems skip ${session.token}`, "yellow")
    ]);
}

function printContinueOptions(player, session) {
    tellraw(player.getServer(), session.playerName, [
        clickableText("Continue", `/categorizeitems continue ${session.token}`, "green"),
        { text: " " },
        clickableText("Quit and Export", `/categorizeitems quit ${session.token}`, "red")
    ]);
}

function presentCurrentItem(player, session) {
    if (session.index >= session.items.length) {
        finishCategorization(player, session);
        return;
    }

    session.phase = "choosing";
    rotateActionToken(session);
    if (!givePlayerItem(player, session)) {
        session.phase = "inventory_full";
        rotateActionToken(session);
        player.tell(Component.literal("Your inventory is full. Free one slot, then retry.").red());
        tellraw(player.getServer(), session.playerName, [
            clickableText("Retry", `/categorizeitems retry ${session.token}`, "yellow"),
            { text: " " },
            clickableText("Quit and Export", `/categorizeitems quit ${session.token}`, "red")
        ]);
        return;
    }
    printTagOptions(player, session);
}

function buildExport(session) {
    let categorizedCount = 0;
    let output = {
        generatedAt: new Date().toISOString()
    };
    for (let category of itemCategories) {
        let items = session.results[category.exportKey];
        categorizedCount += items.length;
        output[category.exportKey] = items;
    }

    output.skippedItems = session.skippedItems;
    output.summary = {
        categorizedCount: categorizedCount,
        skippedCount: session.skippedItems.length,
        remainingCount: Math.max(0, session.items.length - session.index - (session.phase === "awaiting_next" ? 1 : 0))
    };
    return output;
}

function exportCategorization(player, session) {
    let path = "kubejs/item_categories_export.json";
    try {
        JsonIO.write(path, buildExport(session));
        player.tell(Component.literal(`Categorization results exported to ${path}`).green());
        return true;
    } catch (error) {
        console.error(`Failed to export item categorization results: ${error}`);
        player.tell(Component.literal("Export failed. Check logs/latest.log, then run the quit action again.").red());
        return false;
    }
}

function finishCategorization(player, session) {
    takePlayerItem(player, session);
    if (exportCategorization(player, session)) {
        delete categorizationSessions[getPlayerSessionKey(player)];
        player.tell(Component.literal("Copy the exported arrays into the tag scripts, then run /reload.").gray());
    }
}

function startCategorization(player) {
    let sessionKey = getPlayerSessionKey(player);
    if (categorizationSessions[sessionKey]) {
        player.tell(Component.literal("You already have an active item categorization session.").red());
        return 0;
    }

    let session = createCategorizationSession(player);
    categorizationSessions[sessionKey] = session;
    player.tell(Component.literal(`Found ${session.items.length} uncategorized registered items.`).green());
    presentCurrentItem(player, session);
    return 1;
}

function chooseCategory(player, token, categoryIndex) {
    let session = getValidSession(player, token, "choosing");
    let category = itemCategories[categoryIndex];
    if (!session || !category) {
        if (session) {
            player.tell(Component.literal("Unknown item category.").red());
        }
        return 0;
    }

    let itemId = getCurrentItemId(session);
    session.results[category.exportKey].push(itemId);
    takePlayerItem(player, session);
    session.phase = "awaiting_next";
    rotateActionToken(session);
    player.tell(Component.literal(`Recorded ${itemId} for ${category.tag}.`).green());
    printContinueOptions(player, session);
    return 1;
}

function skipCurrentItem(player, token) {
    let session = getValidSession(player, token, "choosing");
    if (!session) {
        return 0;
    }

    let itemId = getCurrentItemId(session);
    session.skippedItems.push(itemId);
    takePlayerItem(player, session);
    session.phase = "awaiting_next";
    rotateActionToken(session);
    player.tell(Component.literal(`Skipped ${itemId}.`).yellow());
    printContinueOptions(player, session);
    return 1;
}

function continueCategorization(player, token) {
    let session = getValidSession(player, token, "awaiting_next");
    if (!session) {
        return 0;
    }
    session.index++;
    presentCurrentItem(player, session);
    return 1;
}

function retryCurrentItem(player, token) {
    let session = getValidSession(player, token, "inventory_full");
    if (!session) {
        return 0;
    }
    presentCurrentItem(player, session);
    return 1;
}

function quitCategorization(player, token) {
    let session = categorizationSessions[getPlayerSessionKey(player)];
    if (!session || session.token !== token) {
        player.tell(Component.literal("That item categorization action has expired.").red());
        return 0;
    }
    finishCategorization(player, session);
    return 1;
}

function getCommandPlayer(context) {
    return context.getSource().getPlayerOrException();
}

ServerEvents.commandRegistry(event => {
    let Commands = event.getCommands();
    let Arguments = event.getArguments();
    let stringArgument = Arguments.STRING.create(event);
    let integerArgument = Arguments.INTEGER.create(event);
    let tokenResult = context => String(Arguments.STRING.getResult(context, "token"));

    event.register(Commands.literal("categorizeitems")
        .requires(source => source.hasPermission(2))
        .then(Commands.literal("start")
            .executes(context => startCategorization(getCommandPlayer(context))))
        .then(Commands.literal("choose")
            .then(Commands.argument("token", stringArgument)
                .then(Commands.argument("category", integerArgument)
                    .executes(context => chooseCategory(
                        getCommandPlayer(context),
                        tokenResult(context),
                        Number(Arguments.INTEGER.getResult(context, "category"))
                    )))))
        .then(Commands.literal("skip")
            .then(Commands.argument("token", stringArgument)
                .executes(context => skipCurrentItem(getCommandPlayer(context), tokenResult(context)))))
        .then(Commands.literal("continue")
            .then(Commands.argument("token", stringArgument)
                .executes(context => continueCategorization(getCommandPlayer(context), tokenResult(context)))))
        .then(Commands.literal("retry")
            .then(Commands.argument("token", stringArgument)
                .executes(context => retryCurrentItem(getCommandPlayer(context), tokenResult(context)))))
        .then(Commands.literal("quit")
            .then(Commands.argument("token", stringArgument)
                .executes(context => quitCategorization(getCommandPlayer(context), tokenResult(context))))));
});

PlayerEvents.loggedOut(event => {
    let player = event.player;
    let sessionKey = getPlayerSessionKey(player);
    let session = categorizationSessions[sessionKey];
    if (session) {
        takePlayerItem(player, session);
        delete categorizationSessions[sessionKey];
    }
});