import addCourse from './add-course';
import GetAllCourses from './get-all-courses'

const rootResolver = {
 ...GetAllCourses ,
 ...addCourse
};

export default rootResolver;