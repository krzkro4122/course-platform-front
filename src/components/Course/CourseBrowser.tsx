import { useParams } from "react-router-dom";

import { fetchCourses, fetchLeague } from "helpers/fetchers";
import { useGuard } from "components/Authentication/useAuth";
import CourseCard from "./CourseCard";

function CourseBrowser() {
  const { id } = useParams();
  const courses = fetchCourses();
  const league = fetchLeague(id!);

  const coursesFormatted = courses
    .filter((course) => league!.courseIds.includes(course.id))
    .map((course, index) => <CourseCard course={course} key={index} />);

  return useGuard(<div className="courseBrowser">{coursesFormatted}</div>);
}

export default CourseBrowser;
