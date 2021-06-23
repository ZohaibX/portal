import Home from '../pages/Home/home';
// import Test from '../pages/test';
import App from '../App';
import PortalHome from '../pages/Portal/home'

export default [
  {
    ...App,
    routes: [
      { path: '/', ...Home, exact: true },
      { path: '/portal', ...PortalHome, },
      // { path: `/test`, ...Test },
      // { path: `/image-upload`, ...Upload },
      // { path: '/signUp', ...SignUp, exact: true },
      // { path: '/signIn', ...SignIn },
      // { path: '/signOut', ...SignOut },
      // { ...NotFound }, // this is how we use not-found page -- by not providing path
    ],
  },
];
