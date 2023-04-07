// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAZ0JY1FcOPGxGvHZ6DavKNHHXJ8lCNAEE",
  authDomain: "loginapprisial.firebaseapp.com",
  projectId: "loginapprisial",
  storageBucket: "loginapprisial.appspot.com",
  messagingSenderId: "128864312336",
  appId: "1:128864312336:web:a66a3a245c1ad7c38e7e95",
  measurementId: "G-WWP4MDVXLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider}


























// import {getAuth,GoogleAuthProvider} from "firebase/";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyAhi5y6V5Sv2s6hdlk-SMGu35LMoFo8cqM",
//   authDomain: "appraisallogin.firebaseapp.com",
//   projectId: "appraisallogin",
//   storageBucket: "appraisallogin.appspot.com",
//   messagingSenderId: "99051324207",
//   appId: "1:99051324207:web:dc436fe97fb29631ab17da",
//   measurementId: "G-HK1781FZP1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth=getAuth(app)
// const provider = new GoogleAuthProvider();
// export {auth, provider};
