<!-- src/components/Type.vue -->
<template>
     <div class='type'>
         <list :data="arr1" title="" />
         <list :data="arr2" title="" />
         <list :data="anyArr" title="" />
         <list :data="arrMoreType" title="" />
         <list :data="arrObject" title="" />
         <list :data="arrObject2" title="" />
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { arr1, arr2, arrMoreType, anyArr, arrObject, arrObject2 } from '@utils/array';
import List from './List.vue';
export default Vue.extend({
    components:{
        List
    },
    data:function(){
        return {
            arr1,
            arr2,
            arrMoreType,
            anyArr,
            arrObject,
            arrObject2
        }
    }
});
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>