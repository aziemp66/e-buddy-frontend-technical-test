"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import LoginForm from "@/components/LoginForm";
import UpdateUserForm from "@/components/UpdateForm";
import LogoutButton from "@/components/LogoutButton";
import { Box, Typography } from "@mui/material";

const UserPage = () => {
	const { user, token } = useSelector((state: RootState) => state.user);

	return (
		<Box sx={{ padding: 4 }}>
			{!token ? (
				<>
					<Typography color="primary" variant="h4" sx={{ marginBottom: 2 }}>
						Login
					</Typography>
					<LoginForm />
				</>
			) : (
				<>
					<Typography variant="h4" sx={{ marginBottom: 2 }}>
						Welcome, {user?.name || "User"}
					</Typography>
					<UpdateUserForm />
					<Box sx={{ marginTop: 4 }}>
						<LogoutButton />
					</Box>
				</>
			)}
		</Box>
	);
};

export default UserPage;