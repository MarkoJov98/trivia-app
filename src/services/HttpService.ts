import axios, { AxiosInstance } from "axios";

export class HttpService {
    public client: AxiosInstance;

    constructor() {
        this.client = axios.create({ baseURL: ""})
    }
};

export const httpService = new HttpService();