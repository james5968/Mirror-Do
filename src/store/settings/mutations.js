export function setShow12HourTime(state, value) {
    state.settings.show12HourTime = value
}

export function setShowTasksOneList(state, value) {
    state.settings.showTasksOneList = value
}

export function setSettings(state, settings) {
    Object.assign(state.settings, settings)
}