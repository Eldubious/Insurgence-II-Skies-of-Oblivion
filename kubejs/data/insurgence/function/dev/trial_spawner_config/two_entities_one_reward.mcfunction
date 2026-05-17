# Creates a configuration for a trial spawner based on function inputs
#   This particular function creates a spawner with two entity types and one reward loot table
#
# Requires arguments:
#   cooldown:       Int for how many ticks spawner is deactivated after trial
#   spawn_range:    Maximum distance in blocks that mobs can spawn
#
#   n_simul_mobs:           Float of many mobs can spawn during a normal trial
#   n_simul_mobs_added:     Float of many mobs are added per player in a normal trial
#   n_spawn_ticks:          Ticks between spawns in a normal trial
#   n_total_mobs:           Total amount of mobs spawned in a normal trial
#   n_reward_table:         Loot table of item rewards for normal trials
#
#   o_simul_mobs:           Float of many mobs can spawn during an ominous trial
#   o_simul_mobs_added:     Float of many mobs are added per player in an ominous trial
#   o_spawn_ticks:          Ticks between spawns in an ominous trial
#   o_total_mobs:           Total amount of mobs spawned in an ominous trial
#   o_reward_table:         Loot table of item rewards for ominous trials
#   o_item_use_table:       Loot table for the items dropped during an ominous trial
#
#   e1_id:              The ID of the first entity which can spawn
#   e1_equip_table:     Loot table ID of the first entity's equipment
#   e1_weight:          Spawn weight for entity 1
#   e1_offhand_item:    Offhand item id for entity 1
#
#   e2_id:              The ID of the second entity which can spawn
#   e2_equip_table:     Loot table ID of the second entity's equipment
#   e2_weight:          Spawn weight for entity 2
#   e2_offhand_item:    Offhand item id for entity 2

execute unless block ~ ~ ~ minecraft:trial_spawner run msg @p Targeted block must be a Trial Spawner.
execute unless block ~ ~ ~ minecraft:trial_spawner run return fail

data modify block ~ ~ ~ required_player_range set value 14
$data modify block ~ ~ ~ target_cooldown_length set value $(cooldown)
$data modify block ~ ~ ~ normal_config set value \
    {simultaneous_mobs: $(n_simul_mobs), simultaneous_mobs_added_per_player: $(n_simul_mobs_added), \
     ticks_between_spawn: $(n_spawn_ticks), spawn_range: $(spawn_range), total_mobs: $(n_total_mobs), \
     spawn_potentials: [ \
        {weight: $(e1_weight), data: {entity: {id: "$(e1_id)"}, equipment: {loot_table: "$(e1_equip_table)", slot_drop_chances: 0.0}}}, \
        {weight: $(e2_weight), data: {entity: {id: "$(e2_id)"}, equipment: {loot_table: "$(e2_equip_table)", slot_drop_chances: 0.0}}} \
     ], loot_tables_to_eject: [ \
        {weight: 1, data: "$(n_reward_table)"} \
     ]}
$data modify block ~ ~ ~ ominous_config set value \
    {simultaneous_mobs: $(o_simul_mobs), simultaneous_mobs_added_per_player: $(o_simul_mobs_added), \
     ticks_between_spawn: $(o_spawn_ticks), spawn_range: $(spawn_range), total_mobs: $(o_total_mobs), \
     spawn_potentials: [ \
        {weight: $(e1_weight), data: {entity: {id: "$(e1_id)"}, equipment: {loot_table: "$(e1_equip_table)", slot_drop_chances: 0.0}}}, \
        {weight: $(e2_weight), data: {entity: {id: "$(e2_id)"}, equipment: {loot_table: "$(e2_equip_table)", slot_drop_chances: 0.0}}} \
     ], items_to_drop_when_ominous: "$(o_item_use_table)", loot_tables_to_eject: [ \
        {weight: 1, data: "$(o_reward_table)"} \
     ]}
