import {Router, Request, Response} from 'express';
import db from '../db';

const router = Router();

/**
 * @route GET /logs
 * @desc Get all logs
 * @returns 200 - {Array} List of logs
 * @returns 500 - {Object} Error message
 */
router.get('/', (req: Request, res: Response) => {
	db.all('SELECT * FROM logs', [], (err, rows) => {
		if (err) {
			return res.status(500).json({error: err.message});
		}
		res.json(rows);
	});
});

/**
 * @route POST /logs
 * @desc Create a new log entry
 * @body {task_id: number, start_time: string, end_time: string}
 * @returns 201 - {Object} Created log with ID
 * @returns 400 - {Object} Error message if task_id, start_time, or end_time is missing
 * @returns 500 - {Object} Error message if database error occurs
 */
router.post('/', (req: Request, res: Response) => {
	const {task_id, start_time, end_time} = req.body;
	if (!task_id || !start_time || !end_time) {
		return void res.status(400).json({error: 'task_id, start_time, and end_time are required'});
	}
	db.run('INSERT INTO logs (task_id, start_time, end_time) VALUES (?, ?, ?)', [task_id, start_time, end_time], function(err) {
		if (err) {
			return res.status(500).json({error: err.message});
		}
		res.status(201).json({id: this.lastID, task_id, start_time, end_time});
	});
}
);