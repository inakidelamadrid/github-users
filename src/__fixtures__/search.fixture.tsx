import { useState } from "react";
import { Search } from "components/search";

const SearchFixtureWithChangeHandler = () => {
	const [value, setValue] = useState("");
	return (
		<>
			<Search
				placeholder="Enter username or email"
				value={value}
				onChange={setValue}
			/>
			<div className="text-black text-lg">{value}</div>
		</>
	);
};
const SearchFixture = {
	empty: (
		<Search
			placeholder="Enter username or email"
			value=""
			onChange={() => {}}
		/>
	),
	withValue: (
		<Search
			placeholder="Enter username or email"
			value="test"
			onChange={() => {}}
		/>
	),
  withChangeHandler: <SearchFixtureWithChangeHandler />
};

export default SearchFixture;
