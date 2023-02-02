import { UserListCard } from "components/user-list-card";

const CardFixture = {
	default: (
		<UserListCard
			avatar={{
				src: "https://avatars.githubusercontent.com/u/1313787?v=4",
				alt: "Anime representation of Gaby",
			}}
      containerClassName="max-w-sm"
			htmlUrl="https://github.com/Gabriella439"
			login="Gabriella439"
		/>
	),
};

export default CardFixture;
