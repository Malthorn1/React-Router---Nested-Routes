import React from "react";
import "./style2.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";



// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function NestingExample(props) {
  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <NavLink exact activeClassName="selected"  to="/">Home</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="selected"  to="/topics">Topics</NavLink>
          </li>
        </ul>

        <hr />

        <div  className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/topics">
              <Topics  />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}




function Topics(props) {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative NavLinks.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <NavLink to={`${url}/rendering`}>Rendering with React</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/components`}>Components</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/props-v-state`}>Props v. State</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic( props) {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();
  const {info} = props
  const topic = info.find((topic) => topicId === topic.id) 

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

