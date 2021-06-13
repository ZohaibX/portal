import * as React from 'react';
import { renderRoutes } from 'react-router-config';
// import Header from './components/header';
// import { fetchCurrentUser } from './Store/actions';

import "./main.css"

const App = ({ route }) => {
  return (
    <div>
      <h1 id="h1" className="h1">HELLLLLLLL</h1>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  // loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
