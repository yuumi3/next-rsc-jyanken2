"use server";
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { ScoreType, Te } from './JyankenType';

const prisma = new PrismaClient();

export const getScores =  async (): Promise<ScoreType[]> => {
  const scores = await prisma.scores.findMany({orderBy: {id: 'desc'}});
  return scores as ScoreType[];
}

export const pon = async (human: Te) => {
  const computer = Math.floor(Math.random() * 3) as Te;
  const judgment = (computer - human + 3) % 3 as Te;
  const score: ScoreType = {human, computer, judgment};
  await prisma.scores.create({ data: score });
  revalidatePath('/');
};
