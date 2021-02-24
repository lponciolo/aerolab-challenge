/* eslint-disable no-useless-concat */
import axios from 'axios';

export default axios.create({
  baseURL: 'https://coding-challenge-api.aerolab.co/',
  responseType: 'json',
  headers: {
    Authorization:
      'Bearer ' +
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDMwYjBmOTdlNzE4NzAwMjBlMzhmMDQiLCJpYXQiOjE2MTM4MDM3Njl9.1kb__Gc3BvDDs1a7EhHV-taLz7oJGaqu10SkREpwdQg',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
