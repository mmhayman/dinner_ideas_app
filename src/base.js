import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';        
import 'firebase/storage';     
import 'firebase/database';   
import secrets from './secrets';

//create firebaseApp
const firebaseApp = firebase.initializeApp({
        apiKey: secrets.apiKey,
        authDomain: "dinner-ideas-16e31.firebaseapp.com",
        databaseURL: "https://dinner-ideas-16e31.firebaseio.com"
});

//create rebase bindings
const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export 
export default base;