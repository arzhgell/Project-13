import { API } from "@tools/API";

export const login = async (email: string, password: string) => {
	return (await API.post("/user/login", { email, password })).data.body.token;
};
