import axios from 'axios'
import { YELP_API_KEY } from '@env'

const instance = axios.create({
  baseURL: `https://api.yelp.com/v3/businesses/search?`,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
})

export default instance
