"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("../db"));
const router = (0, express_1.Router)();
// GET /tasks
router.get('/', (req, res) => {
    db_1.default.all('SELECT * FROM tasks', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});
// POST /tasks
router.post('/', (req, res) => {
    const { name, assigned_minutes } = req.body;
    if (!name || typeof assigned_minutes !== 'number') {
        return void res.status(400).json({ error: 'Name and assigned_minutes are required' });
    }
    db_1.default.run('INSERT INTO tasks (name, assigned_minutes) VALUES (?, ?)', [name, assigned_minutes], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, name, assigned_minutes });
    });
});
// GET /tasks/:id
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        return void res.status(400).json({ error: 'Invalid task ID' });
    }
    db_1.default.get('SELECT * FROM tasks WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(row);
    });
});
exports.default = router;
