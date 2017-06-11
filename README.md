# Thrift demo
This demo is used to help someone who is interested in thrift to get started with it.

You can think of it as a simple tutorial.
# Basic architecture
![](./img/thrift.png)
# Main file structure
```
-|
 |- client               // 前端 （ Front end ）
 |                          
 |- client-server        // 中间层  （ Middle layer ）
 |  
 |- server               // 真正的后端  （ Real backend ）

 // Note:
  This article using node as a server development language,
  part of the code from the official website,
  and then may be simplified so that we better understand.

```
# How to run
- Firstly you should run the server by `npm run start-s`;
- Secondly you should run the node middle server by `npm run start-cs`;
- Lastly you can `cd client` and then `npm start`
- When you trigger event in client, you'll see the log in server terminal.
