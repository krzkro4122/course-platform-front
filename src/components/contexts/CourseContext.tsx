import { createContext } from "react";

const courses = [
  "This is a course, lol",
  "This is another course, lol",
  "This is a course, NOT lol",
  "This is a course, lol NOT",
  "This is NOT another course, lol",
];
const CourseContext = createContext(courses);
export default CourseContext;
