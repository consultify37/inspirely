import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBV4QBCcTwx_OwFPnl6vgRA7YoWL8fU4zw",
  authDomain: "inspirely-consultify-socialy-c.firebaseapp.com",
  projectId: "inspirely-consultify-socialy-c",
  storageBucket: "inspirely-consultify-socialy-c.appspot.com",
  messagingSenderId: "1092064110439",
  appId: "1:1092064110439:web:091318515d55404a20f1c2"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)