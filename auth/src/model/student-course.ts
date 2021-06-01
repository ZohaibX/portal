
import { string } from 'joi';
import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';
import { AssessmentTitles } from './enums/assessment-titles';
import { Presence } from './enums/presence';



// An interface that describes the properties
// that are required to create a new Course
interface StudentCourseAttrs {
  user_id: string ,
  course_name: string ,
  course_code: number ,
  classes?: {classTitle: string , classPresence: Presence}[] ,
  attendance?: number,
  assignments?: {url: string , expiration: string}[] ,
  marks?: {assessmentTitle: AssessmentTitles , assessmentTopic: string , marks: number } []
}

// An interface that describes the properties
// that a User Model has
interface StudentCourseModel extends mongoose.Model<StudentCourseDoc> {
  build(attrs: StudentCourseAttrs): StudentCourseDoc;
  // note - this property is specially for versioning stuff in the Listening service of an event
}

// An interface that describes the properties
// that a User Document has
interface StudentCourseDoc extends mongoose.Document {
  id: string ,
  user_id: string , 
  course_name: string ,
  course_code: number ,
  classes?: {classTitle: string , classPresence: Presence}[] ,
  attendance?: number,
  assignments?: {url: string , expiration: string}[] ,
  marks?: {assessmentTitle: AssessmentTitles , assessmentTopic: string , marks: number } []
  // createdAt: string; i can add properties like this which are supposed to be added by mongoose
}

///// For versioning -- mongoose.Schema must have one arg only -- not <doc and model>
const schema = new mongoose.Schema<StudentCourseDoc , StudentCourseModel>(
  {
    course_name: {
      type: String 
    } ,
    course_code: {
      type: Number
    } ,
    classes: {
      type: [{classTitle: String , classPresence: String}] ,
      default: []
    } ,
    attendance: {
      type: Number ,
      default: 0
    } ,
    assignments: {
      type: [ {url: String , expiration: Date}] ,
      default: []
    } ,
    marks: {
      type: [{assessmentTitle: String , assessmentTopic: String , marks: Number }] ,
      default: []
    } ,
    user_id: {
      type: String,
      required: true
    }
  },
  // changing the returns
  {
    toJSON: {
      transform(fullDocument, returns) {
        returns.id = returns._id; // normally , all dbs have id property instead of _id , so we will also use id in mongoose
        delete returns._id;

        },
    },
  }
  );


//? this is to apply ts type checking on the attributes -- we provide while creating -- ex at (1)
schema.statics.build = (attrs: StudentCourseAttrs) => {
  //! added this property , to assign same id coming from Tickets service
  return new StudentCourseData({
    user_id: attrs.user_id ,
    course_name: attrs.course_name,
    course_code: attrs.course_code,
    classes: attrs.classes ,
    attendance: attrs.attendance ,
    marks: attrs.marks ,
    assignments:attrs.assignments 
  });
};

const StudentCourseData = mongoose.model<StudentCourseDoc, StudentCourseModel>('StudentCourse', schema);



export { StudentCourseData };
