import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
   	apiKey: AIzaSyCIdHip8_VPD3OLWdTqSp06twbxIBqeJsot,
  	authDomain: projectq-628bb.firebaseapp.com,
  	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

const app = firebase.initializeApp(config);
export default app;
