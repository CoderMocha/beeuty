<template>
  <div id="app">
    <nav>
      <div class="item" v-for="item in navigation.list">{{ item.symbol }}</div>
    </nav>
    <main>
      <component :is="currentComp"/>
    </main>
<!--    <Button />-->
  </div>
</template>

<script>
import Button from "./views/Button.vue";

export default {
  name: 'app',
  components: {
    Button,
  },
  data () {
    return {
      navigation: {
        currentIndex: 0,
        list: [
          {
            symbol: 'Button',
          }
        ]
      }
    }
  },
  computed: {
    currentComp() {
      return this.navigation.list[this.navigation.currentIndex].symbol;
    }
  }
}
</script>

<style lang="scss">
#app{
  //display: flex;
  nav{
    position: fixed;
    width: 200px;
    height: 100vh;
    overflow: auto;
    border-right: 1px #333 solid;
    background-color: white;
    box-sizing: border-box;
  }
  main{
    padding: 20px 20px 20px 220px;
  }
}
</style>
