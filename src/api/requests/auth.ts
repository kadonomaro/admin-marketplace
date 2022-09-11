import { AxiosInstance } from "axios";
import { Auth } from "@/types/auth";

export class AuthApi {
    private api: AxiosInstance;
    private url: string;
    constructor(api: AxiosInstance) {
        this.api = api;
        this.url = "api/auth";
    }

    async create({ email, password }: Auth) {
        await this.api.post<Auth>(this.url + "/create", { email, password }).then(({ data }) => data);
    }

    async login({ email, password }: Auth) {
        await this.api.post<Auth>(this.url + "/login", { email, password }).then(({ data }) => data);
    }

    async logout() {
        await this.api.get(this.url + "/logout").then(({ data }) => data);
    }
}
