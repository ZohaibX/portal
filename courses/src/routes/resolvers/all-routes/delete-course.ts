import pool from '../../../database/configure-db'
import {NotAuthorizedError} from '@zbprojector/project1'

export default {
  deleteCourse:  async (args: any , req: any) => {
    if (!req.currentUser) throw new NotAuthorizedError();

    const {id} = args;
    
    let deletedCourse ;
    try {
      deletedCourse = await pool.query(
        'DELETE FROM courses WHERE id = $1 RETURNING *',
        [id]
      );
    
    } catch (error) {
      console.log('error found from delete request', error.message);
      throw new Error()
    }

    return {
      ...deletedCourse.rows[0]
    };
  },
  
};