import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {toast} from "react-toastify";

export default function Card(props)
{
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler()
    {
        if(likedCourses.includes(course.id))
        {
            //pehle se like hua pada tha
            setLikedCourses((prev) => prev.filter((cid)=> cid !== course.id))
            toast.warning("liked remove");
        }
        else
        {
            //pehele se like nhi ye course
            // insert karna hoga iss course ko like course me 
            if(likedCourses.length === 0)
            {
                 setLikedCourses([course.id]);
            }
            else
            {
                setLikedCourses((prev) => [...prev,course.id]);   // [...prev,course.id];
            }
            toast.success("like successfully");
        }
    }

    return(
        <div className="w-[300px] bg-bgDark rounded-md bg-opacity-80 overflow-hidden text-white">
           <div className="relative ">
                <img src={course.image.url} alt={course.image.alt}></img>

                <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
                    <button onClick={clickHandler}>
                    {likedCourses.includes(course.id) ? (<FcLike font-size="1.75rem"/>) : (<FcLikePlaceholder font-size="1.75rem"/>)}
                    </button>
                </div>
           </div>

           <div className="p-4">
                <p className="font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2">
                    {
                        course.description.length>100
                        ? (course.description.substr(0,100)) + "..."
                        :   (course.description)
                    }
                </p>
           </div>
        </div>
    )
}