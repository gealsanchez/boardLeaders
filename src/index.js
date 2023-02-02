import './style.css';

const table = [
  { name: 'Rose', score: 85 },
  { name: 'Maynard', score: 86 },
  { name: 'James', score: 87 },
  { name: 'Keenan', score: 88 },
  { name: 'Tommy', score: 89 },
  { name: 'Iomi', score: 90 },
  { name: 'Jerry', score: 91 },
];

const showScores = document.querySelector('.scores');

table.forEach((score) => {
  const divScore = document.createElement('div');
  divScore.textContent = `${score.name}: ${score.score}`;
  showScores.appendChild(divScore);
});