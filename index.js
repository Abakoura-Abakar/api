import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import routes from './src/routes/crmRoutes'


//creation du serveur
const app = express()
const PORT = process.env.PORT || 4600

//connection mongoose

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/CRMdb", { useNewUrlParser: true, useUnifiedTopology: true})


//bodyParser
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

routes(app)

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.send(`Serveur web node et express demarer sur le port ${PORT}`)
})

app.listen(PORT, ()=>{
    console.log(`serveur node et express demarer sur le port ${PORT}`)
})