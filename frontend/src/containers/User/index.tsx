import { Account } from "@components/Account";
import { Button } from "@components/Button";
import { InputText } from "@components/Input";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "src/Router";
import { editUser } from "./UserRequests";

export function User() {
	const { user, setUser } = useContext(GlobalContext);
	const [isEdit, setIsEdit] = useState(false);
	const [firstName, setFirstName] = useState(user?.firstName ?? "");
	const [lastName, setLastName] = useState(user?.lastName ?? "");

	const updateUser = async () => {
		console.log("update user");

		const codeResponse = await editUser(firstName, lastName);
		setUser({ ...user, firstName, lastName });
		setIsEdit(false);
	};

	useEffect(() => {
		console.log(user);
	}, [user]);

	return (
		<div className="bg-dark text-white flex flex-col items-center gap-2 grow py-6">
			<p>Welcome back</p>

			{isEdit ? (
				<div className="flex flex-col gap-2 items-center">
					<div className="flex gap-2">
						<InputText
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<InputText
							value={lastName}
							onChange={(e) => {
								setLastName(e.target.value);
							}}
						/>
					</div>
					<div className="flex gap-2">
						<Button
							label="Save"
							onClick={() => {
								updateUser();
							}}
						/>
						<Button
							label="Cancel"
							onClick={() => {
								setIsEdit(false);
							}}
						/>
					</div>
				</div>
			) : (
				<div className="flex flex-col gap-4">
					<p>
						{user?.firstName} {user?.lastName}
					</p>
					<Button
						label="Edit Name"
						onClick={() => {
							setIsEdit(true);
						}}
					/>
				</div>
			)}
			<div className="flex flex-col gap-6 w-[80%] mt-6">
				<Account
					account={{
						name: "Argent Bank Checking (x8349)",
						amount: 2082.79,
						text: "Available Balance",
					}}
				/>
				<Account
					account={{
						name: "Argent Bank Checking (x8349)",
						amount: 2082.79,
						text: "Available Balance",
					}}
				/>
				<Account
					account={{
						name: "Argent Bank Checking (x8349)",
						amount: 2082.79,
						text: "Available Balance",
					}}
				/>
			</div>
		</div>
	);
}
