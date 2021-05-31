import pool from '../../../database/configure-db'
import {NotAuthorizedError} from '@zbprojector/project1'

export default {
  getCourse: async (args: any , req: any) => {
    if (!req.currentUser) throw new NotAuthorizedError();

    const {id} = args ;
    
    let course;
    try {
      course = await pool.query('SELECT * FROM courses WHERE id = $1', [id]);
      // multiple data from multiple ids -- https://stackoverflow.com/questions/46829025/querying-data-by-multiple-ids-large-number
    } catch (error) {
      console.error('error from the single get request', error.message);
      throw new Error()
    }
    
    return {
      ...course.rows[0] ,
      createdDate: new Date(course.rows[0].createddate).toISOString() 
    }
  },
  
};