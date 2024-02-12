import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.jobconvo.com',
});

const getJobs = async (page = 1) => {
  try {
    const formData = new URLSearchParams({
      grant_type: 'password',
      client_id: 'ZinwvgLl9oosZQ4APn2LZjvzVkriVIILBLzJVDJe',
      client_secret: '4kWNQqbAl1GbIb5sxT9c70eRJDCMb3Mo3dZGAgOQqjaqz1jBuJKpIiAOKEoL39BMg3v6SSmAl4nvdqsuKXfiwXyVnwwK6u0KWRSZO8d3MJ4nAD6lAblwS20oap9oXk9U',
      username: 'guilherme.carvalho@wellowgroup.com',
      password: 'zwhCa8e???',
    });

    const { data: { access_token } } = await client.post('/oauth/token/', formData);
    const { data: { results, count } } = await client.get(`/pt/api/job/?page=${page}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const filteredOffers = results.filter(job => job.status_id === '1');
    console.log("123: ", filteredOffers)
    console.log('aaa:', page)
    return { filteredOffers, totalJobs: count };
  } catch (error) {
    console.error('Error:', error.message, error.response?.data || 'Unknown error');
    throw error;
  }
};

export { getJobs };
