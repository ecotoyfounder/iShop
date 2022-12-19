// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEJesrhvtVNSagyTUUnAZQHFoLEhZqEVw",
    authDomain: "i-shop-34545.firebaseapp.com",
    projectId: "i-shop-34545",
    storageBucket: "i-shop-34545.appspot.com",
    messagingSenderId: "792128113151",
    appId: "1:792128113151:web:cfad446533cf4e4972ffca",
    measurementId: "G-Y7L75FQE4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);