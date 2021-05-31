import pool from '../../../database/configure-db'
import {NotAuthorizedError} from '@zbprojector/project1'

export default {
  updateCourseTitle: async (args: any , req: any) => {
    if (!req.currentUser) throw new NotAuthorizedError();

    const {title, id} = args ;
    let course ;
    
    try {
      course = await pool.query(
        'UPDATE courses SET course_name = $1 WHERE id = $2 RETURNING *',
        [title, id]
      );
  
      //? Updating multiple properties
      // UPDATE posts SET title = $1, body = $2, user_id = $3, author= $5, date_created = NOW() WHERE pid/id = $4', [values]
    } catch (error) {
      console.log('error found from update request', error.message);
      throw new Error()
    }
    
    return {
      ...course.rows[0] ,
      createdDate: new Date(course.rows[0].createddate).toISOString() 
    }
  },
  
};