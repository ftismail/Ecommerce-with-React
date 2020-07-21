import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config =  {
    apiKey: "AIzaSyBPcBxSHG55n8uzCt2lLxtx7MFXz9iNHNQ",
    authDomain: "ecommerce-f6d6a.firebaseapp.com",
    databaseURL: "https://ecommerce-f6d6a.firebaseio.com",
    projectId: "ecommerce-f6d6a",
    storageBucket: "ecommerce-f6d6a.appspot.com",
    messagingSenderId: "720957441598",
    appId: "1:720957441598:web:7145906eeadd78899ef36f",
    measurementId: "G-60RPJF6QW9"
  }
firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = ()=>auth.signInWithPopup(provider)

export default firebase