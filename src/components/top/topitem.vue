<template>
   <li><router-link :to=tdata.road>{{ tdata.name }}</router-link></li>
</template>

<script>
export default {
  name:'topItem',
  props:['tdata']
}
</script>

<style>

</style>