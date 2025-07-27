const infoRouter = require('express').Router()
const Info = require('../models/info')


infoRouter.get('/', (request, response) => {
    Info.find({}).then((infos) => {
        response.json(infos)
    })
})

infoRouter.post('/', (request, response) => {

    const info = new Info(request.body)
    info.save().then((result) => {
        response.status(201).json(result)
    })
})


module.exports = infoRouter