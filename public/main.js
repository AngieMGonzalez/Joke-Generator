import 'bootstrap';
import '../styles/main.scss';
import getjoke from '../api/jokepromise';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>HELLO! Angie's Yoke Sh!t</h1>
    <button class="btn btn-danger" id="click-me">Click ME!</button>
  `;
};
init();

const jokefunc = () => {
  getjoke().then((mytaco) => {
    console.warn(mytaco.setup);
    console.warn(mytaco.delivery);
  });
};

document.querySelector('#click-me').addEventListener('click', jokefunc);
