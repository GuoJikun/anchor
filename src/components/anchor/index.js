import Anchor from "./src/index.vue";
import AnchorItem from "./src/item.vue";

export { Anchor, AnchorItem };

export default {
  install: (app) => {
    app.component(Anchor.name, Anchor);
    app.component(AnchorItem.name, AnchorItem);
  },
};
