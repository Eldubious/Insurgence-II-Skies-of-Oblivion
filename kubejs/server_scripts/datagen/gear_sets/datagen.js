let worldTiers = ["haven", "frontier", "ascent", "summit", "pinnacle"];

ServerEvents.generateData("last", event => {

    for (let i in gearSets) {
        let gSet = gearSets[i];

        for (let j in worldTiers) {
            let tier = worldTiers[j];

            // Create a gear set for every permutation of armor pattern and material; if they are used
            if (gSet.trims != undefined) {
                for (let p in gSet.trims.patterns) {
                    let pat = gSet.trims.patterns[p];
                    for (let m in gSet.trims.materials) {
                        let mat = gSet.trims.materials[m];
                        let json = getGearSet(gSet, tier, pat, mat);

                        let splitPat = pat.split(":");
                        let splitMat = mat.split(":");
                        console.log(json);
                        event.json(`insurgence:gear_sets/${gSet.name}/${splitPat[1]}/${splitMat[1]}/${tier}`, json);
                        event.getGenerated(`insurgence:gear_sets/${gSet.name}/${splitPat[1]}/${splitMat[1]}/${tier}`);
                    }
                }
            }
            else {
                let json = getGearSet(gSet, tier, undefined, undefined);
                console.log(json)
                event.json(`insurgence:gear_sets/${gSet.name}/${tier}`, json);
                event.getGenerated(`insurgence:gear_sets/${gSet.name}/${tier}`);
            }
        }
    }
});

function getGearSet(gSet, worldTier, trimPattern, trimMaterial) {
    let json = {
        weight: Int.valueOf(gSet.weight),
        quality: gSet.quality
    };
    if (gSet.useTags) {
        json.tags = [
            gSet.name
        ];
    };

    if (gSet.mainHand != undefined) {
        json.mainhands = [];

        for (let i in gSet.mainHand) {
            let item = gSet.mainHand[i];
            let itemJson = getItemStack(item, worldTier, trimPattern, trimMaterial);
            json.mainhands.push(itemJson);
        }
    }
    if (gSet.offHand != undefined) {
        json.offhands = [];

        for (let i in gSet.offHand) {
            let item = gSet.offHand[i];
            let itemJson = getItemStack(item, worldTier, trimPattern, trimMaterial);
            json.offhands.push(itemJson);
        }
    }
    if (gSet.helmet != undefined) {
        json.helmets = [];

        for (let i in gSet.helmet) {
            let item = gSet.helmet[i];
            let itemJson = getItemStack(item, worldTier, trimPattern, trimMaterial);
            json.helmets.push(itemJson);
        }
    }
    if (gSet.chestplate != undefined) {
        json.chestplates = [];

        for (let i in gSet.chestplate) {
            let item = gSet.chestplate[i];
            let itemJson = getItemStack(item, worldTier, trimPattern, trimMaterial);
            json.chestplates.push(itemJson);
        }
    }
    if (gSet.leggings != undefined) {
        json.leggings = [];

        for (let i in gSet.leggings) {
            let item = gSet.leggings[i];
            let itemJson = getItemStack(item, worldTier, trimPattern, trimMaterial);
            json.leggings.push(itemJson);
        }
    }
    if (gSet.boots != undefined) {
        json.boots = [];

        for (let i in gSet.boots) {
            let item = gSet.boots[i];
            let itemJson = getItemStack(item, worldTier, trimPattern, trimMaterial);
            json.boots.push(itemJson);
        }
    }

    return json;
}

function getItemStack(item, worldTier, trimPattern, trimMaterial) {
    let json = {
        weight: Int.valueOf(item.weight),
        drop_chance: 0.0,
        stack: {}
    };

    if (item.id == undefined) {
        json.stack.id = item[worldTier];
    }
    else {
        json.stack.id = item.id;
    }

    if (item.count == undefined) {
        json.stack.count = Int.valueOf(1);
    }
    else {
        json.stack.count = Int.valueOf(item.count);
    }

    if (item.components == undefined && item.applyTrims) {
        json.stack.components = {};
    }
    else if (item.components != undefined) {
        json.stack.components = item.components;
    }

    if (item.applyTrims && trimPattern != undefined && trimMaterial != undefined) {
        json.stack.components["minecraft:trim"] = {
            pattern: trimPattern,
            material: trimMaterial
        };
    }

    return json;
}