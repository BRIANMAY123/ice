<template>
  <div class="dad">
     
    <div class="top" :class="{ 'navbar-hidden': isNavbarHidden }">
        <div class="topson">
        <div class="topsonleft">
            <a href="/" class="logo">
                <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="稀土掘金" class="logo-img" data-v-dc490140="">
            </a> 
        </div>
        <div class="topsonright">
            <topList/>
            <ul class="topsonright2">
          <li class="nav-item search li1">
            <form role="search" class="search-form">
                <input type="search" maxlength="64" placeholder="探索稀土掘金" value="" class="search-input"> 
                <div class="seach-icon-container">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon" data-v-dc490140=""><path d="M12.4008 12.4008C14.744 10.0577 14.744 6.25871 12.4008 3.91556C10.0577 1.57242 6.25871 1.57242 3.91556 3.91556C1.57242 6.25871 1.57242 10.0577 3.91556 12.4008C6.25871 14.744 10.0577 14.744 12.4008 12.4008ZM12.4008 12.4008L15.5828 15.5828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-dc490140=""></path></svg>
                </div> 
            </form>
          </li>

                <li class="li2">
                  <div class="add-group">
                        <button class="add-btn">
                       创作者中心
                       </button> 
                       <div class="more">
                           <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="unfold12-icon"><path d="M2.45025 4.82383C2.17422 4.49908 2.40501 4 2.83122 4H9.16878C9.59499 4 9.82578 4.49908 9.54975 4.82382L6.38097 8.5518C6.1813 8.7867 5.8187 8.7867 5.61903 8.5518L2.45025 4.82383Z" fill="white"></path></svg> 
                          
                       </div> 
                   </div>
                </li>

                <li class="li3 vip-title">
                    <div data-v-dc490140="" class="vip-entry-img">
                        <img data-v-dc490140="" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg" alt="vip" class="vip-img"> 
                    </div>
                     <div data-v-dc490140="" class="vip-words">会员</div>  
                </li>



                <li class="li4">
                    <button class="login-button" @click="redirectToPage">
                        登录
                        <div class="login-button-inner">
                            <div class="login-button-line"></div>
                          注册
                        </div>
                    </button>
                </li>
            </ul>
        </div>
     </div>
    </div>



    <div class="bigBox">
        <div class="left" :style="{ top: stickyTop + 'px' }">
            <leftList/>
        </div>




        <div class="middle">
           <router-view/>
        </div>
       




        <div class="right">
            <div class="rightShang">
                <div class="first-line">
                    <div class="icon-text">
                        <span class="title">上午好！</span> 
                        <div class="second-line">点亮在社区的每一天</div>
                    </div> 
                    <button class="btn signin-btn">
                        <span class="btn-text" @click="redirectToPage">去签到</span>
                    </button>
                </div>
            </div>



            <div class="rightZhong">
              
                <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-qrcode.b3f37e7.png" class="qr-img">
              
              <div>
                <div class="headline">下载稀土掘金APP</div>
                <div class="desc">一个帮助开发者成长的社区</div>
              </div>
            </div>


            <div class="rightXia">
                <rightList/>
            </div>
              <div class="foot">
                <ul class="more-list">
                    <li class="item">
                        <a href="/terms" target="_blank" rel="nofollow">用户协议</a>
                    </li> 
                    <li class="item">
                        <a href="/license" target="_blank" rel="nofollow">营业执照</a>
                    </li> 
                    <li class="item">
                        <a href="/privacy" target="_blank" rel="nofollow">隐私政策</a>
                    </li> 
                    <li class="item" >
                        <a href="/about" target="_blank" rel="nofollow">关于我们</a>
                    </li>
                </ul> 
                <ul class="more-list">
                    <li class="item"><a href="/map-author-A-1" target="_blank">站点地图</a></li> 
                    <li class="item"><a href="/book/5c90640c5188252d7941f5bb" target="_blank">使用指南</a></li> 
                    <li class="item"><a href="/links" target="_blank" rel="">友情链接</a></li> 
                    <li class="item"><a href="/more_posts" target="_blank" rel="">更多文章</a></li>
                </ul> 
                <ul class="more-list">
                    <li class="item">
                      <span>举报邮箱：<a href="mailto:feedback@xitu.io">feedback@xitu.io</a></span>
                   </li>
               </ul> 
                <ul class="more-list">
                  <li class="item" >
                     <span>座机电话：<a href="tel:010-83434395">010-83434395</a></span>
                  </li>
                </ul>
                 <ul class="more-list">
                    <li class="item" >
                        <a href="https://beian.miit.gov.cn" target="_blank" rel="nofollow">京ICP备18012699号-3</a>
                    </li> 
                    <li class="item">
                        <span>©2023 稀土掘金</span>
                    </li>
                </ul>
               </div>
        </div>
        
    </div>

     <huiDing/>

</div>
</template>

<script>
import topList from './components/top/topList.vue'
import rightList from './components/right/rightList.vue'
import leftList from './components/left/leftList.vue'
import huiDing from './components/qiTa/huiDing.vue'

export default {
  name: 'App',
  components: {
    topList,
    rightList,
    leftList,
    huiDing
  },
  data() {
    return {
      scrollPosition: 0,
      stickyTop:75,
      isNavbarHidden: false
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
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 250) {
        this.isNavbarHidden = true;
        this.stickyTop = 10;
      } else {
        this.isNavbarHidden = false;
        this.stickyTop = 75;
      }
    },
    redirectToPage() {
      window.location.href = 'http://127.0.0.1:5500/src/blank.html';
    }
    
  }
}
</script>

<style>
body {
  background-color: rgb(242, 244, 247);
  

}

.top {
  height: 60px;
  margin-bottom: 15px;
  background-color: white;
  position: sticky;
  top: 0;
  transition: top 0.1s;
  
}
.navbar-hidden {
  top: -60px;
}

.topson {
    height: 60px;
    width: 1440px;
    display: flex;
    margin: auto;
    justify-content: space-between;
  }
  .topsonleft {
    height: 60px;
    width: 112px;
    display: flex;
    align-items: center;
     
  }
  .topsonleft a {
    margin-right: 1rem;
    display: inline-block;
    height: 22px;
    width: auto;
    padding: 1.58rem 0 1.48rem
     
  }
  .topsonleft a img{
    display: block;
    width: 107px;
    height: 22px;
  }
  .topsonright {
    height: 60px;
    width: 1300px;
    display: flex;
    margin: auto;
  
    justify-content: space-between; 
  }
  .topsonright ul{
    display: flex;
  }
  .topsonright1 li{
    height: 60px;
    line-height: 60px;
    width: 52px;
    font-size: 14px;
    text-align: center;
  }
  .topsonright2 li{
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .topsonright2 .li1{
    height: 60px;
    width: 372px;
    padding: 0 1rem;
    font-size: 1rem;
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .li1 .search-form {
    width: 360px;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    position: relative;
    height: 2rem;
    border: 1px solid #c2c8d1;
    transition: width .2s;
  }
  .li1 .search-input {
    
    width: calc(100% - 44px);
    padding: 0.6rem 0 0.6rem 1rem;
    box-shadow: none;
    outline: none;
    font-size: 0.7rem;
    background-color: transparent;
    transition: width .3s;
}
  .li1 .seach-icon-container {
    position: relative;
    left: -2px;
    width: 44px;
    height: 30px;
    background: #f2f3f5;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
}
 .li1 svg {
  stroke: #515767;
 }
  
  
  

  .topsonright2 .li2{
    height: 60px;
    width: 137px;
    color: #86909c;
    padding: 0 1rem;
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
  }
  .topsonright2 .li2 .add-group {
    display: flex;
    align-items: center;
  
    cursor: pointer;
    width: 110px;
    height: 2.2rem;
  }
  .topsonright2 .li2 .add-group .add-btn {
    padding: 0 0.8rem;
    font-size: 0.9rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    white-space: nowrap;
    height: 100%;
    color: white;
    background-color: #1e80ff;
}
.topsonright2 .li2 .add-group .more {
   flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.667rem;
    border-left: 1px solid hsla(0,0%,100%,.1);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    box-sizing: border-box;
    height: 100%;
    color: white;
    background-color: #1e80ff;
}


  .topsonright2 .li3{
    height: 60px;
    width: 56px;
    display: flex;
    align-items: center;
    
  }
  .topsonright2 .li3 img {
    width: 24px;
    height: 24px;
  }
  .topsonright2 .li3 .vip-words{
    color: #8a919f;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-left: 4px;
  }




  .topsonright2 .li4{
    height: 60px;
    width: 120px;
    display: flex;
    align-items: center;
  }
  .li4 .login-button{
    background: rgba(30,128,255,.05);
    border: 1px solid rgba(30,128,255,.3);
    border-radius: 4px;
    padding: 0.3rem 1rem;
    color: #007fff;
    line-height: 1.9rem;
    font-size: 14px;
    font-weight: 400;
    margin-right: 2rem;
    height: 2.3rem;
    overflow: hidden;
    display: flex;
    margin: auto;
    align-items: center;
  }
  .login-button-inner{
    display: flex;
    align-items: center;
  }
  .li4 .login-button .login-button-line{
    margin: 0 6px;
    background-color: #abcdff;
    height: 12px;
    width: 1px
  }



  
.bigBox {
    
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  
}

.bigBox .left {
    height: 470px;
    width: 180px;
    background-color: white;
    display: flex;
    justify-content:center;
    padding-top: 6px;
    position: sticky;
    top: 70px;
   
}


.bigBox .left ul li{
    height: 46px;
    width: 164px;
    
    
    
}
.bigBox .left .nav-item-content {
    line-height: 24px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.bigBox .left .nav-item-content a {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    padding: 10px 17px;
    color: #515767;
}
.bigBox .left .nav-item-content a svg {
    vertical-align: middle;
    margin-right: 12px;
    color: #515767;
 }
 .bigBox .left .nav-item-content a .nav-item-text {
    vertical-align: middle;
    position: relative;
    font-size: 17px;
    width: 20px;
 }








.bigBox .middle {
    
    width: 720px;
    
}
.bigBox .middleShang {
    height: 160px;
    width: 720px;
    background-color: rgb(62, 19, 155);
    margin-bottom: 20px;

}
.bigBox .middleShang .box {
    height: 160px;
    width: 720px;
    display: flex;
    flex-direction: row;
    background-color: white;
}
.bigBox .middleShang .text-items {
   display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1rem 1.66rem;
    border-right: 1px;
    overflow: hidden;
}
.bigBox .middleShang .text-items .text-header {
    display: flex;
    flex-direction:row;
    align-content: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
}
.hot-title {
  font-weight: 500;
    font-size: 1.33rem;
    line-height: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--juejin-font-1);
}
.hot-title img {
    width: 1.66rem;
    height: 1.66rem;
    margin-right: 0.66rem;
}
.hot-title .title-text {
  font-size: 16px;
}
.text-items ul {
  width: 186px;
  height: 84px;
  display: flex;
  flex-direction:column;
}







.bigBox .middleXia {
    
    width: 720px;
    background-color: rgb(255, 255, 255);
}
.bigBox .middleXia .list-header {
  height: 25px;
  padding: 1rem 1.66rem;
  border-bottom: 1px solid #e4e6eb;
 
}
.bigBox .middleXia .list-header .list-nav .nav-list {
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  width: 6.2rem;
  font-size: 1rem;
}
.bigBox .middleXia .item {
   height: 102px;
}
.bigBox .middleXia .advertisement {
  cursor: pointer;
    padding: 0px 20px 0;
}
.bigBox .middleXia .advertisement .main {
    padding-bottom: 12px;
    display: flex;
    border-bottom: 1px solid #e4e6eb;
    align-items: center;
}
.bigBox .middleXia .advertisement .info-box .title {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color:black;
  margin-bottom: 4px;
}
.bigBox .middleXia .advertisement .info-box .description {
  font-weight: 400;
    font-size: 13px;
    line-height: 22px;
   
    color:#5f6065;
}
.bigBox .middleXia .thumb-wrap img {
    flex: 0 0 auto;
    width: 108px;
    height: 72px;
    margin-left: 24px;
    border-radius: 4px;
    border: 1px solid var(--juejin-gray-1-2);
}





.bigBox .right {
    height: 670px;
    width: 263px;
   
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
}
.bigBox .right .rightShang {
    height: 90px;
    width: 263px;
    background-color: white;
    display: flex;
    justify-content:center; 
}
.bigBox .right .rightShang .first-line {
    display: flex;
    width: 220px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.bigBox .right .rightShang .first-line .title {
    color: black;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
}
.bigBox .right .rightShang .first-line .second-line{
    color: silver;
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 2px;
}
.bigBox .right .rightShang .first-line .signin-btn {
    border-radius: 4px;
    height: 36px;
    width: 74px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(30,128,255,.3);
    background-color: rgba(30,128,255,.05);
}
.bigBox .right .rightShang .first-line .signin-btn .btn-text{
    color: #1e80ff;
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    }


.bigBox .right .rightZhong {
    height: 90px;
    width: 263px;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
}
.bigBox .right .rightZhong img{
    margin-right: 16px;
    margin-left: 5px;
    width: 4rem;
    height: 4rem;
    border: 2px solid white;
    box-sizing: border-box;
}
.bigBox .right .rightZhong .headline{
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #252933;
}
.bigBox .right .rightZhong .desc{
    margin-top: 0.33rem;
    font-size: 13px;
    line-height: 22px;
    color:#8a919f;
}













.rightXia {
    background-color: white;
    height: 284px;
    width: 260px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    border-radius: 2px;
    
    font-size: 1.16rem;
    line-height: 1.29;
    border-radius: 4px;
    color: var(--juejin-font-1);
}
.rightXia .link-list {
   padding: 1rem 0;
}
.rightXia .link-list .link{
    display: flex;
    align-items: center;
    padding: 0.66rem 1rem;
    height: 100%;
}
.rightXia .link-list .link img {
   width: 2rem;
    margin-right: 0.8rem;
}
.rightXia .link-list .link .title {
    font-size: 1.1rem;
    line-height: 1;
    color: black;
}
.bigBox .right .rightXia li {
    height: 52px;
    width: 260px;
    display: flex;
    flex-direction: column; 
}





.foot {
  height: 136px;
  width: 246px;
  
}
.foot .more-list {
  font-size: 0.7rem;
  line-height: 1.6;
  color: #9aa3ab;
  display: flex;
  justify-content: space-between;
  
}
.foot .more-list .item {
  float: left;
  margin-bottom: 8px;
}






/* 基础设置 */
body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td{
    margin: 0;
    padding: 0;
}

ul,ol {
    list-style: none;
}

img {
    /* 底部留白 */
    display: block;
	border:0;
}

b,strong {
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6 {
    /* 父元素字号的百分比 */
    font-size: 100%;
    font-weight: normal;
}

i,em {
    /* 不倾斜 */
    font-style: normal;
}

u,ins,s,del {
    /* 去掉中划线和下划线 */
    text-decoration: none;
}

table {
    border: 1px solid #999;
    /* 相当于是cellspacing */
    border-spacing: 0;
    /* 1px边框 */
    border-collapse: collapse;
}

td,th {
    border: 1px solid #999;
}

input,button {
    /* 去掉轮廓线 */
    outline: none;
    border:none;
}

/* 风格设置 */
body {
    font: 12px/1.5 "Microsoft YaHei", Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif;
    color: #333;
}

a {
    text-decoration: none;
    color: #666;
}

a:hover {
    color:#2c729d;
    text-decoration: none;
}

.leftfix {
    float: left;
}

.rightfix {
    float: right;
}

.clearfix::after {
    content: "";
    display: block;
    clear: both;
}

</style>
