var Game = (function() {
    // CACHE
    var gameModule = document.querySelector('.game');
    // Convert DOM node list to a usable array
    var cells = Array.prototype.slice.call(gameModule.querySelectorAll('.game__cell'));
    // Add event listeners
    cells.map(function(cell) {
        cell.addEventListener('click', cellClick);
    });
    // Cell Click
    function cellClick() {
        console.log("Cell: "+this.dataset.cell+" of Row: "+this.dataset.row);
    };
})();