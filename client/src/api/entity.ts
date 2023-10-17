import axios from '../axios/index.ts';
import { AxiosResponse } from 'axios';
import { EntityPayload, EntityResponse } from './types.ts';

export function fetchAll(): Promise<AxiosResponse<EntityResponse, undefined>> {
  return axios.get('entities');
}

export function fetchByData(data: EntityPayload, controller: AbortController): Promise<AxiosResponse<EntityResponse, undefined>> {
  return axios.post('entities', data, { signal: controller.signal });
}