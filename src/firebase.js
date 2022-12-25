import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp ({
    apiKey: "AIzaSyABDyvOOBk-YTMEV1V2BgEP-sqlguTrTkE",
    authDomain: "filestorage-80686.firebaseapp.com",
    databaseURL: "https://filestorage-80686-default-rtdb.firebaseio.com",
    projectId: "filestorage-80686",
    storageBucket: "filestorage-80686.appspot.com",
    messagingSenderId: "347738959462",
    appId: "1:347738959462:web:460b47972c466c78f487a7"
})
const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app