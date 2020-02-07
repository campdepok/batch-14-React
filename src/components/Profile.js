import React from "react";
import Axios from "axios";

const URL_STRING = "http://localhost:8000/user";

class Profile extends React.Component {
  state = {
    userData: [],
    userName: ""
  };
  goToHome = () => {
    [1, 2, 3].map((item, index) => console.log(index, item));
    this.props.history.push("/");
  };
  getUser = () => {
    Axios.get(URL_STRING)
      .then(response => {
        this.setState({
          userData: response.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  postUser = name => {
    Axios.post(URL_STRING, {
      username: name
    })
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
    // console.log(this.state.userName);
  };
  onChangeUser = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.setState(
        {
          userName: e.target.value
        },
        () => this.postUser(this.state.userName)
      );
    }
  };
  //   componentDidUpdate(prevProps, prevState) {
  //     console.log(prevState);
  //   }
  componentDidMount = () => {
    setTimeout(this.getUser, 2000);
  };

  render() {
    console.log(this.state.userData);
    return (
      <div className="main">
        <h1>Profile</h1>
        <button onClick={this.goToHome}>Home</button>
        <br />
        <button onClick={this.getUser}>Fetch User</button>
        <br />
        <input type="text" onKeyPress={this.onChangeUser} />
        <br />
        {/* <button onClick={() => this.postUser(this.state.userName)}>
          Post User
        </button> */}
        {this.state.userData.length > 0 ? (
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

export default Profile;
