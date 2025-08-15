const mongoose = require('mongoose')


const infoSchema = new mongoose.Schema({

  title: { type: String, required: true },
  content: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    },
  },
  {timestamps: true}
)

infoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Info', infoSchema)