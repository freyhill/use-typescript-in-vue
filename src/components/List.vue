<!-- src/components/Type.vue -->
<template>
     <div class='list'>
         <h2>{{title}}</h2>
         <ul>
             <li v-for="(item, index) in data" :key="index">
                <span v-if="typeof item === 'object'">
                   <li v-for="value in item" :key="value">
                       {{value}}
                   </li>
                </span>
                <span v-else>
                    {{item}}
                </span>
             </li>
         </ul>
    </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props:[
        'data',
        'title'
    ]
});
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>