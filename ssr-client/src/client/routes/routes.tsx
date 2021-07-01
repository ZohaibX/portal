import Home from '../pages/Home/home';
// import Test from '../pages/test';
import App from '../App';
import PortalHome from '../pages/Portal/home'
import NotFound from '../pages/Not-Found/index';
import StudentHome from '../pages/Portal/Student/home'
import Profile from '../pages/Profile/profile'

export default [
  {
    ...App,
    routes: [
      { path: '/', ...Home , exact: true},
      {path: '/portal' , ...PortalHome , exact:true } ,
      // {path: '/portal/student/:id' , ...StudentHome , exact: true  } ,
      {path:"/portal/profile-setup" , ...Profile} ,
      { ...NotFound }, // this is how we use not-found page -- by not providing path
      // { path: `/test`, ...Test },
      // { path: `/image-upload`, ...Upload },
      // { path: '/signUp', ...SignUp, exact: true },
      // { path: '/signIn', ...SignIn },
      // { path: '/signOut', ...SignOut },
    ],
  },
];
