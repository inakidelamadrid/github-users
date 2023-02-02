import React from "react";
import { clsx } from "clsx";
import { CardAvatar } from "./card-avatar";
import { CardContent } from "./card-content";

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
	<div
		className={clsx(
			className,
			"border-2 border-gray-100 px-2.5 py-4 rounded-md"
		)}
	>
		{children}
	</div>
);
Card.Avatar = CardAvatar;
Card.Content = CardContent;

export { Card };
