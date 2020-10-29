# vue-router-practice

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Vue Router路由管理器
// 原理分析

1、作为一个插件存在，实现VueRouter类和install方法

2、实现两个全局组件，router-view用于显示匹配组件内容，router-link用于跳转

3、监控url变化，监听hashchange或popstate事件

4、响应最新url,创建一个响应式的属性current,当它改变时获取对应组件并显示


