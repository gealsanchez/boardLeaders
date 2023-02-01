const board = document.querySelector('.scores');

const scoreBoard = (name, number) => {
  const p = document.createElement('p');
  p.innerHTML = `${name}: ${number}`;
  board.appendChild(p);
};

export default scoreBoard;