import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyCOigcDG7XiA7gzwjZ0HYN2nNMKmiJlGvY",

    authDomain: "http://lavandacafemenu.firebaseapp.com/",

    projectId: "lavandacafemenu",

    storageBucket: "http://lavandacafemenu.firebasestorage.app/",

    messagingSenderId: "337471082110",

    appId: "1:337471082110:web:8ecb446cfcbc9bd4a9122f"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);