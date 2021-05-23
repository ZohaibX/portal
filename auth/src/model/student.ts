import mongoose from 'mongoose';
import { Password } from './../services/password-hashing';

// An interface that describes the properties
// that are required to create a new User
interface StudentAttrs {
  email: string;
  password: string;
  department: string ;
  section: string ;
  rollNo: number ;
  phone: number ;
}

// An interface that describes the properties
// that a User Model has
interface StudentModel extends mongoose.Model<StudentDoc> {
  build(attrs: StudentAttrs): StudentDoc;
}

// An interface that describes the properties
// that a User Document has
interface StudentDoc extends mongoose.Document {
  email: string;
  password: string;
  department: string ;
  section: string ;
  rollNo: number ;
  phone: number ;
  // createdAt: string; i can add properties like this which are supposed to be added by mongoose
}

const schema = new mongoose.Schema<StudentDoc, StudentModel>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    department: {
      type: String ,
      required: true  
    },
    section: {
      type: String ,
      required: true  
    },
    rollNo: {
      type: Number ,
      required: true  
    },
    phone: {
      type: Number ,
      required: true  
    },
  },
  // changing the returns
  {
    toJSON: {
      transform(fullDocument, returns) {
        returns.id = returns._id; // normally , all dbs have id property instead of _id , so we will also use id in mongoose
        delete returns._id;

        delete returns.password; // password will not be returned in any request
        delete returns.__v; // we don't want to show mongoose's this property bcoz other dbs don't have this
      },
    },
  }
);

//? password hashing middleware
schema.pre('save', async function (done) {
  // this pre middleware will only run on saving data
  if (this.isModified('password')) {
    // this if statement will only run when password is modified ..
    // for example, if username or email is modified/changed , then this if function will not execute
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

//? this is to apply ts type checking on the attributes -- we provide while creating -- ex at (1)
schema.statics.build = (attrs: StudentAttrs) => {
  return new Student(attrs);
};

const Student = mongoose.model<StudentDoc, StudentModel>('Student', schema);



export { Student };
