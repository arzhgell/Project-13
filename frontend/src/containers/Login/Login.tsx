import { Button } from "@components/Button";
import { InputCheckbox, InputText } from "@components/Input";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
	const navigate = useNavigate();
	return (
		<div className="bg-[#12002b] flex-1 flex justify-center p-10">
			<div className="bg-white w-[300px] flex flex-col justify-center items-center h-fit p-10">
				<p>Sign In</p>
				<div className="flex flex-col gap-4">
					<InputText label="Username" />
					<InputText label="Password" />
					<InputCheckbox label="Remember me" />
					<Button
						label="Sign In"
						onClick={() => {
							navigate("/");
						}}
					/>
				</div>
			</div>
		</div>
	);
}
