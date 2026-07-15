import User from "./User";
import UserClass from "./UserClass";


const About extends React.Component{}

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React Web Series</h2>
      <User name={"Rudra(function Based)"} />
      <UserClass name={"Abhishek(class Based)"} />
    </div>
  );
};
export default About;
