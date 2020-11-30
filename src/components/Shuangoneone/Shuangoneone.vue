<template>
    <div>
        <van-nav-bar
  title="双11,嗨购3.5折起"
  left-text=""
  right-text=""
  left-arrow
  @click-left="onClickLeft"
/>
<div class="beitu">

</div>
    </div>
</template>
<style scoped>
    .beitu{
        background-image: url("../../assets/img/beitu2.png");
        width: 375px;
        height: 5500px;
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