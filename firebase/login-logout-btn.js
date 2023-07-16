import { auth, onAuthStateChanged, database, doc, collection, query, where, getDocs, signOut } from './config.js';

const logoutBtn = document.getElementById('Logout_button');
//.......................................get current user.........................................//

function logout(){
signOut(auth).then(() => {
    // Sign-out successful.
    window.location.href = "index.html";
}).catch((error) => {
    // An error happened.
});
}

logoutBtn.addEventListener('click',logout);






