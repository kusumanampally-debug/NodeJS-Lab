const express = require('express');
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: 'Asha', course: 'CSE' },
    { id: 2, name: 'Ravi', course: 'Data Science' }
];

let nextId = 3;

app.get('/', (req, res) => {
    res.send('Student REST API is running');
});

app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:id', (req, res) => {
    const student = students.find(
        s => s.id === Number(req.params.id)
    );

    if (!student) {
        return res.status(404).json({ message: 'Student not found' });
    }

    res.json(student);
});

app.post('/students', (req, res) => {
    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({
            message: 'name and course are required'
        });
    }

    const student = { id: nextId++, name, course };
    students.push(student);

    res.status(201).json(student);
});

app.put('/students/:id', (req, res) => {
    const student = students.find(
        s => s.id === Number(req.params.id)
    );

    if (!student) {
        return res.status(404).json({ message: 'Student not found' });
    }

    const { name, course } = req.body;

    if (name) student.name = name;
    if (course) student.course = course;

    res.json(student);
});

app.delete('/students/:id', (req, res) => {
    const index = students.findIndex(
        s => s.id === Number(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({ message: 'Student not found' });
    }

    const removed = students.splice(index, 1)[0];

    res.json({
        message: 'Student deleted',
        student: removed
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});