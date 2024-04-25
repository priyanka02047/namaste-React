import User from "./User";
import UserClass from "./UserClass";
const AboutUs = () => {
  return (
    <div>
      <div> Welcome to about us</div>
      <User name={"function component"} />
      <UserClass name={"class component"} />
    </div>
  );
};

export default AboutUs;
