//import các thư viện
const express = require('express') //commonjs || import express
const path = require('path');//path lấy đường dẫn tới thư mục
require('dotenv').config();

const app = express() // app express
const port = process.env.PORT || 8888; //port || 8888 để đề phòng khi mà port không chạy được sẽ chạy cổng khác để sever không bị chết
const hostname = process.env.HOST_NAME;

//config template engine 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//config static files
app.use(express.static(path.join(__dirname, 'public'))) // các file trong thư mục public bao gồm css,image,js động
//khi config thư mục publicc khi sử dụng ở view web sẽ tự hiểu là lấy các thư mục trong upublic
//khai báo  route
app.get('/', (req, res) => {
    res.send('Hello World! vs Do Cong Chinh Code Dao okosksks')
})
app.get('/chinhhocit', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})