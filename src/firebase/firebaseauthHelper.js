import { firebase } from "./firebase";

/** when user sends register details */

function attemptoRegisterNewUser(email, phone, password) {
  firebase
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const userId = response.user.uid;
      addUserDetailsBasedOnUID(userId, email, phone, password);
    })
    .catch((error) => {
      alert(error.message);
    });
}
/** when user is succefully authenticated  save user detail in side of the firestore*/

function addUserDetailsBasedOnUID(uid, email, password, navigation) {
  firebase
    .firestore()
    .collection("users")
    .doc(uid)
    .set({ firstName, lastName, email, password })
    .then(() => {
      navigation.replace("Login");
    })
    .catch((error) => {
      alert(error.message);
    });
}

export { attemptoRegisterNewUser };

/***
 *
 *  this function will be allowing user to
 *  signin from firebase and go to home page
 *
 *
 */

function attemptToSignin(email, password, navigation) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      //saveUserSession("true"); // this will save a variable called is_logged_in in storage
      navigation.replace("Home");
    })
    .catch((error) => {
      alert(error.message);
    });
}

export { attemptToSignin };
