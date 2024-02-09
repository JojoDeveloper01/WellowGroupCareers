import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.jobconvo.com',
});


const getJobs = async () => {
  try {
    const formData = new URLSearchParams();
    formData.append('grant_type', 'password');
    formData.append('client_id', 'ZinwvgLl9oosZQ4APn2LZjvzVkriVIILBLzJVDJe');
    formData.append('client_secret', '4kWNQqbAl1GbIb5sxT9c70eRJDCMb3Mo3dZGAgOQqjaqz1jBuJKpIiAOKEoL39BMg3v6SSmAl4nvdqsuKXfiwXyVnwwK6u0KWRSZO8d3MJ4nAD6lAblwS20oap9oXk9U');
    formData.append('username', 'guilherme.carvalho@wellowgroup.com');
    formData.append('password', 'zwhCa8e???');

    const tokenResponse = await client.post('/oauth/token/', formData);
    const { access_token } = tokenResponse.data;
    const jobsResponse = await client.get('/pt/api/job/', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    const response = jobsResponse.data.results
    const filteredOffers = response.filter((job) => job.status_id === '1');
    return filteredOffers;
  } catch (error) {
    console.error('Erro:', error.message, error.response?.data || 'Erro desconhecido');
    throw error;

  }
};

export { getJobs };
