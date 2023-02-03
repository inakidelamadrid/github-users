import { Card } from "components/card";
import { CardAvatarProps } from "components/card/card-avatar";
import { ReactComponent as Github } from 'icons/iconmonstr-github-1.svg';
import {Link} from 'react-router-dom';

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
        <div className="flex pl-2">
					<a
						href={htmlUrl}
						target="_blank"
						rel="noreferrer"
						className="text-sm text-cyan-300"
					>
						<Github className="w-4 h-4 fill-black" />
					</a>
					<Link
						to={`/${login}`}
						className="text-sm text-cyan-300 ml-auto"
					>
						View profile
					</Link>
        </div>
			</div>
		</Card>
	);
};
