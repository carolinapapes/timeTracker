"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./db"));
// Insert sample tasks
const seedTasks = () => {
    const tasks = [
        { name: 'Learn TypeScript', assigned_minutes: 120 },
        { name: 'Build UI', assigned_minutes: 90 },
        { name: 'Write documentation', assigned_minutes: 60 }
    ];
    tasks.forEach(task => {
        db_1.default.run('INSERT INTO tasks (name, assigned_minutes) VALUES (?, ?)', [task.name, task.assigned_minutes], function (err) {
            if (err) {
                console.error(`❌ Failed to insert task "${task.name}":`, err.message);
            }
            else {
                console.log(`✅ Task "${task.name}" inserted with ID ${this.lastID}`);
            }
        });
    });
};
// Optional: Insert some logs
const seedLogs = () => {
    const logs = [
        { task_id: 1, minutes_spent: 30, notes: 'Initial setup' },
        { task_id: 1, minutes_spent: 45, notes: 'Watching tutorials' },
        { task_id: 2, minutes_spent: 20, notes: 'Wireframes' }
    ];
    logs.forEach(log => {
        db_1.default.run('INSERT INTO logs (task_id, minutes_spent, notes) VALUES (?, ?, ?)', [log.task_id, log.minutes_spent, log.notes], function (err) {
            if (err) {
                console.error(`❌ Failed to insert log:`, err.message);
            }
            else {
                console.log(`✅ Log inserted with ID ${this.lastID}`);
            }
        });
    });
};
// Run seeds
seedTasks();
setTimeout(seedLogs, 100); // Small delay to allow tasks to insert first
