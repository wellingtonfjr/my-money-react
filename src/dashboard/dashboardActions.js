import axios from 'axios';
const BASE_URL = 'http://localhost:3003/api'

export function getSumary() {
  const request = axios.get(`${BASE_URL}/billingCycles/summary`)
  request.then(repost => {
    console.log('repost', repost);

  })
  return { 
    type: 'BILLING_SUMMARY_FETCHED',
    payload: request
  }
}