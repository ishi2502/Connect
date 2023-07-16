import { auth, app, collection, where, doc, getDocs, database, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, updateDoc, query } from './config.js';
//............................REFERENCES............................//
const email = document.getElementById("login_email");
const pswrd = document.getElementById("login_password");

const login = document.getElementById("login");


//...............................................login USER .........................................//   
function LoginUser() {
    signInWithEmailAndPassword(auth, email.value, pswrd.value)
        .then((userCredential) => {
            // Signed in 
            var uid = userCredential.user.uid;
            changedetails();
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
        });

}



//.......................................get current user.........................................//
function changedetails() {
    const user = auth.currentUser;
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const uid = user.uid;
            // console.log("current user: ", uid);
            const currentdate = new Date();
            var lastlogindate = currentdate.getDate() + "/"
                + (currentdate.getMonth() + 1) + "/"
                + currentdate.getFullYear();
            const q = await query(collection(database, "users"), where("uid", "==", uid));
            // console.log(q);
            await getDocs(q)
                .then((querySnapshot) => {
                    // console.log("yo");
                    // console.log(querySnapshot)
                    querySnapshot.forEach((docdata) => {
                        // console.log("yo");
                        if (!docdata.data().formsubmitted) {
                            alert("You need to make your profile first");
                            window.location.href = "editprofile.html";
                        }
                        else {
                            alert('user logged in');
                            const docRef = doc(database, "users", docdata.id);
                            updateDoc(docRef, { lastlogin: lastlogindate });
                            window.location.href = "forum.html";
                        }
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else {
        }
    });
}

//..................................................ASSIGN THE EVENTS..............................//   
login.addEventListener("click", LoginUser);
