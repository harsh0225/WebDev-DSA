import { Template } from "../Components/core/Auth/Template";
import loginImg from "../assets/Images/signup.webp";

function Signup({ setIsLoggedIn }) {
  return (
    <div className="mb-[100px]">
      <Template 
        title = "Welcome Back"
        desc1 = "Build skill for today ,tomorrow, and beyond"
        desc2 = "Education to future-proof your career."
        image={loginImg}
        formtype = "signup"
      />
    </div>
  );
}

export default Signup;
