import { polyfill } from 'es6-promise';
polyfill();
import fetch from 'isomorphic-fetch';

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export function httpGet(url) {
  return fetch(url, {
    headers: defaultHeaders
  })
  .then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      throw error;
    }
  })
  .then((response) => {
    return response.json();
  });
};
