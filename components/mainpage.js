import renderToDOM from '../utils/renderToDom';

const init = () => {
  const domString = `
  <h1> Let's Yoke Around </h1>
  <div class = "joke" id = "the-setup" ></div>
  <div id = "the-punch-line" class="text-muted"> Click to get a Joke</div>
  <button class="btn btn-danger" id="click-me">Get a Punny Joke!</button>
  `;
  renderToDOM('#app', domString);
};

export default init;
