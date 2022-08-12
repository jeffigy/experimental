import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore,enableIndexedDbPersistence  } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCytIyEfUaZj-ixrpYAK2eTxQE9G2Flqb4",
    authDomain: "stjude-a345d.firebaseapp.com",
    projectId: "stjude-a345d",
    storageBucket: "stjude-a345d.appspot.com",
    messagingSenderId: "284559415864",
    appId: "1:284559415864:web:6a402c1d2f3fb1c790a4cd",
    measurementId: "G-0NWGCP35JB"
};

const app = initializeApp(firebaseConfig);

 const db = getFirestore(app);

enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.

        console.log("You have Violated The law only use 1 Tab")
    } else if (err.code === 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        console.log("Browser does not support IndexedDB")
    }
});


export const auth = getAuth(app);
export {db}