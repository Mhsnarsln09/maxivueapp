import actions from "./action.js"
import mutations from "./mutations.js"
import getters from "./getters.js"

export default {
    namespaced : true,
    state(){
        return {
            requests:[]
        }
    },
    actions,
    mutations,
    getters

}