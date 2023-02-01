import { Search } from "components/search";

const SearchFixture = {
  empty: <Search placeholder="Enter username or email" value="" onChange={() => {}} />,
  withValue: <Search placeholder="Enter username or email" value="test" onChange={() => {}} />,
};

export default SearchFixture;