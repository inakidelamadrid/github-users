import { Routes, Route } from 'react-router-dom';
import { Header } from "components/header";
import Main from "pages/main";
import UserDetail from "pages/user-detail";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<Router>
			<Header />
			<main className="max-w-screen-lg mx-auto">
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/:id" element={<UserDetail />} />
      </Routes>
			</main>
		</Router>
	);
}

export default App;
