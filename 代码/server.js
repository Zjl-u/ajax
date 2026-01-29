// 1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文的封装
// response是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头   设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*')

    // 设置响应
    response.send('HELLO AJAX')
})

// 可以接受任意类型的请求
app.all('/server', (request, response) => {
    // 设置响应头   设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 响应一个数据
    const data = {
        name: 'cc'
    }
    // 对对象进行字符串转换
    let str = JSON.stringify(data)
    // 设置响应
    response.send(str)
})

// JSON响应
app.all('/json-server', (request, response) => {
    // 设置响应头   设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 响应一个数据
    const data = {
        name: 'cc'
    }
    // 对对象进行字符串转换
    let str = JSON.stringify(data)
    // 设置响应
    response.send(str)
})

// 针对IE缓存
app.get('/ie', (request, response) => {
    // 设置响应头   设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应
    response.send('hello ie')
})

// 延时响应
app.all('/delay', (request, response) => {
    // 设置响应头   设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {
        // 设置响应
        response.send('hello 延时响应')
    }, 3000)
})

// jQuery服务
app.all('/jquery-server', (request, response) => {
    // 设置响应头   设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*')
    const data = { name: 'cc' }
    // response.send('hello jQuery AJAX')
    response.send(JSON.stringify(data))
})

// axios服务
app.all('/axios-server', (request, response) => {
    // 设置响应头   设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    const data = { name: 'cc' }
    response.send(JSON.stringify(data))
})

// fetch服务
app.all('/fetch-server', (request, response) => {
    // 设置响应头   设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    const data = { name: 'cc' }
    response.send(JSON.stringify(data))
})

// jsonp服务
app.all('/jsonp-server', (request, response) => {
    // response.send('console.log("jsonp - server hello")')
    const data = {
        name: 'cc'
    }
    // 将数据转化为字符串
    let str = JSON.stringify(data)
    // 返回结束
    response.end(`handle(${str})`)
})

// 用户名检测是否存在
app.all('/check-username', (request, response) => {
    // response.send('console.log("jsonp - server hello")')
    const data = {
        exist: 1,
        msg: '用户名已存在'
    }
    // 将数据转化为字符串
    let str = JSON.stringify(data)
    // 返回结束
    response.end(`handle(${str})`)
})

// 用户名检测是否存在
app.all('/jquery-jsonp-server', (request, response) => {
    // response.send('console.log("jsonp - server hello")')
    const data = {
        name: 'cc',
        city: ['西安', '泰安']
    }
    // 将数据转化为字符串
    let str = JSON.stringify(data)
    // 接收callback参数
    let cb = request.query.callback

    // 返回结束
    response.end(`${cb}(${str})`)
})

app.all('/cors-server', (request, response) => {
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    response.send('hello CORS')
})

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中....");
});