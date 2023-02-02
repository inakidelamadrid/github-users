import { Card } from "components/card";

const CardFixture = {
	default: (
		<Card>
			<Card.Content>Hola Mundo</Card.Content>
		</Card>
	),
	"with avatar": (
		<Card>
			<Card.Content>
				<Card.Avatar
					src="https://avatars.githubusercontent.com/u/1680157?v=4"
					alt="portrait of the github user"
				/>
				Hola Mundo
			</Card.Content>
		</Card>
	),
};

export default CardFixture;
