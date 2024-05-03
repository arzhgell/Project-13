import React, { useContext } from "react";

import logo from "@assets/illustrations/argentBankLogo.png";
import { GlobalContext } from "src/Router";
import { useNavigate } from "react-router-dom";

export function Header() {
	const { user } = useContext(GlobalContext);
	const navigate = useNavigate();

	return (
		<div className="flex justify-between py-1 px-5 items-center">
			<img src={logo} alt="" className="w-[200px]" />
			{user ? (
				<div>Logged</div>
			) : (
				<div
					onClick={() => {
						console.log("Sign in");
						navigate("/login");
					}}
					className="cursor-pointer font-bold hover:underline"
				>
					Sign In
				</div>
			)}
		</div>
	);
}
