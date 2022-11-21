const getjoke = () => new Promise((resolve, reject) => {
  fetch('https://v2.jokeapi.dev/joke/Any?type=twopart', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getjoke;
