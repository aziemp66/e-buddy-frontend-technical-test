import { User } from '@/apis/user';
import { createAction } from '@reduxjs/toolkit';

export const setUser = createAction<User>('user/setUser');
export const clearUser = createAction<User>('user/clearUser');
