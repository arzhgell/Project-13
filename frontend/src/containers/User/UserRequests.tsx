import { API } from "@tools/API";

export const editUser = async (firstName: string, lastName: string) => {
	return (await API.put("/user/profile", { firstName, lastName })).data.status;
};
