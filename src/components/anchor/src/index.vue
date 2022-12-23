<template>
  <div class="anchor">
    <slot></slot>
  </div>
</template>

<script>
import { getOffsetTop } from "./utils";
export default {
  name: "Anchor",
  props: {
    hash: Boolean,
    container: String,
  },
  data() {
    return {
      offsetTop: 0,
    };
  },
  provide() {
    return {
      anchor: this,
    };
  },
  mounted() {
    this.init();
    this.container
      ? document
          .querySelector(this.container)
          .addEventListener("scroll", this.scrollEvent)
      : window.addEventListener("scroll", this.scrollEvent);
  },
  methods: {
    scrollEvent(ev) {
      requestAnimationFrame(() => {
        this.scrollTop = this.container ? ev.target.scrollTop : window.scrollY;
        console.log(ev, this.scrollTop);
      });
    },
    isSupport() {
      if (!window.MutationObserver) {
        throw new Error("你的浏览器不支持MutationObserver api");
      }
    },
    init() {
      this.offsetTop = this.container
        ? getOffsetTop(document.querySelector(this.container))
        : 0;
    },
  },
  beforeUnmount() {
    this.container
      ? document
          .querySelector(this.container)
          .removeEventListener("scroll", this.scrollEvent)
      : window.removeEventListener("scroll", this.scrollEvent);
  },
};
</script>
