import {useState} from "react";
import { useQuery } from "react-query";
import { Heading } from "components/typography/headings";
import { Search } from "components/search";
import { UserListCard } from "components/user-list-card";
import type { User } from "@saber2pr/types-github-api";

export default function Main() {
	const [searchValue, setSearchValue] = useState<string>("");
	const handleSearchChange = (value: string) => {
		setSearchValue(value);
		console.log("Search value", value);
	};
	const { data } = useQuery("repoData", () =>
		fetch("https://api.github.com/search/users?q=inakidelamadrid").then((res) =>
			res.json()
		)
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
			<div className="grid grid-cols-3">
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
