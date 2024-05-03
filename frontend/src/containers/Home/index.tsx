import React from "react";
import { Features } from "./Features";
import { Hero } from "./Hero";

export function Home() {
	return (
		<div className="flex flex-col">
			<Hero />
			<Features />
		</div>
	);
}
