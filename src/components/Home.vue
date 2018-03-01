<template>
	<v-container>
		<v-layout row wrap mb-2>
			<v-flex xs12 sm6 text-sm-center text-lg-center>
				<v-btn large color="success" to="/meetups"
				>Show All Meetups</v-btn>
			</v-flex>
			<v-flex xs12 sm6 text-sm-center text-lg-center>
				<v-btn large color="success" to="/newmeetup"
				>Create Meetup</v-btn>
			</v-flex>
		</v-layout>
    
    <v-layout>
			<v-flex>
			  <v-carousel hide-delimiters="true">
			     <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            :to="'/meetups/' + meetup.id">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
			  </v-carousel>
			</v-flex>
		</v-layout>

		<v-layout row wrap  class="mt-2">
      <v-flex xs12 md12 class="text-md-right">
       <v-btn 
       	flat 
       	color="orange"
       	href="https://alishergani.github.io" target="_blank"
       	>Developed by MELDEBEK ALISHER</v-btn>
      </v-flex>
    </v-layout>
	</v-container>
</template>

<script>
  export default {
    data() {
      return {
        show: true
      }
    },
  	computed: {
  		meetups() {
  			return this.$store.getters.featuredMeetups
  		}
  	}
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.7);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
  .fade-enter-active {
    animation: slide .2s reverse;
  }
  .fade-leave-active {
    animation: slide .2s;
  }
  @keyframes slide {
    0% {
      line-height: 1.5;
      opacity: 1;
    }
    25% {
      line-height: 1.3;
      opacity: .8;
    }
    50% {
      line-height: 1;
      opacity: .5;
    }
    75% {
      line-height: .7;
      opacity: .3;
    }
    100% {
      line-height: 0;
      opacity: 0;
    }
  }
</style>