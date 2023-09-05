import Anchor from "./src/index.vue";
import AnchorItem from "./src/item.vue";
import type { App } from "vue";

export { Anchor, AnchorItem };

export default {
  install: (app: App) => {
    app.component(Anchor.name, Anchor);
    app.component(AnchorItem.name, AnchorItem);
  },
};
