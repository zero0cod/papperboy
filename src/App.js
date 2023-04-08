import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_KEY;
  render() {
    return (
      <>
        <Router>
          <NavBar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="home"
                  pageSize={3}
                  apiKey={this.apiKey}
                  category="general"
                  country="in"
                />
              }
            />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={3}
                  apiKey={this.apiKey}
                  category="general"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={3}
                  apiKey={this.apiKey}
                  category="business"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={3}
                  apiKey={this.apiKey}
                  category="entertainment"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={3}
                  apiKey={this.apiKey}
                  category="technology"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={3}
                  apiKey={this.apiKey}
                  category="sports"
                  country="in"
                />
              }
            />
            <Route
              key="science"
              exact
              path="/science"
              element={
                <News
                  pageSize={3}
                  apiKey={this.apiKey}
                  category="science"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={3}
                  apiKey={this.apiKey}
                  category="health"
                  country="in"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
