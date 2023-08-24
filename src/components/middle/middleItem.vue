<template>
  <li class="item">
                <div class="advertisement">
                 <div class="main">
                    <div class="info-box">
                           <div><a href="http://127.0.0.1:5500/src/blank.html" target="_blank" class="title">{{ mitem.title }}</a></div>
                            <div class="ww"><a href="http://127.0.0.1:5500/src/blank.html" target="_blank" class="description">
                                {{ mitem.description }}
                            </a> </div>
                         <div class="footer meta-container">
                            <div class="user-message">
                                <!--用户超链接-->
                                <div class="popover-box user-popover">{{ mitem.user }}</div>
                            </div> 
                         </div>
                    </div> 
                    <div class="thumb-wrap">
                    <img :src=mitem.img alt="封面"> 
                    </div>
                 </div>
                </div> 
            </li>
</template>

<script>
export default {
    name:'middleItem',
    props:['mitem']
}
</script>

<style>
.main{
    justify-content: space-between;
}
.info-box .ww {
    width: 560px;
    overflow: hidden; 
    white-space: nowrap; 
    text-overflow: ellipsis;
}
</style>