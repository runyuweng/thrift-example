# Thrift上手
[英文 README](http://example.net/)  

这个项目用来帮助那些对thrift感兴趣的前端们上手thrift，  
你可以把它认为是一个简易的使用案例或是指南，  
毕竟thrift的官方文档真的很简单...
# 项目架构
![](./thrift.png)
# 主要的文件结构
```
-|
 |- client                 // 前端
 |                          
 |- middle                 // 中间层
 |  
 |- server                 // 真正的后端
 |
 |- thrift -|              // 存放与thrift相关文件的文件夹
            |
            |- gen-nodejs  // 存放.js文件的文件夹
            |
            |- .thrift     // 存放.thrift文件的文件夹

 // 注意:
 这个项目使用node作为服务端的开发语言，部分代码衍生自官网的实例，但是它比官网的代码更加完整，可以让你了解thrift的完整使用流程。
```

将会被用到的前端框架或前端库:
- 客户端 : vue ( 尝试一下而已，但是使用vue-cli构建项目真的很方便，对vue不熟悉的渎职只需关注 @client/src/App.vue 中的代码即可 )
- 中间层 : koa ( 因为它是一个真的很轻量的nodejs库，作为demo真的是再适合不过了 )
- 服务端 : thrift ( 通常的，这里会使用java等一些稳定高效的后端语言，但是为了方便前端们的阅读也为了方便期间，这里还是使用node )

# 如何使用
- 首先你需要通过 `npm run server` 启动服务端的服务；
- 接下来你需要通过 `npm run middle` 启动中间层的服务；
- 最后你需要 `cd client` 进入client文件夹，并执行 `npm run dev` 来启动客户端；
- 当你在客户端出发事件，你将看到从服务端传回的数据，追踪数据的流向，你将明白thrift的使用方式。
