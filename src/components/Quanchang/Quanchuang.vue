<template>
    <div>
        <van-nav-bar
  title="全场包邮专区"
  left-text=""
  right-text=""
  left-arrow
  @click-left="onClickLeft"
/>
<div class="baoyou">
    <img src="../../assets/img/baoyou.png"/>
</div>
   <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
  <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
  <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
  <van-goods-action-button
    type="danger"
    text="立即购买"
    @click="onClickButton"
  />
</van-goods-action>
    </div>
</template>
<style scoped>
  .baoyou img{
      width: 375px;
  }
</style>
<script>
    export default {
  methods: {
    onClickLeft() {
      this.$router.push({
          name:"Home"
      })
    }
  },
};
</script>