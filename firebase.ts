import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyABlZ3UJt10HIDK5OWiSknF64BFiKQqmiQ',
  authDomain: 'chatgpt-clone-e1b40.firebaseapp.com',
  projectId: 'chatgpt-clone-e1b40',
  storageBucket: 'chatgpt-clone-e1b40.appspot.com',
  messagingSenderId: '467400592956',
  appId: '1:467400592956:web:9a1c882297f765cc22fd39',
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}
