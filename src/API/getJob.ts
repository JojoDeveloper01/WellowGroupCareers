import axios from 'axios';
 
// @/API/getJob.js
 
const getJobs = async () => {
  try {
    /*     // Obter o token de acesso
        const tokenResponse = await axios.post(
          'https://api.jobconvo.com/oauth/token/',
          {
            grant_type: 'password',
            client_id: 'ZinwvgLl9oosZQ4APn2LZjvzVkriVIILBLzJVDJe',
            client_secret: '4kWNQqbAl1GbIb5sxT9c70eRJDCMb3Mo3dZGAgOQqjaqz1jBuJKpIiAOKEoL39BMg3v6SSmAl4nvdqsuKXfiwXyVnwwK6u0KWRSZO8d3MJ4nAD6lAblwS20oap9oXk9U',
            username: 'guilherme.carvalho@wellowgroup.com',
            password: 'zwhCa8e???',
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
    
        const { access_token } = tokenResponse.data;
     */
 
    // Obter as vagas de trabalho
    const jobsResponse = await axios.get(
      'https://api.jobconvo.com/pt/api/job/',
      {
        headers: {
          Authorization: `Bearer OJ7AWUK8vlNWXoBcuSoSj5lvwN1T7d`,
        },
      }
    );
 
    const data = jobsResponse.data;
 
    // Filtrar as vagas por tecnologia
    /* const jobs = data.filter((job: { technology: string }) => job.technology === 'tsx nextjs'); */
 
    return data; // Alterado para retornar a variável "data" diretamente
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro:', error.message, error.response?.data);
    } else console.error('Erro desconhecido:', error);
 
    throw error;
  }
}
 
export { getJobs };