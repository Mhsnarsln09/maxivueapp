import mutations from "./mutations"
import getters from "./getters"
import actions from "./actions"

export default {
    namespaced:true,
    state() {
        return {
            coaches: [
                {
                  id: 'c1',
                  firstName: 'Muhsin',
                  lastName: 'Arslan',
                  areas: ['frontend','backend', 'career'],
                  description:
                    "I'm Muhsin and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                  hourlyRate: 30
                },
                {
                  id: 'c2',
                  firstName: 'Jale',
                  lastName: 'De Jale',
                  areas: ['career'],
                  description:
                    'I am Jale and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                  hourlyRate: 30
                },
                {
                  id: 'c22',
                  firstName: 'Savaş',
                  lastName: 'Afşin',
                  areas: ['frontend', 'backend'],
                  description:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                  hourlyRate: 30
                },
                {
                  id: 'c11',
                  firstName: 'Ahmet',
                  lastName: 'Çakmak',
                  areas: ['frontend' ],
                  description:
                    "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                  hourlyRate: 30
                }
              ]
        }
    },
    getters,
    mutations,
    actions

}