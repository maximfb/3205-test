import { IEntity } from '../components/List/types.ts';

export type Response<T> = {
  data: T[]
}

export type EntityPayload = {
  email: string,
  number?: string
}
export type EntityResponse = {
  data: IEntity[]
}
