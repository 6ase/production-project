
import { AuthResponse } from 'Features/HTTP/types/AuthResponse/AuthReponse';
import { AxiosResponse } from 'axios';
import axios from 'axios';

export const API_URL = 'http://localhost:4000';

export default class AuthService {
	static async login(body: object): Promise<AxiosResponse<AuthResponse>> {
		return axios.post<AuthResponse>('/user/signin', body, { withCredentials: true, baseURL: API_URL });
	}
	static async registration(body: object): Promise<AxiosResponse<AuthResponse>> {
		return axios.post<AuthResponse>('/user/signup', body, { withCredentials: true, baseURL: API_URL });
	}
	static async logout(): Promise<AxiosResponse<void>> {
		return axios.get('/user/logout', { withCredentials: true, baseURL: API_URL });
	}
}