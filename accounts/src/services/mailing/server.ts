// go to sendgrid, to account 
// settings tab -> sender authentication -> verify a single sender -> create sender -> 
// from and reply section can be same -> after creating -> verify from email address 
// then on settings tab -> api keys -> create a key -- copy that 

import sgmail from "@sendgrid/mail";
import {keys} from './key';

export default (to: string , text: string) => {

if(!keys.apiKey) throw new Error()
sgmail.setApiKey(keys.apiKey);

const msg = {
  to: [to]  ,
  from: "ZohaibButt045@gmail.com" , // email name will be displayed as zohaibbutt045, so it should be a better email
  subject: "Email Service for portfolio" ,
  text
}

sgmail.send(msg)

}
// after all, just do -> node server.js -> on terminal and see magic

//! simply add express js and app.post request and do all 