<template>
  <div>
    <van-row>
      <van-col span="5">
        <van-icon name="location-o" size="1.8rem" class="ding" />
        <van-popup v-model="show">
          <p style="text-align: center">
            <span class="xiabian">请选择城市</span>
          </p>
          <ul class="xuanzhe">
            <li>
              <span @click="shanghai">上海</span>&nbsp;<van-icon
                class="tubiaose"
                v-show="bool"
                name="success"
              />
            </li>
            <li>
              <span @click="changzhou">常州</span>&nbsp;<van-icon
                class="tubiaose"
                v-show="bool1"
                name="success"
              />
            </li>
            <li><span>苏州</span></li>

            <li><span>杭州</span></li>
            <li><span>宁波</span></li>
            <li><span>无锡</span></li>

            <li><span>南京</span></li>
            <li><span>北京</span></li>
            <li><span>天津</span></li>

            <li><span>绍兴</span></li>
            <li><span>重庆</span></li>
            <li><span>成都</span></li>

            <li><span>台州</span></li>
            <li><span>嘉兴</span></li>
          </ul>
        </van-popup>
        <span class="fonts" @click="showPopup">{{ address }}</span></van-col
      >
      <van-col span="16"
        ><van-search v-model="value" placeholder="请输入搜索关键词"
      /></van-col>
      <van-col span="3"
        ><van-icon name="service-o" size="1.8rem" class="kefu"
      /></van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      address: "上海",
      value: "",
      show: false,
      bool: true,
      bool1: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    shanghai() {
      this.show = false;
      this.address = "上海";
      this.bool = true;
      this.bool1 = false;
      this.$emit('event1', this.address)
    },
    changzhou() {
      this.show = false;
      this.address = "常州";
      this.bool = false;
      this.bool1 = true;
      this.$emit('event1', this.address)
    },
  },
};
</script>
<style scoped>
.ding {
  margin-top: 0.9rem;
  vertical-align: middle;
  float: left;
  margin-left: 1rem;
}
.kefu {
  margin-top: 0.9rem;
}
.fonts {
  font-size: 0.9rem;
  margin-top: 1rem;
  float: right;
  margin-right: 0.2rem;
}
.xuanzhe {
  width: 300px;
  padding: 20px;
}
.xuanzhe li {
  display: inline-block;
  width: 100px;
  text-align: center;
  margin-top: 20px;
}
.xiabian {
  padding: 5px;
  border-bottom: 1px solid black;
}
.tubiaose {
  color: #5bc3c9;
}
</style>
