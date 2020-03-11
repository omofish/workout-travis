import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAO6dXGzcy1xWXHcB9ZGT3K6YnHoI7OvTs",
  authDomain: "workout-travis.firebaseapp.com",
  databaseURL: "https://workout-travis.firebaseio.com",
  projectId: "workout-travis",
  storageBucket: "workout-travis.appspot.com",
  messagingSenderId: "293687814285",
  appId: "1:293687814285:web:48736b7bd68374d4c65ac4"
};

firebase.initializeApp(firebaseConfig);
const firebaseDb = firebase.database().ref()

export { firebaseDb , firebase};
