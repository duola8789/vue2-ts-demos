import * as axios from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    customProperty?: boolean;
  }
}

declare global {
  interface Window {
    __COMMIT_INFO__?: string;
  }
}
