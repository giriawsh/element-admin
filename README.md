# element-admin

## 爬坑记录
1. Vue cli创建后首页空白 => 有可能使用了Vue3.0版本，可以退回2.0或者npm uninstall element-ui然后装上element适配3.0版本：vue add element-plus
2. @submit.native.prevent报错 => .native标签已被弃用，直接写@submit.prevent
3. vue.prototype.$http报错 => Vue3.0中已经没有Vue.prototype了。现在使用app.config.globalProperties.$http=xxx;（不过好像写$axios比较多）
4. post请求返回状态码500 => 没开mongodb（打开terminal输入mongod）或者检查下前后端的api路径是否一致，有无打错
5. element列表数据更新延迟（提交保存后刷新才能看到） => 将this.$router.push('/articles/index')放到this.$http.put/post函数内部，避免异步延迟更新

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
