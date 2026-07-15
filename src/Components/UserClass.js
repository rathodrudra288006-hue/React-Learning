import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Count:{this.state.count} </h1>
        <button
          onClick={() => {
            // Never Update State Variable Directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name:{this.props.name}</h2>
        <h3>Location:Ahmedabad</h3>
        <h4>Contect:rathod*****2****6@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
