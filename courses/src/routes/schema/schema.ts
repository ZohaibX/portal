import {buildSchema} from 'graphql'

// Schema of every type should be according to its model fro mongoose
export default buildSchema(`

type Course {
  id: String!
  course_id: String!
  course_teacher: String!
  course_name: String!
}

input CourseData {
  description : String!
}

type RootQuery {
  getAllCourses: [Course!]!
}

type RootMutation {
  addCourse(courseData :  CourseData) : Course
}

schema {
  query : RootQuery ,
  mutation : RootMutation
}
`);

// very very very important note .. root query and mutation mai .. returning data pr ! nai lagaana .. wrna errors return nai kre gha
//name : String! , description : String! , category : String! , instructions : String! , username : String

// in inputs, some fields are provided by default, so not to use ! with that fields