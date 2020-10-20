import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";
import reducer, { addUser } from "./ducks/reducer";

class App extends Component {
  async componentDidMount() {
    const user = await Axios.get("/api/verify");
    user = user.data;
    if (user.verified === true) {
      this.props.addUser(user.data);
    } else {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        {/* <Nav /> */}
        {routes}
        {this.props.location.pathname == "/" ? null : <Nav />}
      </div>
    );
  }
}
function mapStateToProps(reducerState) {
  return reducerState;
}

export default connect(mapStateToProps, { addUser })(withRouter(App));
