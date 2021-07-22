import firebase from "firebase/app";
import "@firebase/firestore"

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBv9-UIWXgBFekto6MQEH-Dk3M6PchJr1s",
    authDomain: "coder-nicolas-montone.firebaseapp.com",
    projectId: "coder-nicolas-montone",
    storageBucket: "coder-nicolas-montone.appspot.com",
    messagingSenderId: "36795335319",
    appId: "1:36795335319:web:bf1801cc3d4ed1e702dfd2"
});
export const getFirebase = ()=>{
    return firebaseConfig
}
// Fncionalidades de firebase
export const getFirestore = ()=>{
    return firebase.firestore(firebaseConfig);
}

export const getAuth = () => {
    return firebase.auth(firebaseConfig)
}