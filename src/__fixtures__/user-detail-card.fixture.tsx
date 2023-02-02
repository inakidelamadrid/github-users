import { UserDetailCard } from "components/user-detail-card";

const CardFixture = {
	default: (
		<UserDetailCard
			avatar={{
				src: "https://avatars.githubusercontent.com/u/1313787?v=4",
				alt: "Anime representation of Gaby",
			}}
      bio="Twitter fanatic. Hardcore organizer. Bacon practitioner. Tv nerd. General travel expert. Beer advocate. Alcoholaholic. Social media ninja."
      containerClassName=""
			htmlUrl="https://github.com/Gabriella439"
			login="Gabriella439"
      name="Gabriella Gonzalez"
      location="San Jose, CA"
      email="email@example.com"
      publicRepos={10}
      followers={10}
      following={10}
      blogUrl="haskellforall.com"
      twitterUsername="gabriella439"
		/>
	),
};

export default CardFixture;
