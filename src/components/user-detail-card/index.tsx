import { Card } from "components/card";
import { CardAvatarProps } from "components/card/card-avatar";
import { Heading } from "components/typography/headings";
import { CountInfo } from "./count-info";
import { ReactComponent as Github } from "icons/iconmonstr-github-1.svg";
import { ReactComponent as Twitter } from "icons/iconmonstr-twitter-1.svg";
import { ReactComponent as Mail } from "icons/iconmonstr-mail-thin.svg";
import { ReactComponent as LinkIcon } from "icons/iconmonstr-link-thin.svg";
import { ReactComponent as LocationIcon } from "icons/iconmonstr-location-2.svg";


interface UserDetailCardProps {
	avatar: Pick<CardAvatarProps, "src" | "alt">;
	htmlUrl: string;
	login: string;
	bio?: string;
	blogUrl?: string;
	containerClassName?: string;
	email?: string;
	location?: string;
	name?: string;
	twitterUsername?: string;
  publicRepos: number;
  followers: number;
  following: number;
}

export const UserDetailCard = ({
	avatar,
	htmlUrl,
	login,
	bio,
	blogUrl,
	containerClassName = "",
	email,
	location,
	name,
	twitterUsername,
  publicRepos,
  followers,
  following,
}: UserDetailCardProps) => {
	return (
		<Card className={containerClassName}>
			<div className="flex gap-x-7">
				<Card.Avatar {...avatar} variant="large" />
				<div className="grid grid-cols-[25%_75%] grid-rows-2 gap-y-12 gap-x-16 pt-6">
					<div className="flex flex-col space-y-4">
						{name && <Heading level={2} text={name}></Heading>}
						<p>{login}</p>
						{bio && <p>{bio}</p>}
					</div>
					<div>
						<div className="flex items-center gap-x-2">
							<a
								href={htmlUrl}
								target="_blank"
								rel="noreferrer"
								className="text-sm text-cyan-300"
							>
								<Github className="w-6 h-6 fill-black" />
							</a>
							<span>{login}</span>
						</div>
            <div className="flex bg-gray-100 mt-4 py-4 px-8 max-w-fit space-x-8 rounded-xl">
              <CountInfo count={publicRepos} label="Repos" />
              <CountInfo count={followers} label="Followers" />
              <CountInfo count={following} label="Following" />
            </div>
					</div>
					<div>
            {location && <p><LocationIcon/>{location}</p>}
            {email && <p><Mail/>{email}</p>}
          </div>
					<div>
            {twitterUsername && <p><Twitter/>{twitterUsername}</p>}
            {blogUrl && <p><LinkIcon/>{blogUrl}</p>}
          </div>
				</div>
			</div>
		</Card>
	);
};

// <a
// 	href={htmlUrl}
// 	target="_blank"
// 	rel="noreferrer"
// 	className="text-sm text-cyan-300"
// >
// 	<Github className="w-4 h-4 fill-black" />
// </a>
// <a
// 	href={htmlUrl}
// 	target="_blank"
// 	rel="noreferrer"
// 	className="text-sm text-cyan-300 ml-auto"
// >
// 	View profile
// </a>
