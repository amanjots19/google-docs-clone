import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyArzNq-wB19erXebRvUC5iS4kOQxL07kh4",
    authDomain: "docs-clone-9eae2.firebaseapp.com",
    projectId: "docs-clone-9eae2",
    storageBucket: "docs-clone-9eae2.appspot.com",
    messagingSenderId: "542733692894",
    appId: "1:542733692894:web:51f7dcc506669d4a04774f"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export { db };