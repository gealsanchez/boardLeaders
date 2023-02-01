import './style.css';
import getData from './modules/getData.js';
import scoreBoard from './modules/scoreBoard.js';
import postData from './modules/postData.js';

const form = document.querySelector('.add-score');
const reload = document.querySelector('#reload');

const showScore = async () => {
  const data = await getData();
  data.result.forEach((score) => {
    scoreBoard(score.user, score.score);
  });
};

showScore();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userName = document.getElementById('name');
  const userScore = document.getElementById('score');
  postData(userName.value, userScore.value);
  scoreBoard(userName.value, userScore.value);
  userName.value = '';
  userScore.value = '';
});

reload.addEventListener('click', async () => {
  document.querySelector('.scores').innerHTML = '';
  const data = await getData();
  data.result.forEach((score) => {
    scoreBoard(score.user, score.score);
  });
});
