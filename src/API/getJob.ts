import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export default async function getJob(
  request: NextRequest,
  response: NextResponse
) {
  try {
    // Obter o token de acesso
    const tokenResponse = await axios.post(
      'https://api.jobconvo.com/oauth/token',
      {
        client_id: 'ZinwvgLl9oosZQ4APn2LZjvzVkriVIILBLzJVDJe',
        client_secret: '4kWNQqbAl1GbIb5sxT9c70eRJDCMb3Mo3dZGAgOQqjaqz1jBuJKpIiAOKEoL39BMg3v6SSmAl4nvdqsuKXfiwXyVnwwK6u0KWRSZO8d3MJ4nAD6lAblwS20oap9oXk9U',
        grand_type: 'password',
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

    // Obter as vagas de trabalho
    const jobsResponse = await axios.get(
      'https://api.jobconvo.com/pt/api/job/',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const data = jobsResponse.data;

    // Filtrar as vagas por tecnologia
    /* const jobs = data.filter((job: { technology: string }) => job.technology === 'tsx nextjs'); */

    return jobsResponse.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Erro:', error.message, error.response?.data);
    } else console.error('Erro desconhecido:', error);

    throw error;
  }
}
