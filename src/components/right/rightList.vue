<template>
     <ul class="link-list">
           <rightItem v-for="rightobj in right" :key="rightobj.id" :rights="rightobj"/>
     </ul>
</template>

<script>
import rightItem from './rightItem.vue'
export default {
  name:'rightList',
  components:{rightItem},
  data(){
    return {
        right:[
            {id:'001',title:'稀土掘金漫游指南',img:"//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin.7948662.png"},
            {id:'002',title:'掘金浏览器插件',img:"//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/extension.ab1ba29.png"},
            {id:'003',title:'掘金翻译计划',img:"//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/translation.01f4b92.png"},
            {id:'004',title:'官方微博',img:"//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/weibo.e1fb82b.png"},
            {id:'005',title:'微信公众号',img:"//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/wechat.cf34f92.png"}
        ]
    }
  }
}
</script>

<style>

</style>