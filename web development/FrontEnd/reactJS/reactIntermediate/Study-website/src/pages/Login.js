
import { Template } from "../component/Template";
import loginImg from "../assets/login.png";

function Login({ setIsLoggedIn }) {
  return (
    <div>
      <Template 
        title = "Welcome Back"
        desc1 = "Build skill for today ,tomorrow, and beyond"
        desc2 = "Education to future-proof your career."
        image={loginImg}
        setIsLoggedIn={setIsLoggedIn}
        formtype = "loggedIn"
      />
    </div>
  );
}

export default Login;
