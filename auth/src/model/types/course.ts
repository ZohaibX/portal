import { AssessmentTitles } from '../enums/assessment-titles';
import { Presence } from './../enums/presence';

interface  Class {
  classTitle: String ,
  classPresence: Presence
}

interface Attendance {
  percentage: Number
}

interface Assignment {
  url: String ,
  expiration: Date
}

interface Marks {
  assessmentTitle: AssessmentTitles ,
  assessmentTopic: String ,
  marks: Number 
}

export interface StudentCourse {
  course_name: String ,
  course_code: Number ,
  class?: any ,
  attendance?: any ,
  assignments?: any ,
  marks?: any
}

export interface TeacherCourse {
  course_name: String ,
  course_code: Number ,
  classes: [{
    classTitle: String
  }] ,
}