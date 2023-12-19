import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore'
import { TProduct } from '../types'

// App's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
}

export type TAdditionalInfo = {
  username?: string
}

export type TUserData = {
  createdAt: Date
  email: string
  username: string
}

export type TObjectToAdd = {
  title: string
  code_color: string
}

// Initialize Firebase
initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const db = getFirestore()

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const getProductsCollection = async (): Promise<TProduct[]> => {
  const collectionRef = collection(db, 'products')
  const q = query(collectionRef)
  const querySnapshot = await getDocs(q)

  return querySnapshot.docs.map(docSnapshot => docSnapshot.data() as TProduct)
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInfo = {} as TAdditionalInfo,
): Promise<void | QueryDocumentSnapshot<TUserData>> => {
  if (!userAuth) return
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      })
    } catch (error) {
      console.log('Error creating the user!', error)
    }
  }

  return userSnapshot as QueryDocumentSnapshot<TUserData>
}

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangeListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback)

export const getCurrentUser = (): Promise<null | User> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      userAuth => {
        unsubscribe()
        resolve(userAuth)
      },
      reject,
    )
  })
}

// Update database
export const addCollectionsAndDocuments = async <T extends TObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[],
): Promise<void> => {
  const collectionRef = collection(db, collectionKey)

  // Batch - Prevent lose data in the requests
  const batch = writeBatch(db)

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.code_color.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('Done')
}
