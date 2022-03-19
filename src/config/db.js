// import { initializeApp } from "firebase/app";
// import "firebase/database";

// const firebaseConfig = {
//     apiKey: "AIzaSyC1opMGVclFn4wWIZ7LUYE2FxiCW7mmIEw",
//     authDomain: "todo-list-gc-consulting.firebaseapp.com",
//     databaseURL: "https://todo-list-gc-consulting-default-rtdb.firebaseio.com",
//     projectId: "todo-list-gc-consulting",
//     storageBucket: "todo-list-gc-consulting.appspot.com",
//     messagingSenderId: "891564848069",
//     appId: "1:891564848069:web:dbee78664ad8a8396b91ac"


// };


// const db = initializeApp(firebaseConfig);

// export default db


import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC1opMGVclFn4wWIZ7LUYE2FxiCW7mmIEw",
    authDomain: "todo-list-gc-consulting.firebaseapp.com",
    databaseURL: "https://todo-list-gc-consulting-default-rtdb.firebaseio.com",
    projectId: "todo-list-gc-consulting",
    storageBucket: "todo-list-gc-consulting.appspot.com",
    messagingSenderId: "891564848069",
    appId: "1:891564848069:web:dbee78664ad8a8396b91ac"
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db.database().ref();