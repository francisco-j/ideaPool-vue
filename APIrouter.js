const {Router} = require('express')
// const {authRouter, clientRouter, loanRouter, payDayRouter} = require('./routes')
// const {authentication}  = require('./middleware')

const router = Router()

router.get('/', (req, res) => {
    res.send('hello world, this is API')
})
// router.use('/auth', authRouter)
// router.use('/clients', authentication, clientRouter)
// router.use('/loans', authentication, loanRouter)
// router.use('/pay-days', authentication, payDayRouter)

module.exports = router
