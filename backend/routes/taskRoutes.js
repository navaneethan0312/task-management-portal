const express = require('express');
const fs = require('fs');

const router = express.Router();
const FILE = './data/tasks.json';


router.get('/', (req, res) => {
  const tasks = JSON.parse(fs.readFileSync(FILE));
  res.json(tasks);
});


router.post('/', (req, res) => {
  const tasks = JSON.parse(fs.readFileSync(FILE));
  tasks.push(req.body);

  fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));

  res.json({ message: 'Task added' });
});


router.delete('/:id', (req, res) => {
  let tasks = JSON.parse(fs.readFileSync(FILE));

  tasks = tasks.filter(task => task.id != req.params.id);

  fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));

  res.json({ message: 'Task deleted' });
});

module.exports = router;
