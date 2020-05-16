import { LocalStorage } from 'quasar'

export function setShow12HourTime({ commit, dispatch }, value) {
    commit('setShow12HourTime', value)
    dispatch('saveSettings')
}

export function setShowTasksOneList({ commit, dispatch }, value) {
    commit('setShowTasksOneList', value)
    dispatch('saveSettings')
}

export function saveSettings({ state }) {
    LocalStorage.set('settings', state.settings)
}

export function getSettings({ commit }) {
    let settings = LocalStorage.getItem('settings')
    if (settings) {
        commit('setSettings', settings)
    }
}