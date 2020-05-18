export function tasksSorted(state) {
    let tasksSorted = {},
        keysOrdered = Object.keys(state.tasks);

    keysOrdered.sort((a, b) => {
        let taskAProp = state.tasks[a][state.sort].toLowerCase(),
            taskBprop = state.tasks[b][state.sort].toLowerCase();
        if (taskAProp > taskBprop) {
            return 1;
        } else if (taskAProp < taskBprop) {
            return -1;
        } else {
            return 0;
        }
    });
    keysOrdered.forEach(key => {
        tasksSorted[key] = state.tasks[key];
    });
    return tasksSorted;
}

export function tasksFiltered(state, getters) {
    let tasksSorted = getters.tasksSorted;
    let tasksFiltered = {};
    if (state.search) {
        Object.keys(tasksSorted).forEach(function(key) {
            let task = tasksSorted[key],
                taskNameLowerCase = task.name.toLowerCase(),
                searchLowerCase = state.search.toLowerCase();
            if (taskNameLowerCase.includes(searchLowerCase)) {
                tasksFiltered[key] = task;
            }
        });
        return tasksFiltered;
    }
    return tasksSorted;
}

export function tasksTodo(state, getters) {
    let tasksFiltered = getters.tasksFiltered;

    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
        let task = tasksFiltered[key];
        if (!task.completed) {
            tasks[key] = task;
        }
    });
    return tasks;
}

export function tasksCompleted(state, getters) {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
        let task = tasksFiltered[key];
        if (task.completed) {
            tasks[key] = task;
        }
    });
    return tasks;
}

export function taskLists(state) {
    let tasksListed = state.lists;
    return tasksListed;
}

export function taskListsOptions(state, getters) {
    let taskList = getters.taskLists;
    let listOptions = Object.values(taskList);
    return listOptions;
}