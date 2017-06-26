# Thrift demo
This demo is used to help FE who is interested in thrift to get started with it.

You can think of it as a simple tutorial.
# Basic architecture
![](./thrift.png)
# Main file structure
```
-|
 |- client                 // 前端 （ Front end ）
 |                          
 |- middle                 // 中间层  （ Middle layer ）
 |  
 |- server                 // 真正的后端  （ Real backend ）
 |
 |- thrift -|              // 存放thrift文件
            |
            |- gen-nodejs  // 存放idle生成的js文件
            |
            |- .thrift     // thrift原文件

 // Note:
  This article using node as a server development language,
  part of the code from the official website,
  and then may be simplified so that we better understand.

```

Front end frames or library will be used:
- client : vue ( Just want to have a try... )
- middle : koa ( Because it's a very lightweight Library )
- server : thrift ( Normally, Java or some other back-end language should be used, but for convenience, use KOA... )

# How to run
- Firstly you should run the server by `npm run server`;
- Secondly you should run the node middle server by `npm run middle`;
- Lastly you can `cd client` and then `npm start`
- When you trigger event in client, you'll see the log in server terminal.
