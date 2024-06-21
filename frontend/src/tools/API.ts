import axios from "axios";
import { getCookie } from "./Cookies";

export const API = axios.create({
	baseURL: "http://localhost:3001/api/v1",
	headers: {
		Authorization: `Bearer ${getCookie("token")}`,
	},
});

export const getUser = async () => {
	return (await API.post("/user/profile")).data.body;
};
