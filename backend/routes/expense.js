const express = require('express');
const Expense = require('../models/expense');
const router = express.Router();

router.post('/', async (req, res) => {
    const { description, amount, category, date } = req.body;
    const userId = req.user.id;

    try {
        const newExpense = new Expense({ userId, description, amount, category, date });
        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.user.id });
        res.json(expenses);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { description, amount, category, date } = req.body;

    try {
        const updatedExpense = await Expense.findByIdAndUpdate(id, { description, amount, category, date }, { new: true });
        res.json(updatedExpense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.json({ message: 'Expense deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
