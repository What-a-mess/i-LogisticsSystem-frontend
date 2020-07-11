# i-LogisticsSystem-frontend

Front end of the i-LogisticsSystem


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

## element-ui
+ 能够直接在模板中进行使用，不再需要import
+ 详见 [组件 | Element](https://element.eleme.cn/#/zh-CN/component/)

## axios
+ 进行了封装，使用时请引入`src/plugins/myaxios`
+ [axios](https://github.com/axios/axios)

## stompjs
+ 是基于STOMP协议的web socket实现, rabbitmq服务端带有stomp插件
+ 进行了封装，使用时请引入`src/plugins/rabbitmq`
+ 示例：
```js
mq.connect('test',frame=>{console.log("msg: "+frame.body),frame=>{console.log("err: "+frame)}})

```

```js
//可关闭的心跳检测
mq.client.heartbeat.outgoing=0;
mq.client.heartbeat.incoming=0;
mq.connect('test',frame=>{
  //处理消息
  
  //...

  //处理完成后返回ack（没完成则不返回）
  frame.ack();
},err=>{
    console.log("err:"+err);
});
```
