import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./containers/Home";
import { Layout } from "@components/Layout";
import { UserType } from "@tools/Types";
import { Login } from "@containers/Login/Login";

type GlobalContextType = {
	user?: UserType;
};

export const GlobalContext = createContext<GlobalContextType>({
	user: undefined,
});

export function Router() {
	const [user, setUser] = useState();

	useEffect(() => {}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
