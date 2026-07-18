import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log("Child Constructor");
  }

  async componentDidMount() {
    //console.log("Child Component Did Mount");
    const data = await fetch(
      "https://api.github.com/users/rathodrudra288006-hue",
    );

    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    //console.log("Child Render");

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>

        <h4>Contect:rathod*****2****6@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
