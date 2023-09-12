import { createRouter, createWebHashHistory } from "vue-router";
import BasicLayout from "../layouts/basicLayout/BasicLayout.vue";
import Home from "@/pages/home/Home.vue";
import Foo from "@/pages/foo/Foo.vue";
import Bar from "@/pages/home/pages/bar/Bar.vue";

const routes = [
  { path: "/", redirect: { name: "home" } },
  {
    path: "/nav/",
    name: "nav",
    component: BasicLayout,
    children: [
      {
        path: "home",
        name: "home",
        component: Home,
        children: [
          {
            path: "bar",
            name: "bar",
            component: Bar,
          },
        ],
      },
      {
        path: "foo",
        name: "foo",
        component: Foo,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
