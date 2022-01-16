import axios from 'axios';

//Request is just a folder for the async functions we are going to call on our handlers
function requestGetJoke() {
  return axios.request({
    method: 'GET',
    url: 'https://icanhazdadjoke.com/',
    headers: {
      Accept: 'application/json',
    },
  });
}

export default requestGetJoke;
