import { firebaseAuth } from "boot/firebase";
import { LocalStorage, Loading } from "quasar";
import { showError } from "src/functions/function-show-error";

export function registerUser({}, payload) {
    Loading.show();
    firebaseAuth
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
            console.log("response: ", response);
        })
        .catch(error => {
            showError(error.message);
        });
}

export function loginUser({}, payload) {
    Loading.show();
    firebaseAuth
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
            console.log("response: ", response);
        })
        .catch(error => {
            showError(error.message);
        });
}

export function logoutUser() {
    firebaseAuth.signOut();
}

export function handleAuthState({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged(user => {
        Loading.hide();
        if (user) {
            commit("setLoggedIn", true);
            LocalStorage.set("loggedIn", true);
            this.$router.push("/").catch(err => {});
            dispatch("tasks/fbReadData", null, { root: true });
        } else {
            commit("tasks/clearTasks", null, { root: true });
            commit("tasks/setTasksDownloaded", false, { root: true });
            commit("setLoggedIn", false);
            LocalStorage.set("loggedIn", false);
            this.$router.replace("/auth");
        }
    });
}