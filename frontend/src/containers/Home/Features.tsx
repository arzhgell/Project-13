import React from "react";
import iconChat from "@assets/illustrations/icon-chat.png";
import iconMoney from "@assets/illustrations/icon-money.png";
import iconSecurity from "@assets/illustrations/icon-security.png";

export function Features() {
	const features = [
		{
			icon: iconChat,
			title: "You are our #1 priority",
			description:
				"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
		},
		{
			icon: iconMoney,
			title: "More savings means higher rates",
			description:
				"The more you save with us, the higher your interest rate will be!",
		},
		{
			icon: iconSecurity,
			title: "Security you can trust",
			description:
				"We use top of the line encryption to make sure your data and money is always safe.",
		},
	];
	return (
		<div className="flex justify-between">
			{features.map((feature) => {
				return (
					<div
						key={feature.title}
						className="w-1/3 flex flex-col items-center text-center gap-4 p-10"
					>
						<div className="rounded-full aspect-square border-green border-[10px] w-1/2">
							<img
								src={feature.icon}
								alt={feature.title}
								className="object-cover h-full w-full"
							/>
						</div>
						<p className="text-xl font-bold">{feature.title}</p>
						<p>{feature.description}</p>
					</div>
				);
			})}
		</div>
	);
}
