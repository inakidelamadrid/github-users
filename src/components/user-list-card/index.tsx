import { Card } from "components/card";
import { CardAvatarProps } from "components/card/card-avatar";

interface UserListCardProps {
	avatar: Pick<CardAvatarProps, "src" | "alt">;
  containerClassName?: string;
	login: string;
	htmlUrl: string;
}

export const UserListCard = ({ avatar, containerClassName="", login, htmlUrl }: UserListCardProps) => {
	return (
		<Card className={containerClassName}>
			<div className="flex flex-col gap-y-5">
				<div className="flex items-center gap-x-2">
				  <Card.Avatar {...avatar} variant="normal" />
					<div className="">{login}</div>
				</div>
        <div className="flex">
					<a
						href={htmlUrl}
						target="_blank"
						rel="noreferrer"
						className="text-sm text-cyan-300"
					>
						Github
					</a>
					<a
						href={htmlUrl}
						target="_blank"
						rel="noreferrer"
						className="text-sm text-cyan-300 ml-auto"
					>
						View profile
					</a>

        </div>
			</div>
		</Card>
	);
};
