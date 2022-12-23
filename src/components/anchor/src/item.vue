<template>
  <div class="anchor-item" :class="{ 'is-active': false }">
    <a :href="`#${link}`" @click="handlerClick" class="anchor-item-inner">{{
      text
    }}</a>
    <div class="anchor-group">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { getOffsetTop } from "./utils";
export default {
  name: "AnchorItem",
  props: {
    text: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "#",
    },
  },
  data() {
    return {
      offsetTop: 0,
    };
  },
  inject: ["anchor"],
  mounted() {
    this.init();
  },
  methods: {
    handlerClick(ev) {
      const { hash, container } = this.anchor;
      if (!hash) {
        ev.preventDefault();

        const el = document.querySelector(`#${this.link}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          console.log(rect);
          let target = null;
          if (container === null) {
            target = document.querySelector("body");
          } else {
            target = document.querySelector(container);
          }
          console.log(target.scrollTop);
          target.scrollTo({
            top: rect.top,
            behavior: "smooth",
          });
        }
        return false;
      }
    },
    init() {
      this.offsetTop = getOffsetTop(document.querySelector(`#${this.link}`));
      console.log(this.offsetTop);
    },
  },
};
</script>

<style scoped>
.anchor-item {
  font-size: 14px;
}
.anchor-item-inner {
  color: #333;
}

.is-active .anchor-item-inner {
  color: blue;
}
</style>
