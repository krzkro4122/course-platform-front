import { Link } from "react-router-dom";

import { Course } from "helpers/types";

interface courseInfo {
  course: Course;
}

function CourseCard({ course }: courseInfo) {
  return (
    <li>
      <Link to={`/course/${course.id}/tasks`}>
        <img
          src={course.imageSrc}
          alt={`Image of the ${course.title} course.`}
        />
        <h1>{course.title}</h1>
      </Link>
    </li>
  );
}

export default CourseCard;
