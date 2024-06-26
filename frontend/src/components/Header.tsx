import React, { useContext } from "react";

import logo from "@assets/illustrations/argentBankLogo.png";
import { GlobalContext } from "src/Router";
import { useNavigate } from "react-router-dom";
import { deleteCookie } from "@tools/Cookies";

export function Header() {
	const { user } = useContext(GlobalContext);
	const navigate = useNavigate();

	return (
		<div className="flex justify-between py-1 px-5 items-center">
			<img src={logo} alt="" className="w-[200px]" />
			{user ? (
				<div className="flex gap-2">
					<p>{user.firstName}</p>
					<button
						type="button"
						onClick={() => {
							deleteCookie("token");
							window.location.reload();
						}}
					>
						Sign Out
					</button>
				</div>
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
