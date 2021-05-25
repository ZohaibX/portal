import pool from '../../database/configure-db'
import {NotAuthorizedError} from '@zbprojector/project1'

export default {
  getAllCourses: async (args: any , req: any) => {
    // if (!req.currentUser) throw new NotAuthorizedError();

    let courses;

    try {
      courses = await pool.query('SELECT * FROM courses');
      // maybe apply caching later

    } catch (error) {
      throw new Error(error);
    }

    return courses.rows.map((course: any) => ({
      ...course._doc,
    }));
  },
  
};