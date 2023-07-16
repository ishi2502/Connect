// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, doc, addDoc, getDocs, query, where, updateDoc, onSnapshot,orderBy } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,
    GoogleAuthProvider, signInWithPopup, FacebookAuthProvider
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getStorage, ref, uploadString, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqybIPIlFgwFv-8E2pGtENNF-p9-dE26M",
    authDomain: "discuss-7fd5f.firebaseapp.com",
    projectId: "discuss-7fd5f",
    storageBucket: "discuss-7fd5f.appspot.com",
    messagingSenderId: "129169814240",
    appId: "1:129169814240:web:c9e4731d901cb713d71685"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth();
export {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,

    signOut,
    collection,
    doc,
    addDoc,
    getDocs,
    query,
    where,
    updateDoc,
    onSnapshot,
    orderBy,

    getStorage,
    ref,
    uploadString,
    getDownloadURL,
    deleteObject
};