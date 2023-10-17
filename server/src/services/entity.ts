import { Request, Response } from 'express';
import { EntityDto } from '../dto/entity.dto';
import readDbFile from '../helpers/readDbFile';
import { IEntity } from '../types/entity.type';

export async function findAll(req: Request, res: Response) {
  try {
    const data = await readDbFile();
    res.json({ data });
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).json({ error: 'Server error!' });
  }
}

export async function findByData(req: Request, res: Response) {
  try {
    const { email, number } = req.body as EntityDto;
    const data = await readDbFile();

    let result: IEntity[] = [];
    if (number) {
      result = data.filter(i => i.email === email && i.number === number);
    } else {
      result = data.filter(i => i.email === email);
    }

    setTimeout(() => {
      res.json({ data: result });
    }, 5000);
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).json({ error: 'Server error!' });
  }
}