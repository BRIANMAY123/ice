<template>
  <li>
            <div class="nav-item-content" >
               <router-link :to="litem.road" :active-class="activeNavClass" class="nav-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                        <path :d="litem.path1" fill="currentColor"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" :d="litem.path2" fill="currentColor"></path>
                    </svg> 
                    <span class="nav-item-text">
                       {{ litem.text }}     
                    </span>
                </router-link> 
               

            </div>
        </li>
</template>

<script>
export default {
 name:'leftItem',
 props:['litem'],
 data() {
    return {
      activeNavClass: "activeq"
    };
  },
 
}
</script>

<style>
.activeq {
  background-color:#eaf2ff; /* 设置选中项背景颜色为蓝色 */
  color: #abcdff; /* 设置选中项字体颜色为白色 */
}
</style>
