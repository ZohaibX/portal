import * as React from 'react';
import { renderRoutes } from 'react-router-config';
// import Header from './components/header';
// import { fetchCurrentUser } from './Store/actions';

import "./css/main.css"

const App = ({ route }: any) => {  
  
  return (
    <div>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  // loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
