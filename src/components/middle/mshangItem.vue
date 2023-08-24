<template>
  <div class="text-items">
                    <div class="text-header">
                        <div class="hot-title">
                            <img :src=msdata.img alt="icon" class="hot-icon"> 
                            <span title="综合文章榜" class="title-text">{{ msdata.title }}
                         </span>
                       </div> 
                       <a href="#" target="_blank" class="item-header-button">更多></a>
                    </div>
                    
                    <ul class="text-body">
                        <li class="hot-item"><div class="ee1"></div><a href="http://127.0.0.1:5500/src/blank.html">{{ msdata.subtitles[0] }}</a></li>
                        <li class="hot-item"><div class="ee2"></div><a href="http://127.0.0.1:5500/src/blank.html">{{ msdata.subtitles[1] }}</a></li>
                        <li class="hot-item"><div class="ee3"></div><a href="http://127.0.0.1:5500/src/blank.html">{{ msdata.subtitles[2] }}</a></li>
                    </ul>
                </div>
</template>

<script>
export default {
    name:'mshangItem',
    props:['msdata']
}
</script>

<style>
.text-items ul li {
  width: 186px;
  height: 62px;
  display: flex;
  line-height: 28px;
  align-items: center;
   
}
.text-items ul li a {
    width: 180px;
    height: 28px;
    overflow: hidden; 
    white-space: nowrap; 
    text-overflow: ellipsis;
    color: black;
    font-size: 0.88rem;
}
.text-items .text-body .ee1{
    height:3px;
    width: 3px;
    background-color: brown;
    margin-right: 5px;
}
.text-items .text-body .ee2{
    height:3px;
    width: 3px;
    background-color: rgb(57, 40, 132);
    margin-right: 5px;
}
.text-items .text-body .ee3{
    height:3px;
    width: 3px;
    background-color: rgb(42, 165, 77);
    margin-right: 5px;
}
</style>