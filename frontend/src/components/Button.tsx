import React from "react";

type ButtonType = {
	label: string;
	onClick: () => void;
};

export function Button({ label, onClick }: ButtonType) {
	return (
		<button
			className="bg-green hover:underline p-2 text-white font-bold"
			onClick={onClick}
			type="button"
		>
			{label}
		</button>
	);
}
