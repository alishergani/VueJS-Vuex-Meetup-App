<template>
  <v-app>
    <v-navigation-drawer
        temporary
        v-model="sideNav"
        absolute>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      dark
      :class="{
        'success': !path, 
        'toolbar--absolute transparent elevation-0': path
      }">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-md-and-ups"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Meetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down ">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
     <!--  {{ path }} -->
      <router-view >
      <!-- Here will be Components /components/**.vue -->
      </router-view>
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          {
            icon: 'supervisor_account', 
            title: 'Meetups', 
            link: '/meetups'
          },
          {
            icon: 'room', 
            title: 'Crete Meetup', 
            link: '/newmeetup'
          },
          {
            icon: 'person', 
            title: 'Cool Background', 
            link: '/coolbackground'
          }
        ]
      }
    },
    computed: {
      path() {
        return this.$route.path == '/coolbackground' ? true : false
      }
    }
  }
</script>

<style>
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 100px);
    font-size: 5em;
    color: #777;
  }
</style>