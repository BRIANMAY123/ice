<template>
    <div>
      <button class="back-to-top" v-if="showBackToTop" @click="scrollToTop">↑</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showBackToTop: false
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const scrollPosition = window.pageYOffset;
  
        // 根据滚动位置来判断是否显示回到顶部按钮
        if (scrollPosition > 0) {
          this.showBackToTop = true;
        } else {
          this.showBackToTop = false;
        }
      },
      scrollToTop() {
        // 平滑滚动到页面顶部
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  };
  </script>
  
  <style>
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    background-color: #ffffff;
    color: #008cff;
    font-weight: 300;
    border: none;
    cursor: pointer;
    
    transition: opacity 0.3s;
    /* 新增样式 */
    border-radius: 50%;
  }
  
  .back-to-top.show {
    opacity: 1;
  }
  </style>
  