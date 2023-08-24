<template>
    <div>
      <div class="middleShang">
                <mshangList/>
                </div>
            
               
               
               <div class="middleXia">
                <div class="list-header" >
                    <nav role="navigation" class="list-nav">
                        <ul class="nav-list">
                            <li class="nav-ittem active">
                                <router-link to="/renGong/middleList">推荐</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/renGong/blank">最新</router-link>
                            </li>
                        </ul> 
                        <div class="dorp-down-area">
                        </div>
                    </nav>
                </div>
    
                <router-view></router-view>
               </div>
    
    </div>
    </template>
    
    <script>
    import mshangList from '../mshangLIst.vue'
    
    export default {
      name:'renGong',
      components: {
        mshangList
      }
    
    }
    </script>
      
    <style>
    
    </style>