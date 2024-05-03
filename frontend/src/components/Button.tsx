import React from "react";

export function Button({ label, onClick }) {
	return (
		<button
			className="bg-green hover:underline p-2 text-white font-bold"
			onClick={onClick}
		>
			{label}
		</button>
	);
}
