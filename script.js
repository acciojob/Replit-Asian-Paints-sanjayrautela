//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const gridItems = document.querySelectorAll('.grid-item');
    const blockIdInput = document.getElementById('block_id');
    const colourInput = document.getElementById('colour_id');
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset_button');

    changeButton.addEventListener('click', function () {
        const blockId = blockIdInput.value;
        const selectedBlock = document.getElementById(blockId);

        if (selectedBlock) {
            gridItems.forEach(item => {
                item.style.backgroundColor = 'transparent';
            });

            const colorValue = colourInput.value;
            selectedBlock.style.backgroundColor = colorValue;
        } else {
            alert('Invalid Block ID');
        }
    });

    resetButton.addEventListener('click', function () {
        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });

        blockIdInput.value = '';
        colourInput.value = '#000000';
    });
});

