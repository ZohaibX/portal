import Home from '../pages/Home/home';
// import Test from '../pages/test';
import App from '../App';
import PortalHome from '../pages/Portal/home'
import NotFound from '../pages/Not-Found/index';

export default [
  {
    ...App,
    routes: [
      { path: '/', ...Home , exact: true},
      {path: '/portal' , ...PortalHome , exact:true } ,
      { ...NotFound }, // this is how we use not-found page -- by not providing path
      // { path: `/test`, ...Test },
      // { path: `/image-upload`, ...Upload },
      // { path: '/signUp', ...SignUp, exact: true },
      // { path: '/signIn', ...SignIn },
      // { path: '/signOut', ...SignOut },
    ],
  },
];
