const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    date: {
        type: Date,
        default: Date.now
    },
    active: {
        type: String,
        default: 'active',
        required: true,
    }
});

module.exports = mongoose.model('project', ProjectSchema);