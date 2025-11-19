# Places a waystone of the specified type starting one block below
# Invoked when clearing a gateway shrine

execute if block ~ ~-1 ~ insurgence:andesite_gateway_shrine run \
    function insurgence:gameplay/convert_shrine {type: ""}

execute if block ~ ~-1 ~ insurgence:sandstone_gateway_shrine run \
    function insurgence:gameplay/convert_shrine {type: "sandy_"}

execute if block ~ ~-1 ~ insurgence:mossy_gateway_shrine run \
    function insurgence:gameplay/convert_shrine {type: "mossy_"}

execute if block ~ ~-1 ~ insurgence:deepslate_gateway_shrine run \
    function insurgence:gameplay/convert_shrine {type: "deepslate_"}

execute if block ~ ~-1 ~ insurgence:blackstone_gateway_shrine run \
    function insurgence:gameplay/convert_shrine {type: "blackstone_"}

execute if block ~ ~-1 ~ insurgence:end_stone_gateway_shrine run \
    function insurgence:gameplay/convert_shrine {type: "end_stone_"}