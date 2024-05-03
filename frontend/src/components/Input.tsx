import React from "react";

export function InputText({ label }) {
	return (
		<div className="w-full">
			{label && <label className="font-semibold">{label}</label>}
			<input type="text" className="border border-black w-full" />
		</div>
	);
}

export function InputCheckbox({ label }) {
	return (
		<div className="w-full flex gap-2">
			<input type="checkbox" className="" />

			{label && <label className="font-semibold">{label}</label>}
		</div>
	);
}
