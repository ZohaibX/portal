import addCourse from './all-routes/add-course';
import deleteCourse from './all-routes/delete-course';
import GetAllCourses from './all-routes/get-all-courses'
import getMultipleCourses from './all-routes/get-multiple-courses';
import getOneCourse from './all-routes/get-one-course';
import updateCourseTitle from './all-routes/update-course-title';

const rootResolver = {
 ...GetAllCourses ,
 ...addCourse,
 ...deleteCourse ,
 ...getOneCourse ,
 ...updateCourseTitle ,
 ...getMultipleCourses
};

export default rootResolver;