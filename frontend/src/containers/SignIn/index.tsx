import { Button } from "@components/Button";
import { InputCheckbox, InputText } from "@components/Input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./SignInRequests";
import { setCookie } from "@tools/Cookies";

export function SignIn() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const fetchAuthToken = async () => {
		const token = await login(email, password);
		console.log(token);
		setCookie("token", token, rememberMe ? 604800 : 86400);

		navigate("/");
	};

	return (
		<div className="bg-[#12002b] flex-1 flex justify-center p-10">
			<div className="bg-white w-[300px] flex flex-col justify-center items-center h-fit p-10">
				<p>Sign In</p>
				<div className="flex flex-col gap-4">
					<InputText
						label="Username"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<InputText
						label="Password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						type="password"
					/>
					<InputCheckbox
						label="Remember me"
						onChange={(e) => {
							setRememberMe(e.target.checked);
						}}
					/>
					<Button
						label="Sign In"
						onClick={() => {
							fetchAuthToken();
						}}
					/>
				</div>
			</div>
		</div>
	);
}
