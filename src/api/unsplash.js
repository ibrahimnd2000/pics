import axios from 'axios';

export default axios.create({
  headers: {
    Authorization: 'Client-ID fV4a_IfzalbLDjtMGQBZXJbU-OIP5eSp9EkJJVbB2G8',
  },
  baseURL: 'https://api.unsplash.com',
});
