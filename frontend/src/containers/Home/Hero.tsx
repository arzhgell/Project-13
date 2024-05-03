import React from "react";

import bankTree from "@assets/illustrations/bank-tree.jpeg";

export function Hero() {
	return (
		<div className="relative">
			<div className="h-[400px] overflow-hidden">
				<img
					src={bankTree}
					alt="Bank tree"
					className="w-full object-none object-bottom"
				/>
			</div>
			<div className="absolute right-12 top-12 bg-white w-[300px] p-8">
				<p className="text-2xl font-bold">No fees.</p>
				<p className="text-2xl font-bold"> No minimum deposit.</p>
				<p className="text-2xl font-bold">High interest rates.</p>
				<p className="text-lg mt-4">
					Open a savings account with Argent Bank today!
				</p>
			</div>
		</div>
	);
}
