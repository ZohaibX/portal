// get multiple courses -- with multiple ids -- in postgres
// mongo's is in -- https://github.com/ZohaibX/express/blob/master/graphql/resolvers/helper-functions.js

import pool from '../../../database/configure-db'
import {NotAuthorizedError} from '@zbprojector/project1'

export default {
  getMultipleCourses: async (args: any , req: any) => {
    if (!req.currentUser) throw new NotAuthorizedError();

    const {ids} = args ;
    
    let courses;
    try {
      courses = await pool.query(
        'SELECT * FROM courses WHERE id = ANY ($1)' , 
        [ids] ,
      );
      // multiple data from multiple ids -- https://stackoverflow.com/questions/46829025/querying-data-by-multiple-ids-large-number
    } catch (error) {
      console.error('error from the single get request', error.message);
      throw new Error()
    }
    
    return courses.rows.map((course: any) => ({
      ...course,
      createdDate: new Date(course.createddate).toISOString() // look at course.createddate --createdDate is converted into createddate in db
    }));
  },

};