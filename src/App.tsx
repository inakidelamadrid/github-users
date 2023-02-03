import { Switch, Route} from "react-router-dom";
import { Header } from "components/header";
import Main from "pages/main";
import "./App.css";

function App() {
	return (
		<>
			<Header />
			<main className="max-w-screen-lg mx-auto">
				<Switch>
					<Route path="/">
						<Main />
					</Route>
				</Switch>
			</main>
		</>
	);
}

export default App;
