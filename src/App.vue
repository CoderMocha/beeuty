<template>
  <div id="app">
    <nav>
      <div class="item" v-for="(item, index) in navigation.list"
      @click="navigation.currentIndex = index">{{ item.symbol }}</div>
    </nav>
    <main>
      <component :is="currentComp"/>
    </main>
  </div>
</template>

<script>
import Button from "./views/Button.vue";
import Tag from "./views/Tag.vue";
import Card from "./views/Card.vue";
import Tabs from "./views/Tabs.vue";

export default {
  name: 'app',
  components: {
    Button,
    Tag,
    Card,
    Tabs,
  },
  data () {
    return {
      navigation: {
        currentIndex: 0,
        list: [
          {
            symbol: 'Button',
          },
          {
            symbol: 'Tag',
          },
          {
            symbol: 'Card',
          },
          {
            symbol: 'Tabs',
          },
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
