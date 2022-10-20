export default {
    registerCoach(context, formData){
        const coachData = {
            id: new Date(),
            firstName: formData.first,
            lastName: formData.last,
            description: formData.desc,
            hourlyRate: formData.rate,
            areas: formData.areas           
        }
        context.commit('registerCoach', coachData)
        console.log("actions");
        
    }
}