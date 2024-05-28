import axios, { AxiosInstance } from "axios";
import { HttpService, httpService } from "./HttpService";

class ChuckService {
    private client: AxiosInstance

    constructor(httpServiceInstance: HttpService) {
        this.client = httpServiceInstance.client;
    }
    getAll =() => {
        this.client.get("")
    };
}

new ChuckService(httpService);