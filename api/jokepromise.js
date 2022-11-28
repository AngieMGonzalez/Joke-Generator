const endPoint = 'https://v2.jokeapi.dev/joke/Any?safe-modetype=twopart';

const jokePromise = () => new Promise((resolve, reject) => {
  fetch(endPoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default jokePromise;
