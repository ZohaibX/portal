import * as React from 'react'
import Helmet from 'react-helmet'
import "../../css/main.css"
import navbar from './navbar'
import form from './form'

const Form = form.component ;
const Navbar = navbar.component

const head = () => (
  <Helmet>
    <title>{`CUI Portal`}</title>
    <link rel="shortcut icon" href="https://project-1-bucket.s3.amazonaws.com/logo-1.png" />
    {/* // this is how we will make our title dynamic */}
    <meta property='og:title' content='CUI Portal'></meta>
    <meta property="og:image" content="https://project-1-bucket.s3.amazonaws.com/logo-1.png" />
    {/* // this title is for SEO -- to identify this page title  */}
    {/* // we normally have to add 4 required meta tags and we can add more optional meta tags for SEO */}
    {/* //? https://ogp.me/ */}
  </Helmet>
);


const PortalHome = () => {
  return(
    <div>
      {head()}

      <div className="info">
        <p>Website is under constructions -- we are working on mobile view -- some components may not work-- please bear with us</p>
      </div>
      <Navbar />
      
      <Form />
    </div>
  )
}

export default {
  component: PortalHome 
}