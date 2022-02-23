const mongoose = require('mongoose');

const CONNECTION_URL = 'mongodb+srv://yassin:yasso15979@cluster0.jckdm.mongodb.net/Memories?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Succeeded to connect to MongoDB')
    })
    .catch((err) => {
        console.log(err.message)
    })
// mongoose.set('useFindAndModify',false)