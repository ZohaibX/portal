import mongoose from 'mongoose';
import { Password } from './../services/password-hashing';
import { AccountType } from './enums/accountType';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

// An interface that describes the properties
// that are required to create a new User
interface UserAttrs {
  id: string ; //  added this property , to assign same id coming from publisher
  email: string;
  password?: string;
  department : string ;
  section? : string ;
  rollNo? : number ;
  phone: number ;
  accountType: AccountType ;
  accountActivated: boolean ;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
  id: string ;
  email: string;
  password: string;
  department: string ;
  section: string ;
  rollNo: number ;
  phone: number ;
  accountType: AccountType ;
  accountActivated: boolean ;
  // createdAt: string; i can add properties like this which are supposed to be added by mongoose
}

const schema = new mongoose.Schema<UserDoc, UserModel>(
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
      type: String 
    },
    rollNo: {
      type: Number 
    },
    phone: {
      type: Number ,
      required: true  
    },
    accountType: {
      type: AccountType ,
      required: true
    } ,
    accountActivated: {
      type: Boolean
    }
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

// hashing while saving is removed because we don't wanna hash already hashed password coming from accounts dpt

//? this is to apply ts type checking on the attributes -- we provide while creating -- ex at (1)
schema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', schema);



export { User };
