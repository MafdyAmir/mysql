import express from 'express'
const app = express()
const port = 3000
import userRouter from './src/modules/users/user.routes.js'
import productRouter from './src/modules/products/product.routes.js'
app.use(express.json())
app.use('/products',productRouter)
app.use('/users',userRouter)
app.use('*',(req, res ,next)=>{
    return res.json({message:'Not found Routing!'})
} )

app.listen(port, () => console.log(`Example app listening on port ${port}!`));