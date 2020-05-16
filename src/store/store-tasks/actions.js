import { uid, Notify } from "quasar";
import { firebaseDb, firebaseAuth } from "src/boot/firebase";
import { showError } from "src/functions/function-show-error";

export function updateTask({ dispatch }, payload) {
    dispatch("fbUpdateTask", payload);
}
export function deleteTask({ dispatch }, id) {
    dispatch("fbDeleteTask", id);
}
export function addTask({ dispatch }, task) {
    let taskId = uid();
    let payload = {
        id: taskId,
        task: task
    };
    dispatch("fbAddTask", payload);
}

export function setSearch({ commit }, value) {
    commit("setSearch", value);
}

export function setSort({ commit }, value) {
    commit("setSort", value);
}

export function fbReadData({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let userTasks = firebaseDb.ref("tasks/" + userId);
    // data load
    userTasks.once(
        "value",
        snapshop => {
            commit("setTasksDownloaded", true);
        },
        error => {
            showError(error.message);
            this.$router.replace("/auth");
        }
    );
    // child added
    userTasks.on("child_added", snapshot => {
        let task = snapshot.val();
        let payload = {
            id: snapshot.key,
            task: task
        };
        commit("addTask", payload);
    });
    //child changed
    userTasks.on("child_changed", snapshot => {
        let task = snapshot.val();
        let payload = {
            id: snapshot.key,
            updates: task
        };
        commit("updateTask", payload);
    });
    //child deleted
    userTasks.on("child_removed", snapshot => {
        let taskId = snapshot.key;
        commit("deleteTask", taskId);
    });
}

export function fbAddTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
    taskRef.set(payload.task, error => {
        if (error) {
            showError(error.message);
        } else {
            Notify.create("Task Added!");
        }
    });
}
export function fbUpdateTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
    taskRef.update(payload.updates, error => {
        if (error) {
            showError(error.message);
        } else {
            let keys = Object.keys(payload.updates);
            if (!(keys.includes("completed") && keys.length == 1)) {
                Notify.create("Task Updated!");
            }
        }
    });
}

export function fbDeleteTask({}, taskId) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("tasks/" + userId + "/" + taskId);
    taskRef.remove(error => {
        if (error) {
            showError(error.message);
        } else {
            Notify.create("Task Deleted!");
        }
    });
}