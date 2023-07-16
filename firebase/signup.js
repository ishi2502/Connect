import { app, database, auth, createUserWithEmailAndPassword, collection, addDoc } from "./config.js";

//............................REFERENCES............................//
const email = document.getElementById("email");
const pswrd = document.getElementById("password");
const cnfrmpswrd = document.getElementById("cnfrmpassword");
const submit = document.getElementById("register_btn");

//..................................VALIDATION.........................//
function validation() {
    let nameregex = /^[a-zA-Z\s]+$/;
    let emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailregex.test(email.value)) {
        alert("Enter a valid email");
        return false;
    }

    if (pswrd.value != cnfrmpswrd.value) {
        alert("passwords does not match");
        return false;
    }
    return true;
}

//...............................................REGISTER USER TO FIREBASE.........................................//
function RegisterUser() {
    if (!validation()) {
        return;
    }
    createUserWithEmailAndPassword(auth, email.value, pswrd.value)
        .then((userCredential) => {
            const user = userCredential.user;

            const currentdate = new Date();
            addDoc(collection(database, "users"), {
                uid: user.uid,
                email: email.value,
                profilephotourl: 'https://firebasestorage.googleapis.com/v0/b/discuss-7fd5f.appspot.com/o/profile_pic.jpg?alt=media&token=37028a19-6ed8-4a80-8e8d-f4b97ca7f4df',
                formsubmitted: false,
                lastlogin: currentdate,
            }).then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                alert("user created");
                window.location.href = 'editprofile.html';
            });

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
        });
}

//..................................................ASSIGN THE EVENTS..............................//
submit.addEventListener("click", RegisterUser);
