const express = require('express');
const router = express.Router();

//khai báo  route
router.get('/', (req, res) => {
    res.send('Hello World! vs Do Cong Chinh Code Dao okosksks')
})
router.get('/chinhhocit', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router;