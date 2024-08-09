import axios from 'axios';

const baseUrl = 'https://dummyjson.com';

export const $api = axios.create({
  baseURL: baseUrl,
});
