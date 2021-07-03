import * as React from 'react';
import Helmet from 'react-helmet';
import navbar from '../Portal/navbar';
import Form from 'react-bootstrap/Form'
const Navbar = navbar.component ;
import '../../css/main.css'

// css
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}),
);



const head = () => (
  <Helmet>
    <title>{`Setup Your Profile`}</title>
    <link rel="shortcut icon" href="https://project-1-bucket.s3.amazonaws.com/logo-1.png" />
    {/* // this is how we will make our title dynamic */}
    <meta property='og:title' content='Setup Your Profile'></meta>
    <meta property="og:image" content="https://project-1-bucket.s3.amazonaws.com/logo-1.png" />
    {/* // this title is for SEO -- to identify this page title  */}
    {/* // we normally have to add 4 required meta tags and we can add more optional meta tags for SEO */}
    {/* //? https://ogp.me/ */}
  </Helmet>
);

const Profile = () => {
  const classes = useStyles();
  const [rollNo , setRollNo] = React.useState("")
  const [section , setSection] = React.useState("")
  const [department , setDepartment] = React.useState("")

  const rollNoFakeArray = [3,6,9,12,15,18,21,90,39,108,120,123,126,129,132]

  const convertNumberInto3Digits = (number:number) => {
    
    if(number < 10) return `00${number}`
    if(number < 100) return `0${number}`
    return number ;
  }


  return (
    <div>
      {head() }

      <Navbar />

      <div className=" profile-page-background">
        <form action="" className="form">
          <div className="form__group profile-form" >
                <input
                  type="email"
                  className="form__input profile-form__email"
                  placeholder="Your Email"
                  required
                  id="name"
                />
                <label htmlFor="name" className="form__label profile-form__email-label">
                  Your Email
                </label>
          </div>

          <div className="profile-select">
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Departments</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value = {department}
                onChange= {(e:any) => setDepartment(e.target.value)}
              >
                <MenuItem value={'CS'}>BS Computer Science</MenuItem>
                <MenuItem value={'SE'}>BS Software Engineering</MenuItem>
                <MenuItem value={'EE'}>BS Electrical Engineering</MenuItem>
                <MenuItem value={'BBA'}>Business Administration</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label-1">Sections</InputLabel>
              <Select
                labelId="demo-simple-select-label-1"
                id="demo-simple-select"
                value = {section}
                onChange= {(e:any) => setSection(e.target.value)}
              >
                <MenuItem value={'A'}>Section A</MenuItem>
                <MenuItem value={'B'}>Section B</MenuItem>
                <MenuItem value={'C'}>Section C</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label-2">Roll No</InputLabel>
              <Select
                labelId="demo-simple-select-label-2"
                id="demo-simple-select"
                value = {rollNo}
                onChange= {(e:any) => setRollNo(e.target.value)}
              >
                {rollNoFakeArray.map((item:number) => (
                  <MenuItem key={item} value={item}>{convertNumberInto3Digits(item)}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

            <div className="form__group profile-form" >
                <input
                  type="tel"
                  pattern="[0-9]{4}-[0-9]{7}"
                  className="form__input profile-form__phone"
                  placeholder="0123-3456789"
                  required
                  id="phone"
                />
                <label htmlFor="phone" className="form__label profile-form__phone-label">
                  Your Phone Number
                </label>
            </div>

            <div className="form__group profile-form profile-form-btn ">
                {/* Added some properties in a btn class -- for button */}
                <button className="btn btn-green profile-form-btn-style ">
                  Submit &rarr;
                </button>
            </div>

        </form >
      </div>
    </div>
  )
}

export default {
  component: Profile
}