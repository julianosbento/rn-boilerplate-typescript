import axios from 'axios';

import { ApiRoutes } from '../../config/api/Routes';
import { Headers } from '../../config/api';

const AxiosInstance = (
  baseURL: string,
  headers: { 'Content-Type': string } = Headers.json
) =>
  axios.create({
    baseURL,
    headers,
  });

//@ts-ignore
const Api = AxiosInstance(ApiRoutes.MOCK_API);

export { AxiosInstance, Api };
