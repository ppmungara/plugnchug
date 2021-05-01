import React from 'react';
import '../css/App.css';

import Home from "./Home"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Pages

import NavBar from "../components/NavBar";
import Plugnchug from "../components/Plugnchug";
import Courses from "../components/Courses";
import Contact from "../components/Contact";
import Error from"../components/Error";

import universities from '../data/universities';

import {Provider} from "react-redux";

import {createStore} from 'redux';
import reducer from '../reducer/reducer';

const initState = {
  universities: universities,
  university: "University of Calgary",
  course: "Math 211",
  assignment: 1,
  question: 1,
  numQuestions: 10,
  url: "",
  commentData: null
}

const store = createStore(reducer, initState);

function App() {
  document.title = "plugnchug";
  return (
    <Provider store={store}>
      <Router>
        <Plugnchug />
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/contact-us">
            <Contact />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
