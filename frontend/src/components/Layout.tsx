import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
	return (
		<div className="text-[#2c3e50] min-h-screen flex flex-col">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}
