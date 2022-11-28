import 'bootstrap';
import '../styles/main.scss';
import jokePromise from '../api/jokepromise';
import init from '../components/mainpage';

const startApp = () => {
  init();
};

startApp();

const theButton = document.querySelector('#click-me');
const theSetup = document.querySelector('#the-setup');
const thePunchLine = document.querySelector('#the-punch-line');

// https://www.youtube.com/watch?v=I1Gpqy_jNNQ 7min. in.

const getJoke = () => {
  jokePromise().then((mytaco) => {
    console.warn(mytaco.setup);
    console.warn(mytaco.delivery);
    theSetup.innerHTML = mytaco.setup;
    thePunchLine.style.display = 'none';
    // thePunchLine.innerHTML = mytaco.delivery;
  });
};

theButton.addEventListener('click', getJoke);
