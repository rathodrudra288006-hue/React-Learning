import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Perent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>
        <User name={"Rudra(function Based)"} />
        <UserClass name={"Abhishek(class Based1)"} />
      </div>
    );
  }
}

/*const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React Web Series</h2>
      <User name={"Rudra(function Based)"} />
      <UserClass name={"Abhishek(class Based)"} />
    </div>
  );
};*/
export default About;
