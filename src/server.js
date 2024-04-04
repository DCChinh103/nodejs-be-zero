//import các thư viện
const express = require('express') //commonjs || import express
const path = require('path');//path lấy đường dẫn tới thư mục

const app = express() // app express
const port = 8080 //port


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//khai báo  route
app.get('/', (req, res) => {
    res.send('Hello World! vs Do Cong Chinh Code Dao')
})
app.get('/chinhhocit', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})