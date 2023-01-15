const fetch = require("node-fetch");

const getPeoplePromise = (fetch) => {
  return fetch("https://swapi.py4e.com/api/people")
    .then((response) => response.json())
    .then(({ count, results }) => {
      return {
        count,
        results,
      };
    });
};

const getPeople = async (fetch) => {
  const getRequest = await fetch("https://swapi.py4e.com/api/people");
  const { count, results } = await getRequest.json();
  console.log(count, results);
  return {
    count,
    results,
  };
};

module.exports = {
  getPeople,
  getPeoplePromise,
};
