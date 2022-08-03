import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (err) {
      throw new Error('This is an error - check logs');
    }
  }

  async post<T>(url: string, body: any): Promise<T> {
    return this.axios.post(url, body).then((response) => response.data);
  }

  async put<T>(url: string, body: any): Promise<T> {
    return this.axios.put(url, body).then((response) => response.data);
  }

  async delete<T>(url: string): Promise<T> {
    return this.axios.delete(url).then((response) => response.data);
  }
}
