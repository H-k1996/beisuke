<template>
  <div>
      
    <van-swipe class="my-swipe topju" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        ><img src="../../assets/img/lunone.png" class="xiao" @click="tishi()"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../../assets/img/luntwo.png" class="xiao"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../../assets/img/lunthree.png" class="xiao"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../../assets/img/lunfour.png" @click="shuangoneone()" class="xiao"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../../assets/img/lunfive.png" class="xiao" @click="quanchuang()"
      /></van-swipe-item>
    </van-swipe>
    <p class="duozi">
      <van-icon name="success" class="zhong" />&nbsp;<span
        >严选新鲜优质原料</span
      ><van-icon class="zhong" name="success" />&nbsp;<span>自有冷链配送</span
      ><van-icon class="zhong" name="success" />&nbsp;<span>甄选全球好货</span>
    </p>
    <div class="dangao">
      <ul>
        <li>
          <p><img src="../../assets/img/dan1.png" /></p>
          <p>蛋糕</p>
        </li>
        <li>
          <p><img src="../../assets/img/dan2.png" /></p>
          <p>西点</p>
        </li>
        <li>
          <p><img src="../../assets/img/dan3.png" /></p>
          <p>乳品</p>
        </li>
        <li>
          <p><img src="../../assets/img/dan4.png" /></p>
          <p>冰激凌</p>
        </li>
      </ul>
      <ul>
        <li>
          <p><img src="../../assets/img/dan5.png" /></p>
          <p>卡劵悦换</p>
        </li>
        <li>
          <p><img src="../../assets/img/dan6.png" /></p>
          <p>企业试吃</p>
        </li>
        <li>
          <p><img src="../../assets/img/dan7.png" /></p>
          <p>悦换大礼包</p>
        </li>
        <li>
          <p><img src="../../assets/img/dan8.png" /></p>
          <p>素食馆</p>
        </li>
      </ul>
    </div>
    <van-notice-bar
    background="#fff"
  left-icon="volume-o"
  color="#1fb1b8"
  text="贝思客你身边的甜品专家，可在线订购各种口味的生日蛋糕，巧克力蛋糕，酸奶蛋糕。慕斯蛋糕，婚庆蛋糕等，商务蛋糕，线上快速订购，专人配送上门"
/>
 <div class="gou">
     <li><img src="../../assets/img/gou1.png"/></li>
     <li><img src="../../assets/img/gou2.png"/></li>
     <li><img src="../../assets/img/gou3.png"/></li>
     <li><img src="../../assets/img/gou4.png"/></li>
 </div>
 <div class="yikou">
   <img src="../../assets/img/yikou1.png"/>
 </div>
 <div class="yikou">
   <img src="../../assets/img/yikou2.png"/>
 </div>
 <div class="yikou daxiao">
   <img src="../../assets/img/yikou3.png"/>
 </div>
  </div>
</template>
<style scoped>
.xiao {
  width: 100%;
}
.my-swipe .van-swipe-item {
  text-align: center;
}
.duozi {
  color: #5bc3c9;
  font-size: 12px;
  text-align: center;
}
.duozi span {
  line-height: 10px;
  margin-right: 15px;
}
.zhong {
  vertical-align: middle;
}
.dangao li {
  width: 25%;
  text-align: center;
  display: inline-block;
  font-size: 12px;
}
.dangao li img {
  width: 75px;
}
.topju{
    margin-top: 60px;
}
.gou{
  margin-top: 10px;
}
.gou li{
  display: inline-block;
}
.gou li:nth-of-type(1){
  margin-left: 15px;
}
.gou li:nth-of-type(2){
  margin-left: 5px;
}
.gou li:nth-of-type(3){
  margin-left: 15px;
}
.gou li:nth-of-type(4){
  margin-left: 5px;
}
.gou li img{
    width: 170px;
}
.yikou img{
  width: 375px;
  margin-top: 30px;
}
.daxiao{
  height: 250px;
}
</style>
<script>
export default {
  methods:{
    tishi(){
      this.$toast('未安装微信');
    },
    shuangoneone(){
      this.$router.push({
        name:'shuangoneone'
      })
    },
    quanchuang(){
      this.$router.push({
        name:'quanchuang'
      })
    }
  }
}
</script>