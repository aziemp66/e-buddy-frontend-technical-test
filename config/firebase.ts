// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	// connectAuthEmulator
} from 'firebase/auth';
import {
	getFirestore,
	// connectFirestoreEmulator
} from 'firebase/firestore';
import {
	getFunctions,
	// connectFunctionsEmulator
} from 'firebase/functions';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCtcawO5fNCBPzGVbArGFzE01nTA6bD_xA",
	authDomain: "personal-4831f.firebaseapp.com",
	projectId: "personal-4831f",
	storageBucket: "personal-4831f.firebasestorage.app",
	messagingSenderId: "366172262922",
	appId: "1:366172262922:web:091d9ac7d72fc2619385f3",
	measurementId: "G-V536DDC9HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);

// Connect to emulators during development
// if (process.env.NODE_ENV === 'development') {
// 	connectAuthEmulator(auth, 'http://localhost:9099');
// 	connectFirestoreEmulator(db, 'localhost', 8080);
// 	connectFunctionsEmulator(functions, 'localhost', 5001);
// }