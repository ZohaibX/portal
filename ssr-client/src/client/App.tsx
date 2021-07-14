import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
// import Header from './components/header';
// import { fetchCurrentUser } from './Store/actions';

import "./css/main.css"
import { fetchCurrentUser } from './Store/actions';

const App = ({ route , currentUser }: any) => {  

  console.log(currentUser);
  
  
  return (
    <div>
      {renderRoutes(route.routes)}
    </div>
  );
};

function mapStateToProps({ currentUser }: any) {
  return { currentUser };
}

export default {
  component: connect(mapStateToProps )(App),
  loadData: ({ dispatch }: any) => dispatch(fetchCurrentUser()),
};
