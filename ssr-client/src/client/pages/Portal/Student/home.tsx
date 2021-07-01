import * as React from 'react';
import Helmet from 'react-helmet'

const head = () => (
  <Helmet>
    <title>{`Name`}</title>
    <link rel="shortcut icon" href="https://project-1-bucket.s3.amazonaws.com/logo-1.png" />
    {/* // this is how we will make our title dynamic */}
    <meta property='og:title' content='Name'></meta>
    <meta property="og:image" content="https://project-1-bucket.s3.amazonaws.com/logo-1.png" />
    {/* // this title is for SEO -- to identify this page title  */}
    {/* // we normally have to add 4 required meta tags and we can add more optional meta tags for SEO */}
    {/* //? https://ogp.me/ */}
  </Helmet>
);

 
const StudentHome = (props: any) => {
  const [value , changeValue] = React.useState(1)

  console.log("params is: ", props.match.params)
  return ( 
    <div>
      {head()}
      <h1 className="text-center my-5">This is Student Home Page</h1>
      <button onClick={(e) => changeValue(value+1)}>Click me</button>
    </div>
   );
}
 
export default {
  component: StudentHome
} ;