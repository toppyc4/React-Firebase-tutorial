import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtsGXsYVs7gAIjzMppGyb6zbHaXGIirAM",
  authDomain: "blog-project-f9197.firebaseapp.com",
  projectId: "blog-project-f9197",
  storageBucket: "blog-project-f9197.appspot.com",
  messagingSenderId: "760453236012",
  appId: "1:760453236012:web:05ccd493af49765b8a1889",
  measurementId: "G-Q15V55H38E",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app)
export const db = getFirestore(app)
