import { Presence } from './enums/presence';
import { StudentCourse , TeacherCourse} from './types/course';
import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';
import { AssessmentTitles } from './enums/assessment-titles';



// An interface that describes the properties
// that are required to create a new Course
interface CourseAttrs {
  id: string; //! added this property , to assign same id coming from Course service
  course_name: string ,
  course_code: number ,
  classes?: {classTitle: string , classPresence: Presence}[] ,
  attendance?: number,
  assignments?: {url: string , expiration: string}[] ,
  marks?: {assessmentTitle: AssessmentTitles , assessmentTopic: string , marks: number } []
}

// An interface that describes the properties
// that a User Model has
interface CourseModel extends mongoose.Model<CourseDoc> {
  build(attrs: CourseAttrs): CourseDoc;
  findByEvent(event: {
    id: string;
    version: number;
  }): Promise<CourseDoc | null>;
  // note - this property is specially for versioning stuff in the Listening service of an event
}

// An interface that describes the properties
// that a User Document has
interface CourseDoc extends mongoose.Document {
  course_name: string ,
  course_code: number ,
  classes?: {classTitle: string , classPresence: Presence}[] ,
  attendance?: number,
  assignments?: {url: string , expiration: string}[] ,
  marks?: {assessmentTitle: AssessmentTitles , assessmentTopic: string , marks: number } []
  version: number; // important dependency to handle versioning
  // createdAt: string; i can add properties like this which are supposed to be added by mongoose
}

///// For versioning -- mongoose.Schema must have one arg only -- not <doc and model>
const schema = new mongoose.Schema<CourseDoc , CourseModel>(
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
  
  schema.set('versionKey', 'version');
  // schema.plugin(updateIfCurrentPlugin);
  mongoose.plugin(updateIfCurrentPlugin) // global plugin
// important dependency to handle versioning

// note - this property is specially for versioning stuff in the Listening service of an event
// important - this build method is different than normal , to apply versioning
schema.statics.findByEvent = (event: { id: string; version: number }) => {
  return Course.findOne({
    _id: event.id,
    version: event.version - 1,
  });
};

//? this is to apply ts type checking on the attributes -- we provide while creating -- ex at (1)
schema.statics.build = (attrs: CourseAttrs) => {
  //! added this property , to assign same id coming from Tickets service
  return new Course({
    _id: mongoose.Types.ObjectId(attrs.id),
    course_name: attrs.course_name,
    course_code: attrs.course_code, 
    classes: attrs.classes ,
    attendance: attrs.attendance ,
    marks: attrs.marks ,
    assignments:attrs.assignments 
  });
};

const Course = mongoose.model<CourseDoc, CourseModel>('Course', schema);



export { Course };
