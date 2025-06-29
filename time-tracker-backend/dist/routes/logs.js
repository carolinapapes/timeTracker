"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("../db"));
const router = (0, express_1.Router)();
// GET /logs
router.get('/', (req, res) => {
    db_1.default.all('SELECT * FROM logs', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});
// POST /logs
router.post('/', (req, res) => {
    const { task_id, start_time, end_time } = req.body;
    if (!task_id || !start_time || !end_time) {
        return void res.status(400).json({ error: 'task_id, start_time, and end_time are required' });
    }
    db_1.default.run('INSERT INTO logs (task_id, start_time, end_time) VALUES (?, ?, ?)', [task_id, start_time, end_time], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, task_id, start_time, end_time });
    });
});
