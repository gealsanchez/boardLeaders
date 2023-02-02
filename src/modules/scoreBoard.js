const board = document.querySelector('.scores');

const scoreBoard = (name, number) => {
  const div = document.createElement('div');
  div.innerHTML = `${name}: ${number}`;
  board.appendChild(div);
};

export default scoreBoard;