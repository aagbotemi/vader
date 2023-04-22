import axios, { AxiosInstance } from 'axios';
import each from 'lodash/each';
import forOwn from 'lodash/forOwn';
import { $storage } from '@/services';
import NProgress from 'nprogress';
import { toast } from 'react-toastify';

const axiosConfig = {
  withCredentials: false,
  headers: {
    Accept: 'application/json',
  },
};

const axiosClient: AxiosInstance = axios.create(axiosConfig);
const isDev = process.env.NODE_ENV === 'development';

axiosClient.defaults.baseURL = isDev
  ? process.env.NEXT_PUBLIC_DEV_URL
  : process.env.NEXT_PUBLIC_PROD_URL;

class ServiceApi {
  public url = 'https://api.themoviedb.org/3';

  // SELECT BASE URL VERSION
  service() {
    this.injectInterceptor();
    return this;
  }

  // APPEND URL TO API URL
  appendToURL(url: string) {
    return `${this.url}${url}`;
  }

  // GET API REQUEST
  async fetch(url: string, resolve = false) {
    try {
      const response = await axiosClient.get(
        this.appendToURL(url),
        this.setupHeaders()
      );
      return resolve ? response?.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // POST API REQUEST
  async push(
    url: string,
    payload: any = null,
    resolve = false,
    is_attached = false
  ) {
    try {
      const response = await axiosClient.post(
        this.appendToURL(url),
        is_attached ? payload : { ...payload },
        this.setupHeaders(is_attached)
      );

      return resolve ? response?.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // PUT API REQUEST
  async update(
    url: string,
    payload: any = {},
    resolve = true,
    is_attached = false
  ) {
    try {
      const response = await axiosClient.put(
        this.appendToURL(url),
        { ...payload },
        this.setupHeaders(is_attached)
      );

      return resolve ? response?.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // DELETE API REQUEST
  async remove(url: string, payload: any = {}, resolve = false) {
    try {
      const response = await axiosClient.delete(this.appendToURL(url), {
        data: { ...payload },
        ...this.setupHeaders(),
      });

      return resolve ? response?.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // SETUP HEADERS FOR SCENARIOS LIKE IMAGE UPLOAD
  setupHeaders(is_attached = false) {
    if (is_attached) {
      return {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${$storage.getFromStore(
            'liveableAccessToken'
          )}`,
        },
      };
    } else {
      return {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${$storage.getFromStore(
            'liveableAccessToken'
          )}`,
        },
      };
    }
  }

  injectInterceptor() {
    axiosClient.interceptors.request.use((config) => {
      NProgress.start();
      NProgress.inc(0.4);

      console.log({ config });
      return config;
    });

    axiosClient.interceptors.response.use((response) => {
      NProgress.done();
      console.log({ response });

      return response;
    });

    async (error: any) => {
      NProgress.done();

      return Promise.reject(error);
    };
  }

  // HANDLE API REQUEST ERRORS
  handleErrors(err: any) {
    console.error({ err });
    let msg!: any;

    if (err.response && err.response.data.error) {
      msg = err.response.data?.error.message;
    } else if (err.response && err.response.data?.message) {
      msg = err.response.data?.message;
    } else {
      msg = err?.message;
    }

    NProgress.done();

    console.debug('error', msg);

    if (Array.isArray(msg)) {
      if (msg !== (undefined || null)) {
        each(msg, (val) => {
          toast.error(val, { autoClose: false });
        });
      }
    } else if (typeof msg === 'object') {
      if (msg !== (undefined || null)) {
        forOwn(msg, (val, key) => {
          toast.error(val[0], { autoClose: false });
          console.log(key, val[0]);
        });
      }
    } else if (typeof msg === 'string') {
      toast.error(msg, { autoClose: false });
    } else if (msg === (undefined || null)) {
      toast.error(`An error occurred, please try again.`);
    }

    return err?.response;
  }

  isSuccessful(response: any): boolean {
    const codes = [200, 201, 202, 204];
    return codes.includes(
      response?.status || response?.statusCode || response?.code
    )
      ? true
      : false;
  }
}

export default new ServiceApi();
