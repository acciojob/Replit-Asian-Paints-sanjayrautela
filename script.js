// script.js
document.addEventListener('DOMContentLoaded', function () {
  const changeButton = document.getElementById('change_button');
  const resetButton = document.getElementById('reset_button');
  const gridContainer = document.getElementById('grid-container');

  changeButton.addEventListener('click', function () {
    const blockId = document.getElementById('block_id').value;
    const colorValue = document.getElementById('colour_id').value;

    const gridItem = document.getElementById(blockId);
    if (gridItem) {
      // Reset all grid items to transparent background
      resetGrid();

      // Change the background color of the selected grid item
      gridItem.style.backgroundColor = colorValue;
    }
  });

  resetButton.addEventListener('click', function () {
    // Reset all grid items to transparent background
    resetGrid();
  });

  function resetGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(function (item) {
      item.style.backgroundColor = '';
    });
  }
});
