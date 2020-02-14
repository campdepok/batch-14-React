import React from "react";
// import Axios from "axios";
import { connect } from "react-redux";
import { countAdd, countSubstract } from "../redux/actions/count";
import { getAllUser, postNewUser } from "../redux/actions/user";
// const URL_STRING = "http://localhost:8000/user";
// console.log(process.env.REACT_APP_URL_STRING);

class Profile extends React.Component {
  state = {
    userData: [],
    userName: "",
    number: 0
  };
  goToHome = () => {
    [1, 2, 3].map((item, index) => console.log(index, item));
    this.props.history.push("/");
  };
  getUser = async () => {
    // Axios.get(process.env.REACT_APP_URL_STRING)
    //   .then(response => {
    //     this.setState({
    //       userData: response.data.data
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    await this.props.dispatch(getAllUser());
    this.setState({
      userData: this.props.user.userData
    });
  };
  postUser = name => {
    // Axios.post(process.env.REACT_APP_URL_STRING, {
    //   username: name
    // })
    //   .then(response => console.log(response.data))
    //   .catch(err => console.log(err));
    // console.log(this.state.userName);
    this.props.dispatch(postNewUser(name));
  };
  onChangeUser = e => {
    this.setState({
      userName: e.target.value
    });
  };
  onChangeNumber = e => {
    let number = parseInt(e.target.value) || 0;
    this.setState({
      number
    });
  };
  addNumber = () => {
    this.props.dispatch(countAdd(this.state.number));
  };
  substractNumber = () => {
    this.props.dispatch(countSubstract(this.state.number));
  };
  //   componentDidUpdate(prevProps, prevState) {
  //     console.log(prevState);
  //   }
  componentDidMount = () => {
    setTimeout(this.getUser, 2000);
  };

  render() {
    // console.log("state", this.state);
    const { count } = this.props;
    // console.log("redux", count, user);
    return (
      <div className="main">
        <h1>Profile</h1>
        <button onClick={this.goToHome}>Home</button>
        <br />
        <h3>{count.number}</h3>
        <button onClick={this.addNumber}>Add</button>
        <button onClick={this.substractNumber}>Substract</button>
        <br />
        <input type="number" onChange={this.onChangeNumber} />
        <br />
        <input type="text" onChange={this.onChangeUser} />
        <button onClick={() => this.postUser(this.state.userName)}>
          Post User
        </button>
        {!this.props.user.isPending ? (
          <ol>
            {this.state.userData.map(user => {
              return <li key={user.id}>{user.username}</li>;
            })}
          </ol>
        ) : (
          <img src={require("../assets/image/giphy.gif")} alt="loading-gif" />
        )}
      </div>
    );
  }
}

// 2 enhancer :
// 1. mapStateToProps
// 2. mapDispatchToProps

const mapStateToProps = ({ count, user }) => {
  return {
    count, // count: count
    user // user: user
  };
};

export default connect(mapStateToProps)(Profile);
