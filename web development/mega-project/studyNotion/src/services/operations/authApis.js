import { endpoints } from "../apis";
import {apiConnector} from '../apiconnector';
import { setLoading } from "../../Slices/authSlice";
import toast from "react-hot-toast";
import { setUser } from "../../Slices/profileSlice";
import { setToken } from "../../Slices/authSlice";
import { resetCart } from "../../Slices/cartSlice";

const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API,
    RESETPASSTOKEN_API,
    RESETPASSWORD_API
} = endpoints;

export function signup(firstName,lastName,email,password,confrimPassword,otp,accountType,navigate)
{
    return async(dispatch) => {
        const toastId = toast.loading("Loading...")
        try{
            
            const response = await apiConnector("POST",SIGNUP_API,{firstName,lastName,email,password,confrimPassword,otp,accountType});

            console.log("SIGNUP API RESPONSE............", response)

            if(!response.data.success)
            {
                toast.error("error in sign up");
                throw new Error(response.data.message);
            }

            toast.success("signup succefully");
            navigate("/login");
        }
        catch(error)
        {
            console.log("SIGNUP API ERROR............");
            console.log(error.message);
            navigate("/signup");
            toast.error("signup error");
        }
        toast.dismiss(toastId)
        dispatch(setLoading(false))
    }
}


export function login(email,password,navigate) {
    const toastId = toast.loading("Loading...")
    return async(dispatch) => {
        console.log("first")
        dispatch(setLoading(true))
        try{
            const response = await apiConnector("POST",LOGIN_API,{email,password});

            console.log("api response for login" , response);

            if(!response.data.success)
            {
                toast.error(response.data.message)
                throw new Error(response)
            }

            toast.success('Login Successfully');
            const userImage = response.data?.User?.image
            ? response.data.User.image
            : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.User.firstName} ${response.data.User.lastName}`
            localStorage.setItem("user", JSON.stringify( { ...response.data.User, image: userImage }))
            localStorage.setItem("token", JSON.stringify(response.data.token));
            dispatch(setUser( { ...response.data.User, image: userImage }));
            dispatch(setToken(response.data.token));
            navigate("/dashboard/my-profile")
        }
        catch(error)
        {
            console.log("LOGIN API ERROR............", error)
            toast.error(error.message);
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function sendOTP(email,navigate)
{
    return async(dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        
        try{
            const response = await apiConnector("POST",SENDOTP_API,{email});

            console.log("SENDOTP API RESPONSE............", response)

            if(!response.data.success)
            {
                toast.error("error in otp sending");
                throw new Error(response.data.Error);
            }

            toast.success("otp send successfully");
            navigate("/verifyEmail")
        }
       catch (error) 
        {
            console.log("SENDOTP API ERROR............", error)
            toast.error("Could Not Send OTP")
        }
        toast.dismiss(toastId)
        dispatch(setLoading(false))
    }
}

export function getPasswordResetToken(email, setEmailSent) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", RESETPASSTOKEN_API, {
          email,
        })
  
        console.log("RESETPASSTOKEN RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Reset Email Sent")
        setEmailSent(true)
      } catch (error) {
        console.log("RESETPASSTOKEN ERROR............", error)
        toast.error("Failed To Send Reset Email")
      }
      toast.dismiss(toastId)
      dispatch(setLoading(false))
    }
  }
  


export function resetPassword(password, confirmPassword, token, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("PUT", RESETPASSWORD_API, {
          password,
          confirmPassword,
          token,
        })
  
        console.log("RESETPASSWORD RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Password Reset Successfully")
        navigate("/resetDone")
      } catch (error) {
        console.log("RESETPASSWORD ERROR............", error)
        toast.error("Failed To Reset Password")
      }
      toast.dismiss(toastId)
      dispatch(setLoading(false))
    }
  }
  

  export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
      dispatch(resetCart())
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
       console.log(localStorage.getItem("token"))
      navigate("/")
    }
  }

  export function putOtp(otp){
    
  }