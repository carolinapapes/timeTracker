import {Router, Request, Response} from 'express';
import db from '../db';

const router = Router();



/**
 * @route GET /tasks
 * @desc Get all tasks
 * @returns 200 - {Array} List of tasks
 * @returns 500 - {Object} Error message
 */
router.get('/', (req: Request, res: Response) => {
	db.all('SELECT * FROM tasks', [], (err, rows) => {
		if (err) {
			return res.status(500).json({error: err.message});
		}
		res.json(rows);
	});
});

/**
 * @route POST /tasks
 * @desc Create a new task
 * @body {name: string, assigned_minutes: number}
 * @returns 201 - {Object} Created task with ID
 * @returns 400 - {Object} Error message if name or assigned_minutes is missing
 * @returns 500 - {Object} Error message if database error occurs
 */
router.post('/', (req: Request, res: Response) => {
	const {name, assigned_minutes} = req.body;
	if (!name || typeof assigned_minutes !== 'number') {
		return void res.status(400).json({error: 'Name and assigned_minutes are required'});
	}
	db.run('INSERT INTO tasks (name, assigned_minutes) VALUES (?, ?)', [name, assigned_minutes], function(err) {
		if (err) {
			return res.status(500).json({error: err.message});
		}
		res.status(201).json({id: this.lastID, name, assigned_minutes});
	});
});

/**
 * @route GET /tasks/:id
 * @desc Get a task by ID
 * @param {number} id - Task ID
 * @returns 200 - {Object} Task details
 * @returns 400 - {Object} Error message if ID is invalid
 * @returns 404 - {Object} Error message if task not found
 * @returns 500 - {Object} Error message if database error occurs
 */
router.get('/:id', (req: Request, res: Response) => {
	const id = parseInt(req.params.id, 10);
	if (isNaN(id)) {
		return void res.status(400).json({error: 'Invalid task ID'});
	}

	db.get('SELECT * FROM tasks WHERE id = ?', [id], (err, row) => {
		if (err) {
			return res.status(500).json({error: err.message});
		}
		if (!row) {
			return res.status(404).json({error: 'Task not found'});
		}
		res.json(row);
	});
});

export default router;