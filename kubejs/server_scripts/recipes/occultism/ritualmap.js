ServerEvents.highPriorityData((event) => {
    let pentacles = [
        {
            name: 'storage',
            x_placement: -9,
            y_placement: 7,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                P: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_white' },
                A: { type: 'modonomicon:block', block: 'ae2:quartz_pillar' },
                B: { type: 'modonomicon:block', block: 'ae2:controller' },
                C: { type: 'modonomicon:block', block: 'botania:white_petal_block' },
                D: { type: 'modonomicon:block', block: 'occultism:otherstone' },
                E: { type: 'modonomicon:block', block: 'refinedstorage:quartz_enriched_iron_block' },
                F: { type: 'modonomicon:block', block: 'ae2:quartz_bricks' },
                G: { type: 'modonomicon:block', block: 'ae2:flawless_budding_quartz' },
                H: { type: 'modonomicon:block', block: 'ae2:mysterious_cube' },
                I: { type: 'modonomicon:block', block: 'ae2:cut_quartz_block' },
                J: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_gold' },
                K: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_red' },
                L: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_purple' },
            },
            pattern: [
                [
                    'AIIPPPPPIIA',
                    'I_________I',
                    'I_KL___LK_I',
                    '__LJKKKJL__',
                    '___KP_PK___',
                    '___K_0_K___',
                    '___KP_PK___',
                    '__LJKKKJL__',
                    'I_KL___LK_I',
                    'I_________I',
                    'AIIPPPPPIIA'
                ],
                [
                    'DDDDDDDDDDD',
                    'DEFFFFFFFED',
                    'DFEHBBBHEFD',
                    'DFHEIIIEHFD',
                    'DFBICBCIBFD',
                    'DFBIHGHIBFD',
                    'DFBICBCIBFD',
                    'DFHEIIIEHFD',
                    'DFEHBBBHEFD',
                    'DEFFFFFFFED',
                    'DDDDDDDDDDD'
                ],
            ],
            parents: [
                {
                    entry: 'occultism:pentacles/pentacles_overview',
                    draw_arrow: true,
                    line_enabled: true,
                    line_reversed: false
                }
            ]

        },
        {
            name: 'chalk_glyph',
            x_placement: -12,
            y_placement: 12,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                W: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_white' },
                G: { type: 'modonomicon:block', block: 'occultism:otherstone' },
                A: { type: 'modonomicon:block', block: 'ars_nouveau:arcane_core' },
                B: { type: 'modonomicon:block', block: 'botania:livingrock' },
                C: { type: 'modonomicon:block', block: 'ae2:fluix_block' },
                D: { type: 'modonomicon:block', block: 'occultism:spirit_attuned_crystal' },
                E: { type: 'modonomicon:block', block: 'botania:terra_plate' },
                F: { type: 'modonomicon:block', block: 'occultism:otherstone_slab' },
                H: { type: 'modonomicon:block', block: 'occultism:otherstone_pedestal' }
            },
            pattern: [
                [
                    '___________',
                    '___________',
                    '__HWFEFWH__',
                    '__WW_D_WW__',
                    '__F__W__F__',
                    '__EDW0WDE__',
                    '__F__W__F__',
                    '__WW_D_WW__',
                    '__HWFEFWH__',
                    '___________',
                    '___________'
                ],
                [
                    '___________',
                    '___________',
                    '__AGBBBGA__',
                    '__GGGGGGG__',
                    '__BGGGGGB__',
                    '__BGGCGGB__',
                    '__BGGGGGB__',
                    '__GGGGGGG__',
                    '__AGBBBGA__',
                    '___________',
                    '___________'
                ]
            ],
            parents: [
                {
                    entry: 'occultism:pentacles/pentacles_overview',
                    draw_arrow: true,
                    line_enabled: true,
                    line_reversed: false
                }
            ]
        },
        {
            name: 'dust',
            x_placement: -4,
            y_placement: 5,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                P: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_white' },
                A: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_gold' },
                B: { type: 'modonomicon:block', block: 'ae2:creative_energy_cell' },
                C: { type: 'modonomicon:block', block: 'cyclic:flint_block' },
                D: { type: 'modonomicon:block', block: 'cyclic:compressed_cobblestone' },
                E: { type: 'modonomicon:block', block: 'ars_nouveau:arcane_core' },
            },
            pattern: [
                [
                    '___________',
                    '___________',
                    '___A_A_A___',
                    '__AA_P_AA__',
                    '____P_P____',
                    '__AP_0_PA__',
                    '____P_P____',
                    '__AA_P_AA__',
                    '___A_A_A___',
                    '___________',
                    '___________'
                ],
                [
                    '___________',
                    '___________',
                    '__CDDDDDC__',
                    '__DCEEECD__',
                    '__DECECED__',
                    '__DEEBEED__',
                    '__DECECED__',
                    '__DCEEECD__',
                    '__CDDDDDC__',
                    '___________',
                    '___________'
                ],
            ],
            parents: [
                {
                    entry: 'occultism:pentacles/pentacles_overview',
                    draw_arrow: true,
                    line_enabled: true,
                    line_reversed: false
                }
            ]

        },
        {
            name: 'charger',
            x_placement: -8,
            y_placement: 7,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                P: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_white' },
                A: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_gold' },
                B: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_purple' },
                C: { type: 'modonomicon:block', block: 'ae2:charger' },
                D: { type: 'modonomicon:block', block: 'occultism:spirit_attuned_crystal' },
            },
            pattern: [
                [
                    '___________',
                    '___________',
                    '__AAAAAAA__',
                    '__ABDCDBA__',
                    '__ADPPPDA__',
                    '__ACP0PCA__',
                    '__ADPPPDA__',
                    '__ABDCDBA__',
                    '__AAAAAAA__',
                    '___________',
                    '___________'
                ]
            ],
            parents: [
                {
                    entry: 'occultism:pentacles/pentacles_overview',
                    draw_arrow: true,
                    line_enabled: true,
                    line_reversed: false
                }
            ]

        },
        {
            name: 'basic',
            x_placement: -12,
            y_placement: 4,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                A: { type: 'modonomicon:block', block: 'extendedcrafting:black_iron_block' },
                B: { type: 'modonomicon:block', block: 'extendedcrafting:nether_star_block'}
                
            },
            pattern: [
                [
                    '___________',
                    '___________',
                    '___________',
                    '___________',
                    '___________',
                    '_____0_____',
                    '___________',
                    '___________',
                    '___________',
                    '___________',
                    '___________'
                ],
                [
                    '___________',
                    '_AAAAAAAAA_',
                    '_ABBBBBBBA_',
                    '_ABABABABA_',
                    '_ABBBBBBBA_',
                    '_ABABABABA_',
                    '_ABBBBBBBA_',
                    '_ABABABABA_',
                    '_ABBBBBBBA_',
                    '_AAAAAAAAA_',
                    '___________'
                ],
            ],
            parents: [
                {
                    entry: 'occultism:pentacles/pentacles_overview',
                    draw_arrow: true,
                    line_enabled: true,
                    line_reversed: false
                }
            ]

        },
        {
            name: 'advanced',
            x_placement: -11,
            y_placement: 4,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                A: { type: 'modonomicon:block', block: 'extendedcrafting:black_iron_block' },
                B: { type: 'modonomicon:block', block: 'extendedcrafting:luminessence_block'}
                
            },
            pattern: [
                [
                    '___________',
                    '___________',
                    '___________',
                    '___________',
                    '___________',
                    '_____0_____',
                    '___________',
                    '___________',
                    '___________',
                    '___________',
                    '___________'
                ],
                [
                    '___________',
                    '_AAAAAAAAA_',
                    '_ABBBBBBBA_',
                    '_ABABABABA_',
                    '_ABBBBBBBA_',
                    '_ABABABABA_',
                    '_ABBBBBBBA_',
                    '_ABABABABA_',
                    '_ABBBBBBBA_',
                    '_AAAAAAAAA_',
                    '___________'
                ],
            ],
            parents: [
                {
                    entry: 'occultism:pentacles/pentacles_overview',
                    draw_arrow: true,
                    line_enabled: true,
                    line_reversed: false
                }
            ]

        },
        {
            name: 'elite',
            x_placement: -3,
            y_placement: 6,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                A: { type: 'modonomicon:block', block: 'extendedcrafting:black_iron_block' },
                B: { type: 'modonomicon:block', block: 'extendedcrafting:crystaltine_block'}
                
            },
            pattern: [
                [
                    '___________',
                    '___________',
                    '___________',
                    '___________',
                    '___________',
                    '_____0_____',
                    '___________',
                    '___________',
                    '___________',
                    '___________',
                    '___________'
                ],
                [
                    '___________',
                    '_AAAAAAAAA_',
                    '_ABBBBBBBA_',
                    '_ABABABABA_',
                    '_ABBBBBBBA_',
                    '_ABABABABA_',
                    '_ABBBBBBBA_',
                    '_ABABABABA_',
                    '_ABBBBBBBA_',
                    '_AAAAAAAAA_',
                    '___________'
                ],
            ],
            parents: [
                {
                    entry: 'occultism:pentacles/pentacles_overview',
                    draw_arrow: true,
                    line_enabled: true,
                    line_reversed: false
                }
            ]

        },
{
 name: 'ultimate',
x_placement: -9,
 y_placement: 10,
     mapping: {
     0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
      A: { type: 'modonomicon:block', block: 'extendedcrafting:black_iron_block' },
        B: { type: 'modonomicon:block', block: 'extendedcrafting:ender_ingot_block'}
                        
         },
    pattern: [
            [
         '___________',
         '___________',
         '___________',
         '___________',
         '___________',
         '_____0_____',
         '___________',
         '___________',
         '___________',
         '___________',
         '___________'
        ],
        [
         '___________',
         '_AAAAAAAAA_',
         '_ABBBBBBBA_',
         '_ABABABABA_',
         '_ABBBBBBBA_',
         '_ABABABABA_',
         '_ABBBBBBBA_',
         '_ABABABABA_',
         '_ABBBBBBBA_',
         '_AAAAAAAAA_',
         '___________'
                        ],
            ],
            parents: [
                {
                    entry: 'occultism:pentacles/pentacles_overview',
                    draw_arrow: true,
                    line_enabled: true,
                    line_reversed: false
                }
            ]

        },
       ]

        pentacles.forEach((pentacle) => {
            pentacle.type = 'modonomicon:dense';
    
            // Set background display. Same size as pentacle, every block is otherstone.
            // 9 is used as the key in following Occultism's convention.
            pentacle.pattern.push(pentacle.pattern[0].map((pattern) => pattern.replace(/./g, '9')));
            pentacle.mapping['9'] = { type: 'modonomicon:display', display: 'occultism:otherstone' };

            event.addJson(`occultism:modonomicon/multiblocks/${pentacle.name}.json`, pentacle);

            // Remember to set lang entries for all new pentacles in en_us.json
            // x and y placement refer to the entry location within the modonomicon
            event.addJson(
                `occultism:modonomicon/books/dictionary_of_spirits/entries/pentacles/${pentacle.name}.json`,
                generatePentacleEntry(pentacle.name, pentacle.x_placement, pentacle.y_placement, pentacle.parents)
            );
        });
})