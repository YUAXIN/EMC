function generatePentacleEntry(ritual_name, x_placement, y_placement, parents) {
    let entry = {
        name: ritual_name,
        background_u_index: 0,
        background_v_index: 0,
        category: 'occultism:pentacles',
        description: '',
        hide_while_locked: false,
        icon: 'occultism:pentacle',
        name: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.name`,
        pages: [
            {
                type: 'modonomicon:text',
                anchor: '',
                show_title_separator: true,
                text: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.intro.text`,
                title: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.intro.title`,
                use_markdown_in_title: false
            },
            {
                type: 'modonomicon:multiblock',
                anchor: '',
                multiblock_id: `occultism:${ritual_name}`,
                multiblock_name: '',
                show_visualize_button: true,
                text: ''
            }
        ],
        parents: parents,
        x: x_placement,
        y: y_placement
    };

    return entry;
}