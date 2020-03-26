import app from 'firebase/app';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCIGSQubvI1vP_pGKrqdgfOlhtUReufzgw",
    authDomain: "mpp-app-c1973.firebaseapp.com",
    databaseURL: "https://mpp-app-c1973.firebaseio.com",
    projectId: "mpp-app-c1973",
    storageBucket: "mpp-app-c1973.appspot.com",
    messagingSenderId: "661925546600",
    appId: "1:661925546600:web:cab344e3c2cfa444"
};

firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref();

const myDBRef = dbRef.child('cherry_charity');

export default myDBRef ;