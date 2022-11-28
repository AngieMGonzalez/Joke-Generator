import 'bootstrap';
import '../styles/main.scss';
import jokePromise from '../api/jokepromise';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <h1> Let's Yoke Around </h1>
  <div class = "joke" id = "the-setup" ></div>
  <button class="btn btn-danger" id="click-me">Get a Punny Joke!</button>
  <div id = "the-punch-line"></div>
  `;
};
init();

const theButton = document.querySelector('#click-me');
const theSetup = document.querySelector('#the-setup');
const thePunchLine = document.querySelector('#the-punch-line');

// https://www.youtube.com/watch?v=I1Gpqy_jNNQ 2min. in.

const getJoke = () => {
  jokePromise().then((mytaco) => {
    console.warn(mytaco.setup);
    console.warn(mytaco.delivery);
    theSetup.innerHTML = mytaco.setup;
    thePunchLine.innerHTML = mytaco.delivery;
  });
};

theButton.addEventListener('click', getJoke);
