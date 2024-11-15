// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiem9ODUdc8iTd_7z_VbAqddXfipYGx_Q",
    authDomain: "ewastefacilitylocater.firebaseapp.com",
    projectId: "ewastefacilitylocater",
    storageBucket: "ewastefacilitylocater.firebasestorage.app",
    messagingSenderId: "696523820700",
    appId: "1:696523820700:web:7ff67295ad4999c7b6a759",
    measurementId: "G-DXCHSR9M5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();