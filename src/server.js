//import các thư viện
require('dotenv').config();
const express = require('express') //commonjs || import express
const configviewEngine = require('./config/viewEngine'); // import hàm từ file viewEngine qua
const WebRouter = require('./routes/web');
const app = express() // app express
const port = process.env.PORT || 8888; //port || 8888 để đề phòng khi mà port không chạy được sẽ chạy cổng khác để sever không bị chết
const hostname = process.env.HOST_NAME;

// config template engine
configviewEngine(app);

//khai báo route
app.use('/', WebRouter);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})