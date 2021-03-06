import axios from 'axios';

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
//? async requests - way
export const fetchCurrentUser = () => async (dispatch: any, getState: any, api: any) => {
  //? api: axiosInstance , we sent this in the store . details are there

  let data ;
  try {
    data  = await api.get('users/current-user');
  } catch (error) {
    throw new Error(error)
  }
  
  dispatch({ type: FETCH_CURRENT_USER, payload: data!.data.currentUser });
};


export const FETCH_ALL_ACCOUNTS = "FETCH_ALL_ACCOUNTS"
export const fetchAllAccountRequests = () => async (dispatch: any, getState: any, api: any) => {
  
  let studentRequests ;
  try {
    studentRequests = await api.get("/accounts/get-all-students-requests")
  } catch (error) {
    throw new Error(error)
  }

  let teacherRequests ;
  try {
    teacherRequests = await api.get("/accounts/get-all-teachers-requests")
  } catch (error) {
    throw new Error(error)
  }

  const allAccounts = [...studentRequests.data , ...teacherRequests.data] ;
  dispatch({ type: FETCH_ALL_ACCOUNTS, payload: allAccounts });
}

// export const IMAGE_UPLOAD = 'IMAGE_UPLOAD';
// export const uploadImage = (file) => async (dispatch, getState, api) => {
//   const urlData = await api.get('/image-upload/get-url');
//   // urlData.data contains {key , url} from our backend

//   console.log(`File  is ${file} and url is ${urlData.data.url}`);

//   const response = await axios.put(urlData.data.url, file, {
//     headers: { 'Content-Type': file.type },
//   });

//   console.log('response is: ', response);

//   // key is the name of the image, we save in s3 -- and url - I know what it is -- coming from urlData
//   // url contains the filename (key) in itself ,
//   // so we could send key to the backend database

//   const { data } = await api.post('/image-upload', {
//     imageUrl: urlData.data.key, // i can add more data here like -- ...data
//   });

//   dispatch({ type: IMAGE_UPLOAD, payload: data });
// };

//? sync reducer action
// Setting search text in a state
// export const setUserToken = (token) => ({
//   // we wanna recieve text here
//   type: UserToken,
//   payload: token,
// });
