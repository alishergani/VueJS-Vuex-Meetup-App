import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Meetups from '../components/Meetup/Meetups'
import Meetup from '../components/Meetup/Meetup'
import CreateMeetup from '../components/Meetup/CreateMeetup'
import CoolBackground from '../components/CoolBackground.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/newmeetup',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/meetups/:id',
      props: true,
      name: 'Meetup',
      component: Meetup
    },
    {
      path: '/coolbackground',
      name: 'CoolBackground',
      component: CoolBackground
    }

  ]
})
