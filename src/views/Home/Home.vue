<template>
  <div>
    <Headers @event1="change($event)"></Headers>
    <Shanghai v-show="bool"></Shanghai>
    <Changzhou v-show="bool1"></Changzhou>
    <Footer></Footer>
  </div>
</template>
<script>
import Headers from "../../components/Headers/index";
import Footer from "../../components/Footer/Footer";
import Shanghai from "../../components/Shanghai/Shanghai";
import Changzhou from "../../components/Changzhou/Changzhou";
export default {
  components: {
    Footer,
    Headers,
    Shanghai,
    Changzhou,
  },
  data() {
    return {
      addresss: '',
      bool:true,
      bool1:false
    };
  },
  methods: {
    change(data) {
      this.addresss = data;
      console.log(data);
      if(this.addresss=="上海"){
          this.bool=true,
          this.bool1=false
      }else{
         this.bool=false,
          this.bool1=true 
      }
    },
  },
};
</script>