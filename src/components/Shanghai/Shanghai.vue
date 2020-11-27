<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="zhong"
        ><img src="../../assets/img/lunone.png" class="xiao"
      /></van-swipe-item>
      <van-swipe-item 
        ><img src="../../assets/img/luntwo.png" class="xiao"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../../assets/img/lunthree.png" class="xiao"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../../assets/img/lunfour.png" class="xiao"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../../assets/img/lunfive.png" class="xiao"
      /></van-swipe-item>
    </van-swipe>
    <p class="duozi">
      <van-icon name="success" /><span>严选新鲜优质原料</span><van-icon name="success" /><span>自有冷链配送</span
      ><van-icon name="success" /><span>甄选全球好货</span>
    </p>
  </div>
</template>
<style scoped>
.xiao {
  width: 350px;
}
.my-swipe .van-swipe-item {
  text-align: center;
}
.duozi{
    color: #5bc3c9;
    font-size: 12px;
    text-align: center;
}
.duozi span{
    line-height: 10px;
    margin-right: 15px;
}
.zhong{
    vertical-align: middle;
}
</style>