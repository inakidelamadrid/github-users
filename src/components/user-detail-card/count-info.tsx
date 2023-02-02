import { Heading } from "components/typography/headings";

interface CountInfoProps {
	count: number;
	label: string;
}

export const CountInfo = ({ count, label }: CountInfoProps) => {
	return (
		<div className="flex flex-col items-center">
			<Heading level={2} text={label} />
			<p>{count}</p>
		</div>
	);
};
