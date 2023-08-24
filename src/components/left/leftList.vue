<template>
  <ul>
        <leftItem v-for="litem in litems" :key="litem.id" :litem="litem"/>
    </ul>
</template>

<script>
import leftItem from './leftItem'
import iconPaths from '../../svg/svg'
export default {
 name:'leftList',
 components:{
    leftItem
 },
 data() {
    return {
        iconPaths: iconPaths,
        litems:[
            {id:'001',text:'关注',road:"/guanZhu",path1:iconPaths.icon0,path2:iconPaths.icon1},
            {id:'002',text:'综合',road:"/zhongHe",path2:iconPaths.icon2},
            {id:'003',text:'后端',road:"/houDuan",path2:iconPaths.icon3},
            {id:'004',text:'前端',road:"/qianDuan",path2:iconPaths.icon4},
            {id:'005',text:'Android',road:"/Android",path2:iconPaths.icon5},
            {id:'006',text:'IOS',road:"/IOS",path2:iconPaths.icon6},
            {id:'007',text:'人工智能',road:"/renGong",path2:iconPaths.icon7},
            {id:'008',text:'开发工具',road:"/kaiFa",path2:iconPaths.icon8},
            {id:'009',text:'代码人生',road:"/daiMa",path2:iconPaths.icon9},
            {id:'010',text:'阅读',road:"/yueDu",path1:iconPaths.icon10,path2:iconPaths.icon11},
        ],
        
    }
 },
}
</script>

<style>

</style>