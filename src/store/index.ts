import {Commit, createStore} from 'vuex'
import {User} from "@/models/user";
import {Role} from "@/models/role";

export default createStore({
    state: {
        user: new User(0, '', '', '', new Role(0, '')),
    },
    mutations: {
        SET_USER: (state: {user: User}, user: User) => state.user = user
    },
    actions: {
        setUser: ({commit}: { commit: Commit }, user: User) => commit('SET_USER', user)
    },
    modules: {}
})
