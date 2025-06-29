import express from 'express'
import tasksRouter from './routes/tasks'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello, Time Tracker Backend!')
})

app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
