<!-- src/components/Hello.vue -->

<template>
    <div class="all">
        <div class='hello'>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
        </div>
    <type />
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import Type from './components/Type.vue';
export default Vue.extend({
  data:function(){
    return {
        name: "sfsfsf",
        enthusiasm: 5,
    }
  },
  components:{
      HelloComponent,
      Type
  }
});
</script>
<style>

</style>