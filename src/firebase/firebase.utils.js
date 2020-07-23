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
export const createUserProfileDocument = async (userIdAuthor,additionalData)=>{
  if(!userIdAuthor) return;
  const userRefrence = firestore.doc(`user/${userIdAuthor.uid}`)
  const snapShot = await userRefrence.get()
  if(!snapShot.exists){
    const{displayName,email} = userIdAuthor
    const createDate = new Date()
    try {
      await userRefrence.set({
        displayName,
        email,
        createDate,
        ...additionalData
      })
    } catch (error) {
      console.log(error)
    }
  }
  return userRefrence
}
firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = ()=>auth.signInWithPopup(provider)

export default firebase