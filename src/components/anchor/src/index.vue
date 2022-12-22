<template>
  <div class="anchor">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Anchor",
  props: {
    hash: Boolean,
    container: {
      type: String,
      default: "body",
    },
  },
  provide() {
    return {
      anchor: this,
    };
  },
  mounted() {
    document
      .querySelector(this.container)
      .addEventListener("scroll", this.scrollEvent);
  },
  methods: {
    scrollEvent() {
      requestAnimationFrame(() => {});
    },
    isSupport() {
      if (!window.MutationObserver) {
        throw new Error("你的浏览器不支持MutationObserver api");
      }
    },
  },
  beforeUnmount() {
    document
      .querySelector(this.container)
      .removeEventListener("scroll", this.scrollEvent);
  },
};
</script>
