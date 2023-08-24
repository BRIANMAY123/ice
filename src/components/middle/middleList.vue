<template>
  <div class="middleXiaItemList">
            <middleItem v-for="mitem in mitems" :key="mitem.id" :mitem="mitem"/>
        </div>
</template>

<script>

import middleItem from './middleItem.vue';
import axios from 'axios';
import Mock from 'mockjs';
import datas from '../../../mock/index'

export default {
    name: 'middleList',
    components: {
        middleItem
    },
    data(){
        return{
            mitems:[]
        }
    },
    methods: {
    fetchData() {
      Mock.mock('/api/mitems','get',datas);
      axios.get('/api/mitems')
        .then((response) => {
          this.mitems = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.fetchData();
  },
};

</script>

<style>

</style>