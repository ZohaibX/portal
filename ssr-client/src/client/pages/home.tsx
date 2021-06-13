import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "../main.css"

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
    <div>
      <h1 id="h1">Whats up</h1>
    </div>
  );
};

export default {
  component: Home, // this styling is for Routes file specially
};
