import React, { Component } from "react";
import HeadFoot from "./components/HeadFoot";
import { contextApp } from "./contexts/state";
import "./App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class HelloMessage extends Component {
  constructor() {
    super();
    this.state = {
      week: 2
    };
  }
  // static defaultProps = {
  //   batch: 15,
  //   city: "Jakarta"
  // };
  // changeState = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       week: 3
  //     });
  //   }, 2000);
  // };

  componentDidMount = () => {
    console.log("did mount");
    // this.changeState();
  };
  componentDidUpdate = (prevProps, prevState) => {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  };

  render() {
    console.log("props", this.props.user);
    return (
      <div className="main">
        <contextApp.Provider value={this.state.week}>
          <HeadFoot title="Header" />
          <p className="main">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            laboriosam maxime beatae, non eligendi dicta doloribus itaque
            excepturi ratione veniam ipsam earum vel autem repudiandae harum
            expedita in illo obcaecati.
          </p>
          <p>
            Minggu ke-{this.state.week} Batch-{this.props.batch || 15} di kota{" "}
            {this.props.city || "Jakarta"}
          </p>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
          <HeadFoot title="Footer" />
        </contextApp.Provider>
      </div>
    );
  }
}

// HelloMessage.defaultProps = {
//   batch: 14,
//   city: "Depok"
// };

const mapStateToProps = ({ user }) => {
  return {
    user // user: user
  };
};

export default connect(mapStateToProps)(HelloMessage);
