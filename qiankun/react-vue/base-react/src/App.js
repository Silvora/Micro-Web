//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter >
      <div>
        <Link to="/react">react</Link>
        <Link to="/vue">vue</Link>
      </div>
      {/* <Route path="/react"></Route>
      <Route path="/vue"></Route> */}
      <div id='container'></div>
    </BrowserRouter>
  );
}

export default App;
