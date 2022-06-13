/** @format */

import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import About from "./view/about";
import Home from "./view/home";
function App() {
	return (
		<BrowserRouter basename='/react'>
			<div>
				<Link to='/home'>home</Link>
				<Link to='/about'>about</Link>
			</div>
			<Route path='/home'>
				<Home></Home>
			</Route>
			<Route path='/about'>
				<About></About>
			</Route>
		</BrowserRouter>
	);
}

export default App;
