const express = require('express')

const app = express()

const port = 6666
app.use(express.json())


app.post('/', (req, res)=>{

    const {cpf} = req.body

    const params =  req.params

    console.log(params)

    console.log(cpf)
    return res.json({message: "hoshigaki kisamirs"})
})

app.listen(port, ()=>{
    console.log("hoshigaki kisame")
})