import express from 'express'

const app = express()

app.listen(3000, () => console.log('app is running on 3000 port'))

app.use(express.static('public'))

export default app

