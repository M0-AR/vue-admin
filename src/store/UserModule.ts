import {User} from "@/models/user";
import {Role} from "@/models/role";
import {Commit} from "vuex";

export default {
    namespaced: true,
    state: {
        user: new User(0, '', '', '', new Role(0, '')),
    },
    mutations: {
        SET_USER: (state: {user: User}, user: User) => state.user = user
    },
    actions: {
        setUser: ({commit}: { commit: Commit }, user: User) => commit('SET_USER', user)
    },
}