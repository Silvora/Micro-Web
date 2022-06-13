import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Home from "./view/home/index"
import About from "./view/about/index"
import Index from "./index"

export default function Root(props) {
  return (

    <BrowserRouter basename="/react">
      <div>
        <Link to="/home">home</Link>
        <Link to="/index">index</Link>
        <Link to="/about">about</Link>
      </div>
      <Switch>
        <Route path="/about"><About></About></Route>
        <Route path="/index"><Index></Index></Route>
        <Route path="/home"><Home></Home></Route>
        {/* <Route path="/"><Redirect to="/home"></Redirect></Route> */}
      </Switch>
    </BrowserRouter>

  )
}
