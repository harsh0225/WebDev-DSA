
import Card from "./Card.js";

export default function Cards(props){

    const allCourses = [];
    const getCourses = () => {
        console.log(props.courses);
        Object.values(props.courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                    allCourses.push(course);
           })
       })
        return allCourses
    }

    return(
        <div>
           {
            getCourses().map((course) => {
               return( <Card course={course }></Card>);
            })
           }
        </div>
    )
}