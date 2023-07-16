import {
    app,
    database,
    auth,
    onAuthStateChanged,
    doc,
    collection,
    query,
    where,
    getDocs,
    updateDoc,
    getStorage,
    ref,
    uploadString,
    getDownloadURL,
    deleteObject,
} from "./config.js";
import { arrayUnion } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

var queryString = location.search.substring(1);
var a = queryString.split("|");
var rid = a[0];

// console.log(rid);

const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const country = document.querySelector(".country");
const state = document.querySelector(".state");
const bio = document.querySelector(".bio");
const img = document.getElementById('output');

firstname.readOnly = true;
lastname.readOnly = true;
country.readOnly = true;
state.readOnly = true;
bio.readOnly = true;
img.readOnly = true;

const q = query(collection(database, "friendchat"), where("parentid", "==", rid));
// console.log("hi");
// console.log(rid);

function viewDetails() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const q = query(collection(database, "users"), where("uid", "==", rid));
            getDocs(q)
                .then((querySnapshot) => {
                    querySnapshot.forEach((docdata) => {
                        if (!docdata.data().formsubmitted) {
                            alert("You need to make your profile first")
                            window.location.href = 'editprofile.html';
                        }
                        const docRef = doc(database, "users", docdata.id);
                        document.querySelector(".firstname").value = docdata.data().firstname + docdata.data().lastname || '';
                        document.querySelector(".fullname").innerHTML = docdata.data().firstname + docdata.data().lastname;
                        document.querySelector(".country").value = docdata.data().country || '';
                        document.querySelector(".state").value = docdata.data().state || '';
                        document.querySelector(".bio").value = docdata.data().bio || 'No bio availaible';
                        const img = document.getElementById('output');
                        img.src = docdata.data().profilephotourl;
                    })
                })
        }
        else {
            alert("Login first")
            window.location.href = 'login.html';
        }
    })
}

window.onload = viewDetails;
