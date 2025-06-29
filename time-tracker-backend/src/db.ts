import sqlite3 from 'sqlite3';
import { Database } from 'sqlite3';

sqlite3.verbose();

const db: Database = new sqlite3.Database('time-tracker.db', (err) => {
	if (err) {
		console.error('Error opening database ' + err.message);
	} else {
		console.log('Connected to the time-tracker database.');
	}
	}
);

// Create tables if they do not exist
db.serialize(() => {
		db.run(`
		CREATE TABLE IF NOT EXISTS tasks (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT NOT NULL,
		assigned_minutes INTEGER NOT NULL,
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP
		)
	`)

	db.run(`
		CREATE TABLE IF NOT EXISTS logs (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		task_id INTEGER NOT NULL,
		minutes_spent INTEGER NOT NULL,
		notes TEXT,
		timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
		FOREIGN KEY (task_id) REFERENCES tasks(id)
		)
	`)
	}
);

export default db;
