# single-spa

地址：`https://single-spa.js.org/`

## react

- react-router-dom v6路由不行
- 需要导出react, react-dom,react-router-dom的cdn地址


## vue

- 不需要导出任何东西
- 路由上加路径
- 添加vue.config.js文件，修改端口，handers


# qiankun

- 基于single-spa
- 安装 `npm i qiankun -S`
- 注册微应用`import { registerMicroApps, start } from 'qiankun'`

```js
registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/app-react',
  },
  // 启动 qiankun
start();
```

构建微应用地址： `https://qiankun.umijs.org/`

## 样式隔离

```js
start({
  sandbox: {
    //experimentalStyleIsolation: true,//加前缀
    strictStyleIsolation: true,//严格模式
  }
});
```

**完全隔离用影子**

