import React from "react";
import CoursesModule from "./../../../module/Courses"
const Courses = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <CoursesModule/>
    </div>
  )
}

export default React.memo(Courses)