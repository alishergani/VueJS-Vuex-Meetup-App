<template>
  <vue-particles
    class="bg"
    color="#fff"
    :particleOpacity="0.7"
    :particlesNumber="120"
    shapeType="circle"
    :particleSize="4"
    linesColor="#fff"
    :linesWidth=".5"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="5"
    :hoverEffect="true"
    hoverMode="false"
    :clickEffect="true"
    clickMode="push"
  >
  </vue-particles>
</template>
<script>
  export default {
    
  }
</script>



<style>
 .bg {
  background-color: #444;
  background-image: url('../assets/bg.jpg');
 }
</style>


      