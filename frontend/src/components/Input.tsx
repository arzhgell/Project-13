import React from "react";

type InputTextType = {
	label?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
};

export function InputText({
	label,
	value,
	onChange,
	type = "text",
}: InputTextType) {
	return (
		<div className="w-full">
			{label && <label className="font-semibold">{label}</label>}
			<input
				type={type}
				className="border border-black w-full text-blue"
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}

type InputCheckboxType = {
	label: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function InputCheckbox({ label, onChange }: InputCheckboxType) {
	return (
		<div className="w-full flex gap-2">
			<input type="checkbox" className="" />

			{label && <label className="font-semibold">{label}</label>}
		</div>
	);
}
