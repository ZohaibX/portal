import mongoose from 'mongoose';
import { Password } from './../services/password-hashing';

// An interface that describes the properties
// that are required to create a new User
interface AccountHeadAttrs {
  email: string;
  password: string;
}

// An interface that describes the properties
// that a User Model has
interface AccountHeadModel extends mongoose.Model<AccountHeadDoc> {
  build(attrs: AccountHeadAttrs): AccountHeadDoc;
}

// An interface that describes the properties
// that a User Document has
interface AccountHeadDoc extends mongoose.Document {
  email: string;
  password: string;
  // createdAt: string; i can add properties like this which are supposed to be added by mongoose
}

const schema = new mongoose.Schema<AccountHeadDoc, AccountHeadModel>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
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
schema.statics.build = (attrs: AccountHeadAttrs) => {
  return new AccountHead(attrs);
};

const AccountHead = mongoose.model<AccountHeadDoc, AccountHeadModel>('AccountHead', schema);



export { AccountHead };
