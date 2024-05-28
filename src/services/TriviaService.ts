import { AxiosInstance } from "axios";
import { HttpService, httpService } from "./HttpService";

class TriviaService {
    private client: AxiosInstance;

    constructor(httpServiceInstance: HttpService) {
        this.client = httpServiceInstance.client;
    };
    getAll = () => {
        this.client.get("")
    };
};

export const triviaService = new TriviaService(httpService);