import fs from 'fs/promises';
import { resolve, join } from 'path';
import { IEntity } from '../types/entity.type';

const pathToFile = resolve(join('./', 'db.json'));

// Async function for reading db.json file
export default async function readDbFile(): Promise<IEntity[]> {
  try {
    const data = await fs.readFile(pathToFile, 'utf8');
    return JSON.parse(data) as IEntity[];
  } catch (error) {
    throw new Error(`Error while read file: ${ (error as Error).message }`);
  }
};