// src/app/api/route.ts
import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
// Função para lidar com o método GET
export async function GET() {
  try {
    // Conectar ao banco de dados
    const { db } = await connectToDatabase();

    // Obter todos os dados da coleção 'jobs'
    const jobs = await db.collection('jobs').find({}).toArray();

    // Enviar os dados como resposta da API
    return NextResponse.json({ jobs })
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    NextResponse.json({ error: 'Erro interno do servidor' });
  }
}