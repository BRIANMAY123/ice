<template>
    <ul class="topsonright1">
               
               <topItem v-for="tdata in tdatas" :key="tdata.id" :tdata="tdata"/>
            </ul>
</template>

<script>
import topItem from './topitem.vue'

export default {
   name:'topList',
   components:{topItem},
   data() {
    return {
        tdatas:[
    {id:'001',name:'首页',road:'/shouYe'},
    {id:'002',name:'沸点',road:'/feiDian'},
    {id:'003',name:'直播',road:'/zhiBo'},
    {id:'004',name:'活动',road:'/huoDong'},
    {id:'005',name:'竞赛',road:'/jingSai'},
    {id:'006',name:'商场',road:'/shangChang'},
    {id:'007',name:'APP',road:'/APP'},
    {id:'008',name:'插件',road:'/chaJian'},
   ]
    }
   },
}
</script>

<style>

</style>