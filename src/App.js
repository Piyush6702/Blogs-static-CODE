import logo from "./logo.svg";
import "./App.css";
import BlogCollection from "./Pages/BlogCollection";
import Blog from "./Individual Blog/Blog";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from "./components/Hero/Hero";
import Pagination from "./components/page/pagination";
import Competitive from "./Pages/Competitive";
import Proglanguage from "./Pages/Proglanguage";
import Webdev from "./Pages/Webdev";
import DataAlgo from "./Pages/DataAlgo";
import Appdev from "./Pages/Appdev";
import SocialMedia from "./Pages/SocialMedia";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={BlogCollection} />
          <Route path="/blog" exact component={Blog} />
          <Route
            path="/Advantages-of-Competitive-Programming"
            exact
            component={Competitive}
          />
          <Route
            path="/Which-programming-language-would-be-best-among-Python-Java-and-Cpp"
            exact
            component={Proglanguage}
          />
          <Route
            path="/Should-I-learn-Web-Development"
            exact
            component={Webdev}
          />
          <Route
            path="/How-to-master-Data-structures-and-Algorithms"
            exact
            component={DataAlgo}
          />
          <Route
            path="/7-Steps-on-How-to-be-an-App-Developer-from-Beginner-to-Pro"
            exact
            component={Appdev}
          />
          <Route
            path="/7-Best-Tips-to-Elevate-Your-Social-Media-Marketing-Strategy"
            exact
            component={SocialMedia}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
