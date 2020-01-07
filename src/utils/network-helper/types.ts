import { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';

export interface InterceptorHandler<V> {
  onFulfilled?(value: V): V | Promise<V>;
  onRejected?(err: any): any;
}

export interface InterceptorRequestHandler extends InterceptorHandler<AxiosRequestConfig> {}
export interface InterceptorResponseHandler extends InterceptorHandler<AxiosResponse> {}

export interface HintNetError {
  (code: number, response?: AxiosResponse, msg?: string): Promise<AxiosResponse>;
}

export interface Get {
  (url: string, params?: object, config?: AxiosRequestConfig): Promise<any>;
}

export interface Post {
  (url: string, data?: object, config?: AxiosRequestConfig): Promise<any>;
}

export interface Put {
  (url: string, data?: object, config?: AxiosRequestConfig): Promise<any>;
}

export interface Del {
  (url: string, data?: object, config?: AxiosRequestConfig): Promise<any>;
}

export interface SetTimeoutThen {
  (delay?: number): Promise<any>;
}

export type Instance = AxiosInstance;
