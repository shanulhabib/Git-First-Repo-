import React, { Component } from "react";
// import "./App.css";
// import { connect } from "react-redux";
import Covid from "./components/Covid/Covid";
import Editor from "./components/Editor/Editor";
import BurgerBuilder from "./components/BurgerBuilder/BurgerBuilder";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StatelessComponent from "./components/StatelessComponent";

class App extends Component {
  render() {
    return (
      <>
      <StatelessComponent/>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Editor</Link>
              </li>
              <li>
                <Link to="/Covid">Covid</Link>
              </li>
              <li>
                <Link to="/BurgerBuilder">BurgerBuilder</Link>
              </li>
            </ul>

            <hr />

            <Switch>
              <Route exact path="/">
                <Editor />
              </Route>
              <Route path="/Covid">
                <Covid />
              </Route>
              <Route path="/BurgerBuilder">
                <BurgerBuilder />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;

// const mapStateToProps = (state) => {
//   return {
//     msg: state.message,
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     ButtonChange: () =>
//       dispatch({
//         type: "Message Change",
//       }),

//     Count: () => {
//       dispatch({
//         type: "Increment",
//       });
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
