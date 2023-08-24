<template>
  <div class="box">      
        <mshangItem v-for="msdata in msdatas" :key="msdata.id" :msdata="msdata"/>
    </div>
</template>

<script>
import mshangItem from './mshangItem.vue'
import axios from 'axios';
import Mock from 'mockjs';
import data from '../../../mock/middleshang'

export default {
 name:'mshangList',
 components:{mshangItem},
 data() {
    return {
        msdatas:[]
    } 
 },
 methods:{
  fData(){
    Mock.mock('/api/msdata','get',data);
    axios.get('/api/msdata')
        .then((response) => {
          this.msdatas = response.data.msdatas;
          console.log(response)
        })
        .catch((error) => {
          console.log(error);
        });
  }
 },
 created(){
  this.fData();
 }
}
</script>

<style>

</style>