import { useQuery } from "react-query";
import { useThrottle } from "@react-hook/throttle";
import { Heading } from "components/typography/headings";
import { Search } from "components/search";
import { UserListCard } from "components/user-list-card";
import type { User } from "@saber2pr/types-github-api";

// {"message":"API rate limit exceeded for 177.227.36.15. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)","documentation_url":"https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"}

export default function Main() {
	const [searchValue, setSearchValue] = useThrottle<string>("", 200);

	const handleSearchChange = (value: string) => {
		setSearchValue(value);
	};

	const { isLoading: isLoadingSearch, data } = useQuery(["users", searchValue], () =>
		fetch(`https://api.github.com/search/users?q=${searchValue}"`, {
			headers: {
				'User-Agent': 'request',
			}
		}).then((res) =>
			res.json()
		), {
			enabled: searchValue.length > 3
		}
	);
	const users = (data?.items ?? []) as User[];
	// use a placeholder service for missing avatars
	const placeholderAvatar = "https://via.placeholder.com/150";
	return (
		<div>
			<div className="flex">
				<Heading className="" level={1} text="Github Users" />
				<Search
					className="ml-auto w-1/3"
					placeholder="Enter username or email"
					value={searchValue}
					onChange={handleSearchChange}
				/>
			</div>
			<div className="grid grid-cols-3 mt-4 gap-x-2 gap-y-2">
				{users.map((user) => {
					return (
						<UserListCard
							key={user.id}
							login={user.login}
							htmlUrl={user.html_url}
							avatar={{
								src: user.avatar_url ?? placeholderAvatar,
								alt: `${user.login} avatar`,
							}}
						/>
					);
				})}
			</div>
		</div>
	);
}
