import {useState} from "react";
import { Header } from "components/header";
import { Heading } from "components/typography/headings";
import { Search } from "components/search";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    console.log('Search value', value);
  }
	return (
		<>
			<Header />
			<main className="max-w-screen-lg mx-auto">
        <div className="flex">
				  <Heading className="" level={1} text="Github Users" />
          <Search className="ml-auto w-1/3" placeholder="Enter username or email" value={searchValue} onChange={handleSearchChange}/>
        </div>
			</main>
		</>
	);
}

export default App;
