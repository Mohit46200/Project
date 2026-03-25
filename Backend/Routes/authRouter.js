const router = require('express').Router()

router
    .get('/test',(req,res) => {
        res.send('test has passed')
    })


module.exports = router