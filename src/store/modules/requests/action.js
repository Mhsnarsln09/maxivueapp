export default {
   contactCoach(context, data){
    const newRequest = {
        id: new Date().toISOString,
        coachId: data.coachId,
        userEmail: data.email,
        message: data.email
    }
    context.commit('addRequest', newRequest)
    console.log('useremail', newRequest.userEmail)
    }
}