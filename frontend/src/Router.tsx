import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./containers/Home";
import { Layout } from "@components/Layout";
import { UserType } from "@tools/Types";
import { SignIn } from "@containers/SignIn";
import { getCookie } from "@tools/Cookies";
import { getUser } from "@tools/API";
import { User } from "@containers/User";

type GlobalContextType = {
	user?: UserType;
	setUser?: Function;
};

export const GlobalContext = createContext<GlobalContextType>({
	user: undefined,
	setUser: () => {},
});

export function Router() {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);

	const fetchUser = async () => {
		const response = await getUser();
		console.log(response);
		setUser(response);
		setLoading(false);
	};

	useEffect(() => {
		if (getCookie("token")) {
			fetchUser();
		} else {
			setLoading(false);
		}
	}, []);

	return (
		<GlobalContext.Provider value={{ user, setUser }}>
			<BrowserRouter>
				<Routes>
					{loading ? (
						<Route path="/" element={<>chargement</>} />
					) : (
						<Route path="/" element={<Layout />}>
							{user ? (
								<>
									<Route index element={<User />} />
								</>
							) : (
								<>
									<Route index element={<Home />} />
									<Route path="login" element={<SignIn />} />
								</>
							)}
						</Route>
					)}
				</Routes>
			</BrowserRouter>
		</GlobalContext.Provider>
	);
}
