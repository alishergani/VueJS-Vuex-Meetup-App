import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'http://today.kz/static/uploads/a5a6872e-e63d-4e1a-a2d9-c96f317daa05.jpeg', 
        id: '0001', 
        title: 'Meetup in Almaty',
        date: '2017-07-17',
        description: `Almaty , orAlma-ata Алматы  is the largest city in Kazakhstan with a population of 1,421,
        868 (at 1st of August 2010) with about 9% of the countries population located in one city, it is 
        certainly a hustling and bustling place to be. It also used to be the former capital of the country, 
        until 1997 when it moved to Astana.`
      },
      {
        imageUrl: 'http://today.kz/static/uploads/f43eca5b-a905-48e8-a2fc-acb688b8472c.jpeg', 
        id: '0002', 
        title: 'Meetup in Astana',
        date: '2017-07-19',
        description: `Astana is located in the centre of Kazakhstan in the
         dry steppe zone and in the grass steppe subzone. The area of the
          city stands above the flood plain. The Yessil River is a major waterway
           of the capital. The city has an extreme continental climate with cold winter and hot dry summer.`
      },
      {
        imageUrl: 'http://shymkent.gov.kz/assets/img/facts.jpg', 
        id: '0003', 
        title: 'Meetup in Shymkent',
        date: '2017-07-19',
        description: `Shymkent was founded in the twelfth century as a caravanserai to protect the Silk Road town
         of Sayram, 10 km to the east. Shymkent grew as a market center for trade between Turkic nomads and the
          settled Sogdians. It was destroyed several times: by Genghis Khan, soldiers from the southern Khanates, 
          and by nomad attacks. In the early 19th century it became part of the khanate of Kokand. It was captured
          by the Russians in 1864.It was renamed Chernyaev in 1914 and renamed Shymkent in 1924.`
      }
    ],
    user: {
      id: 'ajaldslfalsk12',
      registeredMeetups: ['aadsfhbkhlk1241']
    }
  },

  mutations: {
    creatingMeetup(state, payload) {
      state.loadedMeetups.push(payload)
    }
  },

  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: '1001'
      }
      // Firebase
      commit('creatingMeetup', meetup)// return data from MUSTATIONS
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
