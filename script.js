const cells = document.querySelectorAll('[data-cell]');
let isXTurn = true;

cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
    const cell = e.target;
    const currentClass = isXTurn ? 'X' : 'O';
    cell.classList.add(currentClass);
    cell.textContent = currentClass;
    isXTurn = !isXTurn;
}
