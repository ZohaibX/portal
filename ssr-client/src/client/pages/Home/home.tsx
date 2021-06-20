import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "../../css/main.css"
import {Container , Col , Row , Image} from 'react-bootstrap'

import figure from '../../../../public/figure.jpg'


const Home = () => {
  const head = () => (
    <Helmet>
      <title>{`ZohaibX`}</title>
      {/* // this is how we will make our title dynamic */}
      <meta property='og:title' content='ZohaibX'></meta>
      {/* // this title is for SEO -- to identify this page title  */}
      {/* // we normally have to add 4 required meta tags and we can add more optional meta tags for SEO */}
      {/* //? https://ogp.me/ */}
    </Helmet>
  );

  return (
    <div className="home" >
      {head()}
          
          <figure className="image-box">
            <img
              src={'https://project-1-bucket.s3.amazonaws.com/figure.jpg'}
              alt="Zohaib Butt X"
              className="image-box__image"
            />
            <figcaption className="image-box__caption">Zohaib Butt</figcaption>
          </figure> 

          <div className="intro">
            <h1 className="intro__h1">Zohaib Butt</h1>
            <h4 className="intro__h4">Full Stack Web Developer</h4>
          </div>


        

      <div className="container about row">
          <div className="col-1-of-3 about-all about-1">
            <h4 className="about-all__h4">Skills</h4>
            <ul>
              <li>CSS JavaScript TypeScript React Redux</li>
              <li>Server Side Rendering With React (With Webpack) and NextJS</li>
              <li>NodeJS (Express) MongoDB Postgres Redis REST GraphQL Testing With Jest </li>
              <li>CI/CD Docker Kubernetes Microservices (Deployment especially in GKE)</li>
              <li>AWS S3 Storage Sendgrid Mailing and Stripe API</li>
            </ul>
          </div>

          <div className="col-1-of-3 about-all about-2">
            <h4 className="about-all__h4">Experience</h4>
              <ul>
                <li>Don't have working Experience for a Company</li>
                <li>I've made a Portfolio Project of Education Portal, combining all of the skills</li>
                <li> <span>Click Here</span> for Portfolio Project (to be implemented after deployment)</li>
              </ul>
          </div>

          <div className="col-1-of-3 about-all about-3">
            <h4 className="about-all__h4">Education</h4>
            <ul>
              <li>Have Done BS Computer ( 4 Years )</li>
              <li>Comsats University Islamabad</li>
              <li>Lahore Pakistan</li>
            </ul>
          </div>
      </div>

    </div>
  );
};

export default {
  component: Home, // this styling is for Routes file specially
};

 