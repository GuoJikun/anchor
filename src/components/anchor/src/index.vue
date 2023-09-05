<template>
  <div class="anchor">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, provide, reactive, ref } from "vue";
import { Anchor } from "..";
import {
  getOffsetTop,
  getDefaultContainer,
  getAnchorContainer,
  type AnchorContainer,
} from "./utils";

const props = defineProps({
  container: {
    type: HTMLElement,
    default: getDefaultContainer(),
  },
  hash: Boolean,
});

const data = reactive({
  offsetTop: 0,
  scrollTop: 0,
});

const anchorContainer = ref<AnchorContainer>(
  getAnchorContainer(props.container)
);

provide("anchorContainer", anchorContainer);
provide("hash", props.hash);

const scrollEvent = (ev: any) => {
  requestAnimationFrame(() => {
    data.scrollTop = props.container
      ? ev.currentTarget?.scrollTop
      : window.scrollY;
    console.log(ev, data.scrollTop);
  });
};

onMounted(() => {
  anchorContainer.value.addEventListener("scroll", scrollEvent);
});

onBeforeUnmount(() => {
  anchorContainer.value.removeEventListener("scroll", scrollEvent);
});
</script>

<script lang="ts">
export default {
  name: "IvyAnchor",
};
</script>
