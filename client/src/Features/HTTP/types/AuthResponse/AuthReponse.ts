import { UserResponse } from '../UserResponse/UserResponse';

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: UserResponse;
}