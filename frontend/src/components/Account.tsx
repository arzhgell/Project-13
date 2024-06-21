import React from "react";
import { Button } from "./Button";

export function Account({ account }: any) {
	return (
		<div className="bg-white text-blue flex justify-between items-center p-6 w-full">
			<div>
				<p>{account.name}</p>
				<p className="font-bold text-3xl">${account.amount}</p>
				<p>{account.text}</p>
			</div>
			<Button
				label="View transactions"
				onClick={() => {
					console.log("pouet 2");
				}}
			/>
		</div>
	);
}
