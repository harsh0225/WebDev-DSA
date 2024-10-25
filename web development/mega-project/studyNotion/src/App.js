import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import { ResetDone } from "./Pages/ResetDone";
import { UpdatePassword } from "./Pages/updatePassword";
import { Navbar } from "./Components/Common/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { ForgotPassword } from "./Pages/ForgotPassword";
import { VerifyEmail } from "./Pages/VerifyEmail";
import { About } from "./Pages/About";
import { ContactUs } from "./Pages/ContactUs";
import { Dashboard } from "./Pages/Dashboard";
import {MyProfile} from './Components/core/Dashboard/MyProfile';
import { PrivateRoute } from "./Components/core/Auth/PrivateRoute";
import {ErrorPage} from '../src/Pages/Error';
import { Settings } from "./Components/core/Dashboard/Settings/index";
import  EnrolledCourses  from "./Components/core/Dashboard/Settings/EnrolledCourses";
import Cart from '../src/Components/core/Dashboard/Cart/index'
import { useSelector } from "react-redux";
import {ACCOUNT_TYPE} from './utils/constants';
import {AddCourse} from '../src/Components/core/Dashboard/AddCourse/index';
import { MyCourses } from "./Components/core/Dashboard/mycourses/MyCourses";
import { EditCourse } from "./Components/core/Dashboard/EditCourse";
import { Catalog } from "./Pages/Catalog";
import {CourseDetails} from "./Pages/CourseDetails";
import ViewCourse from "./Pages/ViewCourse";
import VideoDetails from "./Components/core/ViewCourse/VideoDetails";


function App() {
  // localStorage.removeItem("token");
  // localStorage.removeItem("user");

  const {user} = useSelector((state) => state.profile);
  return (
    
    <div className=" w-screen min-h-screen bg-richblack-900 flex flex-col font-inte z-10">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/updatePassword/:token" element={<UpdatePassword/>}/>
        <Route path="/resetDone" element={<ResetDone/>}/>
        <Route path="/verifyEmail" element={<VerifyEmail/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/catalog/:catalogName" element={<Catalog/>} />
        <Route path="/courses/:courseId" element={<CourseDetails/>} />
        {/* For the watching course lectures */}
        <Route
        element={
          <PrivateRoute>
            <ViewCourse />
          </PrivateRoute>
        }
      >
        {user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
            <Route
              path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
              element={<VideoDetails />}
            />
          </>
        )}
      </Route>
        <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}>
          <Route index path="/dashboard/my-profile" element={<PrivateRoute><MyProfile/></PrivateRoute>}/>
          <Route path="/dashboard/settings" element={<Settings/>}/>

          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && 
            (
              <Route path="/dashboard/enrolled-courses" element={<EnrolledCourses/>}/>
            )
          }
          
          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && 
            (
              <Route path="/dashboard/wishlist" element={<Cart/>}/>
            )
          }


          {/* For the watching course lectures */}
          <Route
            element={
              <PrivateRoute>
                <ViewCourse />
              </PrivateRoute>
            }
          >
            {user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route
                  path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                  element={<VideoDetails />}
                />
              </>
            )}
          </Route>

          {
            user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && 
            <>
              <Route path="/dashboard/add-course" element={<AddCourse/>}></Route>
            </>
          }

          {
            user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && 
            <>
              <Route path="/dashboard/my-courses" element={<MyCourses/>}></Route>
              <Route path="/dashboard/edit-course/:courseId" element={<EditCourse/>}></Route>
            </>
          }

        </Route>
        <Route path="*" element={<ErrorPage/>}/> 
      </Routes>
    </div>
  );
}

export default App;
