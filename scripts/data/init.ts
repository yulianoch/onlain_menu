import * as Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAPGVinRD9QLhcbIQUIMcWZeKgTs7Un-s4",
    authDomain: "menu-9e88e.firebaseapp.com",
    databaseURL: "https://menu-9e88e.firebaseio.com",
    projectId: "menu-9e88e",
    storageBucket: "",
    messagingSenderId: "1005173440453"

  };
  
Firebase.initializeApp( config );
