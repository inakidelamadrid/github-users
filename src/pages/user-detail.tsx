import type { User } from "@saber2pr/types-github-api";
import { useQuery } from "react-query";
import { Heading } from "components/typography/headings";
import { UserDetailCard } from "components/user-detail-card";
import { useParams } from "react-router-dom";

export default function UserDetail() {
	const { id: login } = useParams();
	const apiUrl = `https://api.github.com/users/${login}`;
	const response = useQuery("userDetail", () =>
		fetch(apiUrl).then((res) => res.json())
	);
	const user: User = response.data;
	const placeholderAvatar = "https://via.placeholder.com/150";

	return (
		<div>
			<UserDetailCard
				avatar={{
					src: user.avatar_url ?? placeholderAvatar,
					alt: `${user.login} avatar`,
				}}
				followers={user.followers}
				htmlUrl={user.html_url}
				login={user.login}
        bio={user.bio ?? ''}
        blogUrl={user.blog ?? ''}
        email={user.email ?? ''}
        following={user.following}
        location={user.location ?? ''}
        name={user.name ?? ''}
        publicRepos={user.public_repos}
        twitterUsername={user.twitter_username ?? ''}
			/>
		</div>
	);
}
