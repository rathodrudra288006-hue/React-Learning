import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
  }

  render() {
    const { name } = this.props;
   
    console.log("Child Render");

    return (
      <div className="user-card">
        
        <h2>Name:{this.props.name}</h2>
        <h3>Location:Ahmedabad</h3>
        <h4>Contect:rathod*****2****6@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
