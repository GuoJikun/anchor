<script setup>
import { Anchor, AnchorItem } from "./components/anchor/index.js";
</script>

<template>
  <div class="target">
    <div id="item-1" style="height: 60vh">1</div>
    <div id="item-2" style="height: 20vh">2</div>
    <div id="item-3" style="height: 60vh">3</div>
    <div id="item-4" style="height: 60vh">4</div>
    <div id="item-5" style="height: 50vh">5</div>
    <div id="item-6" style="height: 40vh">6</div>

    <Anchor style="position: fixed; top: 10vh; right: 6vw">
      <AnchorItem link="item-1" text="item-1"></AnchorItem>
      <AnchorItem link="item-2" text="item-2"></AnchorItem>
      <AnchorItem link="item-3" text="item-3"></AnchorItem>
      <AnchorItem link="item-4" text="item-4"></AnchorItem>
      <AnchorItem link="item-6" text="item-5"></AnchorItem>
    </Anchor>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
