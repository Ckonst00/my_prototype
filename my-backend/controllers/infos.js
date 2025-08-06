const infoRouter = require('express').Router()
const Info = require('../models/info')
const User = require('../models/user')
const jwt = require('jsonwebtoken')


infoRouter.get('/', async (request, response) => {
    const infos = await Info.find({}).populate('user', { username: 1, name: 1})
    response.json(infos)
})

const getTokenFrom = request => {  const authorization = request.get('authorization')  
    if (authorization && authorization.startsWith('Bearer ')) {    
        return authorization.replace('Bearer ', '')  
    }  return null
}

infoRouter.post('/', async (request, response, next) => {
  const body = request.body

  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET)
  if (!decodedToken.id) {    
    return response.status(401).json({ error: 'token invalid' })  
  }

  const user = await User.findById(decodedToken.id)
  if (!user) {
    return response.status(400).json({ error: 'userId missing or not valid' })
  }

  const info = new Info({
    title: body.title,
    content: body.content,
    user: user._id
  })

  try {
    const savedInfo = await info.save()
    user.infos = user.infos.concat(savedInfo._id)
    await user.save()

    const populatedInfo = await Info.findById(savedInfo._id)
      .populate('user', { username: 1, name: 1 })

    response.status(201).json(populatedInfo)
  } catch (error) {
    if (error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
    }
    next(error)
  }
})


infoRouter.delete('/:id', async (request, response) => {

    try {
        await Info.findByIdAndDelete(request.params.id)
        response.status(204).end()
    } catch (error) {
        if (error.name === 'CastError') {
            return response.status(400).json({ error: 'Malformed ID'})
        }
    }
})

infoRouter.post('/reset', async (request, response) => { // For testing purposes!
    await Info.deleteMany({})                            // Delete this when finished
})

module.exports = infoRouter