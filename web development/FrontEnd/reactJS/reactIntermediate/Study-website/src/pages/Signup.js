import { Template } from "../component/Template";
import loginImg from "../assets/signup.png";

function Signup({ setIsLoggedIn }) {
  return (
    <div>
      <Template 
        title = "Welcome Back"
        desc1 = "Build skill for today ,tomorrow, and beyond"
        desc2 = "Education to future-proof your career."
        image={loginImg}
        setIsLoggedIn={setIsLoggedIn}
        formtype = "signup"
      />
    </div>
  );
}

export default Signup;
