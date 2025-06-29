import db from './db'

type CountRow = { count: number }

const seedTasks = () => {
  const tasks = [
    { name: 'Learn TypeScript', assigned_minutes: 120 },
    { name: 'Build UI', assigned_minutes: 90 },
    { name: 'Write documentation', assigned_minutes: 60 }
  ]

  tasks.forEach(task => {
    db.run(
      'INSERT INTO tasks (name, assigned_minutes) VALUES (?, ?)',
      [task.name, task.assigned_minutes],
      function (err) {
        if (err) {
          console.error(`❌ Error inserting task "${task.name}":`, err.message)
        } else {
          console.log(`✅ Task "${task.name}" inserted with ID ${this.lastID}`)
        }
      }
    )
  })
}

const seedLogs = () => {
  const logs = [
    { task_id: 1, minutes_spent: 30, notes: 'Intro tutorial' },
    { task_id: 1, minutes_spent: 45, notes: 'Practicing types' },
    { task_id: 2, minutes_spent: 20, notes: 'Building components' },
    { task_id: 3, minutes_spent: 15, notes: 'Outline doc structure' }
  ]

  logs.forEach(log => {
    db.run(
      'INSERT INTO logs (task_id, minutes_spent, notes) VALUES (?, ?, ?)',
      [log.task_id, log.minutes_spent, log.notes],
      function (err) {
        if (err) {
          console.error(`❌ Error inserting log:`, err.message)
        } else {
          console.log(`✅ Log inserted for task ${log.task_id} with ID ${this.lastID}`)
        }
      }
    )
  })
}

db.get('SELECT COUNT(*) as count FROM tasks', [], (err, row: CountRow) => {
  if (err) {
    console.error('❌ Failed to check task count:', err.message)
    return
  }
  if (row.count === 0) {
    console.log('🔄 Seeding tasks...')
    seedTasks()

    setTimeout(() => {
      console.log('🔄 Seeding logs...')
      seedLogs()
    }, 200)
  } else {
    console.log('⚠️ Tasks already seeded. Skipping...')
  }
})
