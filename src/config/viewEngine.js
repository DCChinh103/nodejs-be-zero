const path = require('path');
const express = require('express');
const configviewEngine = (app) => {
    //config template engine 
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')

    //config static files
    app.use(express.static(path.join('./src', 'public'))) // các file trong thư mục public bao gồm css,image,js động
    //khi config thư mục publicc khi sử dụng ở view web sẽ tự hiểu là lấy các thư mục trong upublic
}
module.exports = configviewEngine;