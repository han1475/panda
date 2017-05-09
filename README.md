# Panda

> **介绍:**
> - **Panda:** 自动保存草稿的在线博客写作和展示平台
> - 博客预览地址:[http://blog.xiaojunhan.com](http://blog.xiaojunhan.com)

## 技术栈
- **Panda** 主要使用了`Vue.js`、`Vuex`、`Koa@1`和`MongoDB`等框架和技术。
- 架构：采用前后端分离、restful架构。项目主要包含三个子项目：
  - server 服务端 Node.js的Koa@2实现的RESTful API服务
  - client 前端 博客的前端，评论系统用的是[畅言](https://changyan.kuaizhan.com/)
  - admin  前端 博客管理平台的前端，使用markdown语法，预览和编写同步进行，带有自动保存功能，写作时可以保存草稿，完成后发布才会显示在博客中.

## server

> **技术栈:**
> - 基于RESTful API的后端服务.
> - nodejs的话采用Koa.js框架(koa@1)，数据库用了MongoDB。
> - 登录这块的话用了[jwt](https://jwt.io/introduction/).

生产环境下可在可在server/configs目录下增加private.js文件,增加私有配置.

**因为使用了许多es6/7 新语法,所以请使用6.x版本node**

### npm command

```
# install dependencies
npm install

# 开发
# 带热重载，跑在本地3000端口
npm run dev-server

# 部署
npm run build-server


```

## client

> **技术栈**
> - 博客呈现页面，基于vue(1.0),使用[vue-router](https://github.com/vuejs/vue-router)
> - 前后端通信用的[fetch](https://www.npmjs.com/package/whatwg-fetch)
> - 评论系统用的是[畅言](https://changyan.kuaizhan.com/)
> - 语法和高亮使用[marked](https://github.com/chjj/marked)和[highlight](https://github.com/isagalaev/highlight.js)
> - 样式使用[stylus](http://stylus-lang.com/)
### npm command

```
# install dependencies
npm install

# 开发,跑在本地8080端口
npm run dev-client

# 打包
npm run build-client


```


## admin

**初始用户名:admin,初始密码:password**

> **技术栈**
> - 博客管理系统，也是前后端完全分离的。采用markdown语法
> - 采用[Vue](http://vuejs.org.cn) && [vuex](https://github.com/vuejs/vuex) && [vue-router](https://github.com/vuejs/vue-router)
> - 编辑器采用的是[SimpleMDE](https://github.com/NextStepWebs/simplemde-markdown-editor)，支持大量快捷键。

快捷键 | Action
:------- | :-----
*Cmd-'* | "toggleBlockquote"
*Cmd-B* | "toggleBold"
*Cmd-E* | "cleanBlock"
*Cmd-H* | "toggleHeadingSmaller"
*Cmd-I* | "toggleItalic"
*Cmd-K* | "drawLink"
*Cmd-L* | "toggleUnorderedList"
*Cmd-P* | "togglePreview"
*Cmd-Alt-C* | "toggleCodeBlock"
*Cmd-Alt-I* | "drawImage"
*Cmd-Alt-L* | "toggleOrderedList"
*Shift-Cmd-H* | "toggleHeadingBigger"
*F9* | "toggleSideBySide"
*F11* | "toggleFullScreen"

### npm command

```
# install dependencies
npm install

# 开发,跑在本地8081端口
npm run dev-admin

# 打包
npm run build-admin

```

## Reference

1. [koa-blog](https://github.com/Ma63d/kov-blog/)   

Thanks for all.

# Todo
- [] 切换技术栈到Vue.js@2.x和Koa.js@2.x
- [] 实现自动更新搜索索引

