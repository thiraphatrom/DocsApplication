// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0KzX6SfhjAvX5Kx0DCHB9GA4pyCN204Q",
  authDomain: "docs-application.firebaseapp.com",
  projectId: "docs-application",
  storageBucket: "docs-application.appspot.com",
  messagingSenderId: "305605396039",
  appId: "1:305605396039:web:e3ebf85e4d4cdb14071362",
  measurementId: "G-EYH7WBC0CJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}
export const db = getFirestore(app)
