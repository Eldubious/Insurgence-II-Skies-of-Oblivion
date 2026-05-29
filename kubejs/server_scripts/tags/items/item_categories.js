// Categorize every item in the game into distinct categories.
// "unique" and "crafted" items are an extension of this and thus excluded from the categorization.
// Used mainly for tooltips.

// Items which are unused in this modpack
const categoryUnused = [

];

// Items which are exclusive to Creative Mode
const categoryCreativeMode = [

];

// Items which are guide books
const categoryGuideBook = [
    "patchouli:guide_book", "delighto_flight:cook_book", "malum:encyclopedia_arcana", "tide:fishing_journal", "irons_jewelry:jewelcrafting_guide"
];

// Items which are purely collectables
const categoryCollectable = [

];

// Items which are crafting materials or resuls
const categoryMaterial = [

];

// Items which are used as tools but are not "unique" or "crafted"
const categoryTool = [
    "another_furniture:furniture_hammer"
];

// Items which are used as ammo
const categoryAmmo = [

];

// Items which are plants
const categoryPlant = [

];

// Plants which are crops
const categoryCrop = [

];

// Items which are foods, drinks, or otherwise consumed
const categoryConsumable = [

];

// Items which are used for cosmetic upgrades
const categoryCosmeticItem = [

];

// Blocks which are purely decorative
const categoryDecorativeBlock = [
    "another_furniture:acacia_drawer", "another_furniture:acacia_flower_box", "another_furniture:acacia_shelf", "another_furniture:acacia_shutter", "another_furniture:acacia_table", 
    "another_furniture:bamboo_chair", "another_furniture:bamboo_drawer", "another_furniture:bamboo_flower_box", "another_furniture:bamboo_shelf", "another_furniture:bamboo_shutter", 
    "another_furniture:birch_bench", "another_furniture:birch_chair", "another_furniture:birch_drawer", "another_furniture:birch_flower_box", "another_furniture:birch_shelf", 
    "another_furniture:birch_table", "another_furniture:black_curtain", "another_furniture:black_lamp", "another_furniture:black_sofa", "another_furniture:black_stool", 
    "another_furniture:blue_curtain", "another_furniture:blue_lamp", "another_furniture:blue_sofa", "another_furniture:blue_stool", "another_furniture:blue_tall_stool", 
    "another_furniture:brown_lamp", "another_furniture:brown_sofa", "another_furniture:brown_stool", "another_furniture:brown_tall_stool", "another_furniture:cherry_bench", 
    "another_furniture:cherry_drawer", "another_furniture:cherry_flower_box", "another_furniture:cherry_shelf", "another_furniture:cherry_shutter", "another_furniture:cherry_table", 
    "another_furniture:crimson_chair", "another_furniture:crimson_drawer", "another_furniture:crimson_flower_box", "another_furniture:crimson_shelf", "another_furniture:crimson_shutter", 
    "another_furniture:cyan_curtain", "another_furniture:cyan_lamp", "another_furniture:cyan_sofa", "another_furniture:cyan_stool", "another_furniture:cyan_tall_stool", 
    "another_furniture:dark_oak_chair", "another_furniture:dark_oak_drawer", "another_furniture:dark_oak_flower_box", "another_furniture:dark_oak_shelf", "another_furniture:dark_oak_shutter", 
    "another_furniture:yellow_tall_stool", "another_furniture:gray_curtain", "another_furniture:gray_lamp", "another_furniture:gray_sofa", "another_furniture:gray_stool", 
    "another_furniture:green_curtain", "another_furniture:green_lamp", "another_furniture:green_sofa", "another_furniture:green_stool", "another_furniture:green_tall_stool", 
    "another_furniture:jungle_chair", "another_furniture:jungle_drawer", "another_furniture:jungle_flower_box", "another_furniture:jungle_shelf", "another_furniture:jungle_shutter", 
    "another_furniture:light_blue_curtain", "another_furniture:light_blue_lamp", "another_furniture:light_blue_sofa", "another_furniture:light_blue_stool", "another_furniture:light_blue_tall_stool", 
    "another_furniture:light_gray_lamp", "another_furniture:light_gray_sofa", "another_furniture:light_gray_stool", "another_furniture:light_gray_tall_stool", "another_furniture:lime_curtain", 
    "another_furniture:lime_sofa", "another_furniture:lime_stool", "another_furniture:lime_tall_stool", "another_furniture:magenta_curtain", "another_furniture:magenta_lamp", 
    "another_furniture:magenta_stool", "another_furniture:magenta_tall_stool", "another_furniture:mangrove_bench", "another_furniture:mangrove_chair", "another_furniture:mangrove_drawer", 
    "another_furniture:mangrove_shelf", "another_furniture:mangrove_shutter", "another_furniture:mangrove_table", "another_furniture:oak_bench", "another_furniture:oak_chair", 
    "another_furniture:oak_flower_box", "another_furniture:oak_shelf", "another_furniture:oak_shutter", "another_furniture:oak_table", "another_furniture:orange_curtain", 
    "another_furniture:orange_sofa", "another_furniture:orange_stool", "another_furniture:orange_tall_stool", "another_furniture:pink_curtain", "another_furniture:pink_lamp", 
    "another_furniture:pink_stool", "another_furniture:pink_tall_stool", "another_furniture:purple_curtain", "another_furniture:purple_lamp", "another_furniture:purple_sofa", 
    "another_furniture:purple_tall_stool", "another_furniture:red_curtain", "another_furniture:red_lamp", "another_furniture:red_sofa", "another_furniture:red_stool", 
    "another_furniture:service_bell", "another_furniture:spruce_bench", "another_furniture:spruce_chair", "another_furniture:spruce_drawer", "another_furniture:spruce_flower_box", 
    "another_furniture:spruce_shutter", "another_furniture:spruce_table", "another_furniture:warped_bench", "another_furniture:warped_chair", "another_furniture:warped_drawer", 
    "another_furniture:warped_shelf", "another_furniture:warped_shutter", "another_furniture:warped_table", "another_furniture:white_curtain", "another_furniture:white_lamp", 
    "another_furniture:white_stool", "another_furniture:white_tall_stool", "another_furniture:yellow_curtain", "another_furniture:yellow_lamp", "another_furniture:yellow_sofa",
    
];

// Blocks which are sources or condensed forms of material
const categoryMaterialBlock = [

];

// Blocks which serve some function, but not primarily for redstone or crafting
const categoryFunctionalBlock = [

];

// Blocks which primarily have redstone functionality
const categoryRedstoneBlock = [

];

// Blocks which are used from crafting or processing
const categoryCraftingStation = [

];


ServerEvents.tags("item", event => {
    
    for (let i in categoryUnused) {
        event.add("insurgence:category/unused", categoryUnused[i]);
    }

    for (let i in categoryCreativeMode) {
        event.add("insurgence:category/creative_mode", categoryCreativeMode[i]);
    }

    for (let i in categoryGuideBook) {
        event.add("insurgence:category/guide_book", categoryGuideBook[i]);
    }

    for (let i in categoryCollectable) {
        event.add("insurgence:category/collectable", categoryCollectable[i]);
    }

    for (let i in categoryMaterial) {
        event.add("insurgence:category/material", categoryMaterial[i]);
    }

    for (let i in categoryTool) {
        event.add("insurgence:category/tool", categoryTool[i]);
    }

    for (let i in categoryAmmo) {
        event.add("insurgence:category/ammo", categoryAmmo[i]);
    }

    for (let i in categoryPlant) {
        event.add("insurgence:category/plant", categoryPlant[i]);
    }

    for (let i in categoryCrop) {
        event.add("insurgence:category/crop", categoryCrop[i]);
    }

    for (let i in categoryConsumable) {
        event.add("insurgence:category/consumable", categoryConsumable[i]);
    }

    for (let i in categoryCosmeticItem) {
        event.add("insurgence:category/cosmetic", categoryCosmeticItem[i]);
    }

    for (let i in categoryDecorativeBlock) {
        event.add("insurgence:category/decorative_block", categoryDecorativeBlock[i]);
    }

    for (let i in categoryMaterialBlock) {
        event.add("insurgence:category/material_block", categoryMaterialBlock[i]);
    }

    for (let i in categoryFunctionalBlock) {
        event.add("insurgence:category/functional_block", categoryFunctionalBlock[i]);
    }

    for (let i in categoryRedstoneBlock) {
        event.add("insurgence:category/redstone_block", categoryRedstoneBlock[i]);
    }

    for (let i in categoryCraftingStation) {
        event.add("insurgence:category/crafting_station", categoryCraftingStation[i]);
    }
});