import { store } from '@/app/GlobalRedux/store';
import { readCookie, tokenKey } from '@/_constants';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface HttpClientRequestConfig extends AxiosRequestConfig {
  isAuthenticate?: boolean;
}

export interface HttpClientResponse<T = any> extends AxiosResponse<T> {
  json(): T;
}

const apiBaseUrl = 'http://localhost:5000'

export type HttpClientAsyncFn<R = HttpClientResponse> = (...args: any[]) => Promise<R>;

export default class HttpClient {
  private static instance: HttpClient;
  private axiosInstance: AxiosInstance;

  private constructor(config: HttpClientRequestConfig) {
    this.axiosInstance = this.createInstance(config);
  }

  public static getInstance() {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient({ baseURL: apiBaseUrl });
    }
    return HttpClient.instance;
  }
  public static getGoSwimInstance() {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient({ baseURL: apiBaseUrl });
    }
    return HttpClient.instance;
  }
  private createInstance(config: HttpClientRequestConfig): AxiosInstance {
    const axiosInstance = axios.create({ ...config });
    axiosInstance.defaults.timeout = 120 * 1000; // Now all requests will wait 1 minute before timing out
    axiosInstance.defaults.headers['content-type'] = 'application/json';
    axiosInstance.defaults.responseType = 'json';
    return axiosInstance;
  }

  public setRequestInterceptor(success: any, error: any): void {
    this.axiosInstance.interceptors.request.use(success, error);
  }

  public setResponseInterceptor(success: any, error: any): void {
    this.axiosInstance.interceptors.response.use(success, error);
  }

  public async get<T = any, R = HttpClientResponse<T>>(
    url: string,
    data?: any,
    config?: HttpClientRequestConfig
  ): Promise<R> {
    const _config: any = {
      params: data || {},
      ...this.setConfig(config)
    };
    console.log(_config,"in instance")

    return this.axiosInstance.get<T, R>(url, _config);
  }

  public async post<T = any, R = HttpClientResponse<T>>(
    url: string,
    data?: any,
    config?: HttpClientRequestConfig
  ): Promise<R> {
    const _config: any = {
      ...this.setConfig(config)
    };
    return this.axiosInstance.post<T, R>(url, data, _config);
  }

  public async put<T = any, R = HttpClientResponse<T>>(
    url: string,
    data?: any,
    config?: HttpClientRequestConfig
  ): Promise<R> {
    const _config: any = {
      ...this.setConfig(config)
    };
    return this.axiosInstance.put<T, R>(url, data, _config);
  }

  public async delete<T = any, R = HttpClientResponse<T>>(
    url: string,
    data?: any,
    config?: HttpClientRequestConfig
  ): Promise<R> {
    const _config: any = {
      data: data || {},
      ...this.setConfig(config)
    };
    return this.axiosInstance.delete<T, R>(url, _config);
  }

  private setConfig(config: HttpClientRequestConfig = {}): HttpClientRequestConfig {
    const authorization: string | null = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhbHVAZ21haWwuY29tIiwidXNlcklkIjoiNjNlYjhiYTgwNWJiYzY3Zjg1YjZjNzFjIiwiaWF0IjoxNjgyNTk0MjQ2LCJleHAiOjE2ODI1OTc4NDZ9.xzNdGliM6D-mkv3-4U-Jq9mH582jeaQE6S6N2BuN96g`;

    if (true) {
      const tokenHeaders: { [name: string]: string } = { authorization };
      return { ...config, headers: { ...config.headers, ...tokenHeaders } };
    }
    return config;
  }
}

export const httpClientInstance = HttpClient.getInstance();
