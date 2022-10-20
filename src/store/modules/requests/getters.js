export default {
    requests(state){
        console.log("getters",state.requests)
        return state.requests
    },
    hasRequests (state){
        return state.requests && state.requests.length >0
    }
}