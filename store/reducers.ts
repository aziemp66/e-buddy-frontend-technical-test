import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../apis/user";
import { fetchUser } from "../apis/userApi";

interface UserState {
	data: User | null;
	token: string | null;
	loading: boolean;
	error: string | null;
}

const initialState: UserState = {
	data: null,
	token: null,
	loading: false,
	error: null,
};

export const fetchUserData = createAsyncThunk<
	User,
	string,
	{ rejectValue: string }
>("user/fetchUserData", async (id, { rejectWithValue }) => {
	try {
		const response = await fetchUser(id);
		return response;
	} catch (error: unknown) {
		if (error instanceof Error) {
			return rejectWithValue(error.message);
		}
		return rejectWithValue("An unknown error occurred");
	}
});

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setToken(state, action: PayloadAction<string>) {
			state.token = action.payload;
		},
		clearUser(state) {
			state.data = null;
			state.token = null;
			state.loading = false;
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserData.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchUserData.fulfilled, (state, action: PayloadAction<User>) => {
				state.loading = false;
				state.data = action.payload;
				state.error = null;
			})
			.addCase(fetchUserData.rejected, (state, action: PayloadAction<string | undefined>) => {
				state.loading = false;
				state.error = action.payload || "An unknown error occurred";
			});
	},
});

export const { setToken, clearUser } = userSlice.actions;
export default userSlice.reducer;
