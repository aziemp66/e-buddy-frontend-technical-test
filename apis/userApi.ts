import apiClient from "./apiClient";
import { User } from "./user";

export const fetchUser = async (id: string): Promise<User> => {
	const response = await apiClient.get(`/api/users/${id}`);
	return response.data;
};

export const createUser = async (user: User): Promise<void> => {
	await apiClient.post(`/api/users`, user);
};

export const updateUser = async (id: string, data: Partial<User>): Promise<void> => {
	await apiClient.put(`/api/users/${id}`, data);
};

export const updatePassword = async (userId: string, newPassword: string): Promise<void> => {
	await apiClient.put(`/api/users/password`, { userId, newPassword });
};
