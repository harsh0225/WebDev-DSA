import { Template } from '../Components/core/Auth/Template';
import loginImg from '../assets/Images/login.webp';

function Login() {
  return (
    <div>
      <Template 
        title = "Welcome Back"
        desc1 = "Build skill for today ,tomorrow, and beyond"
        desc2 = "Education to future-proof your career."
        image={loginImg}
        formtype = "loggedIn"
      />
    </div>
  );
}

export default Login;
