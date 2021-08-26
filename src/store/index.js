import { createStore } from 'vuex';

export default createStore({
    state: {
        user: {
            preferred_name: 'Lik',
            full_name: 'Lik Wei',
            email_id: 'likwei@gmail.com',
            dob: '12/05/1999',
        },
        userLevel: 0,
        userActivities: [
            {
                type: 'Walking',
                duration: '15 minutes',
            },
            {
                type: 'Walking',
                duration: '30 minutes',
            },
            {
                type: 'Jogging',
                duration: '15 minutes',
            },
            {
                type: 'Jogging',
                duration: '30 minutes',
            },
            {
                type: 'Walking',
                duration: '45 minutes',
            },
        ],
        activityState: 0,
        activityLevels: ['Confirm', 'Start', 'End', 'Post-Activity'],
    },
    mutations: {
        UPDATE_LEVEL(state, newUserLevel) {
            state.userLevel = newUserLevel;
        },
        UPDATE_ACTIVITY_STATE(state, newState) {
            state.activityState = newState;
        },
    },
    actions: {
        updateLevel({ commit }, newUserLevel) {
            commit('UPDATE_LEVEL', newUserLevel);
        },
        updateActivityState({ commit }, newState) {
            commit('UPDATE_ACTIVITY_STATE', newState);
        },
    },
    modules: {},
});
