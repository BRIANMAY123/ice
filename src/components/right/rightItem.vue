<template>
    <li class="item">
        <a class="link" href="http://127.0.0.1:5500/src/blank.html" target="_blank">
            <img :src=rights.img class="icon"> 
            <span class="title">{{rights.title}}</span>
        </a>
    </li> 
</template>

<script>
export default {
 name:'rightItem',
 props:['rights']
}
</script>

<style>

</style>