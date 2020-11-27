<template>
    <div id="app">
        <div id="divs">
            <router-link tag="div" to="/Home"><van-icon name="wap-home-o" class="item-icon" size="2rem" /><br><span>首页</span>
            </router-link>
            <router-link tag="div" to="/Classify"><van-icon name="apps-o" size="2rem"/><br><span>首页</span></router-link>
            <router-link tag="div" to="/Shopping"><van-icon name="cart-o" size="2rem"/><br><span>首页</span></router-link>
            <router-link tag="div" to="/My"><van-icon name="friends-o" size="2rem" /><br><span>首页</span></router-link>
        </div>
    </div>
</template>
<style scoped>

#app{
    width: 100%;
  height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
}
#divs{
    display: flex;
 text-align: center;
  align-items: center;
}
#divs div{
    font-size: 0.7rem;
    color: #9c9c9c;
    flex: 1;
    text-align: center;

}

#app div.router-link-active {
  color: #5bc3c9;
}
</style>