import axiso, { AxiosInstance } from 'axios';

const baseDomain = 'https://portfolio0624.microcms.io';

const baseURL = `${baseDomain}/api/v1`;

// 通常のheader
export const Repository: AxiosInstance = axiso.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.API_KEY
  }
});
