import { createRouter, createWebHistory } from "vue-router";
import BigKeyboardView from "../views/BigKeyboardView.vue";
import SmallKeyboardView from "../views/SmallKeyboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/big-keyboard",
      name: "bigkeyboard",
      component: BigKeyboardView,
    },
    {
      path: "/small-keyboard",
      name: "smallkeyboard",
      component: SmallKeyboardView,
    },
  ],
});

export default router;
