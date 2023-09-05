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

<script lang="ts">
import { inject } from "vue";
import { getOffsetTop, type AnchorContainer } from "./utils";
export default {
  name: "IvyAnchorItem",
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
  setup(props) {
    const anchorContainer = inject("anchorContainer") as AnchorContainer;
    const hash = inject("hash");
    const target = document.querySelector(`#${props.link}`);
    const offsetTop: number = getOffsetTop(
      target as HTMLElement,
      anchorContainer as AnchorContainer
    );

    const handlerClick = (ev: any) => {
      if (!hash) {
        ev.preventDefault();

        const el = document.querySelector(`#${props.link}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          anchorContainer.scrollTo({
            top: rect.top,
            behavior: "smooth",
          });
        }
        return false;
      }
    };
    return {
      handlerClick,
      offsetTop,
    };
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
