const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User')
const Project = require('../models/Project')



// @route   GET api/projects
// @desc    Get all projects
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const projects = await Project.find({}).sort({date: -1});
        res.json(projects);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/projects
// @desc    Add new project
// @access  Private
router.post('/', [auth, [
    check('title', 'Title is required').not().isEmpty(),
    check('desc', 'Description is required').not().isEmpty(),
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, desc } = req.body;

    try {
        const newProject = new Project({
            title,
            desc,
            postedBy: req.user.id
        })

        const project = await newProject.save();

        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

// @route   PUT api/projects/:id
// @desc    Update project
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const { title, desc } = req.body;

    // Build Project Object
    const projectFields = {};
    if(title) projectFields.title = title;
    if(desc) projectFields.desc = desc;

    try {
        let project = await Project.findById(req.params.id);

        if(!project) return res.status(404).json({ msg: 'Contact not found' });

        // Make sure user owns project
        if(project.postedBy.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not Authorized' });
        }

        project = await Project.findByIdAndUpdate(req.params.id,
            { $set: projectFields },
            { new: true}
        );

        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }

});

// @route   DELETE api/projects/:id
// @desc    Delete project
// @access  Private
router.delete('/:id', auth, async (req, res) => {


    try {
        let project = await Project.findById(req.params.id);

        if(!project) return res.status(404).json({ msg: 'Contact not found' });

        // Make sure user owns project
        if(project.postedBy.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not Authorized' });
        }

        await Project.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Contact removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

module.exports = router;