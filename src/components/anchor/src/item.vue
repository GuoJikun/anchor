<template>
  <div>
    <a :href="`#${link}`" @click="handlerClick">{{ text }}</a>
    <div class="anchor-group">
      <slot></slot>
    </div>
  </div>
</template>

<script>
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
  inject: ["anchor"],
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
            target = window;
          } else {
            target = document.querySelector(container) || window;
          }
          console.log(target.scrollTop());
          target.scrollTo({
            top: rect.top,
            behavior: "smooth",
          });
        }
        return false;
      }
    },
  },
};
</script>
