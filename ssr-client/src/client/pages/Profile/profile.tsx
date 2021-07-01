import * as React from 'react';
import Helmet from 'react-helmet';
import navbar from '../Portal/navbar';
import Form from 'react-bootstrap/Form'
const Navbar = navbar.component ;
import '../../css/main.css'


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
  

  return (
    <div>
      {head() }

      <Navbar />

      <div className=" profile-page-background">
      
      </div>
    </div>
  )
}

export default {
  component: Profile
}