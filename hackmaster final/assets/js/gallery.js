// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getStorage, ref, listAll, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvcMl9tbOXtUbz8fuT4zTfu3JGkUiCkwo",
    authDomain: "fir-trial-f6ada.firebaseapp.com",
    databaseURL: "https://fir-trial-f6ada-default-rtdb.firebaseio.com",
    projectId: "fir-trial-f6ada",
    storageBucket: "fir-trial-f6ada.appspot.com",
    messagingSenderId: "851849158104",
    appId: "1:851849158104:web:a1cd208c3044d17eb9e6ad",
    measurementId: "G-BK5HJ6V6H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

// Reference to the root of your storage
const storageRef = ref(storage, '/gallery');

// List all items under the root storage path
var img_container = document.getElementById("imageGrid")
listAll(storageRef)
    .then((result) => {
        // result.items is an array of references to each item
        result.items.forEach((itemRef) => {
            // Get the download URL for each item
            getDownloadURL(itemRef)
                .then((url) => {
                    // console.log(storageRef)
                    const image = document.createElement("img");
                    image.src = url;
                    // img_container.appendChild(image);
                    const imgContainer = document.createElement("div");
                    imgContainer.classList.add("item", "item--medium");
                    imgContainer.appendChild(image);
                    imageGrid.appendChild(imgContainer);
                    // console.log('Image URL:', url);
                    // Display the image in your application or store the URLs in an array
                })
                .catch((error) => {
                    console.error('Error retrieving image URL:', error);
                });
        });
    })
    .catch((error) => {
        console.error('Error listing items:', error);
    });