import { registerApplication, start } from "single-spa";

//添加微前端模块

//默认应用
// registerApplication({
//   name: "@single-spa/welcome", //模块名称
//   app: () =>
//     //页面加载路径
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"], //页面显示路由，模糊查询
// });


//重新默认
registerApplication(
  "@single-spa/welcome",
  () => System.import("https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"),
  location => location.pathname === "/"
);



//react模块
registerApplication({
  name: "@study/react",
  app: () => System.import("@study/react"),
  activeWhen: ["/react"]
});

//vue模块
registerApplication({
  name: "@study/vue",
  app: () => System.import("@study/vue"),
  activeWhen: ["/vue"]
});
// registerApplication({
//   name: "@study/navbar",
//   app: () => System.import("@study/navbar"),
//   activeWhen: ["/"]
// });

start({
  //是否可以使用history更改触发
  urlRerouteOnly: true,
});
