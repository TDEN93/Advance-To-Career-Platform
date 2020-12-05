const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User')

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', [
    check('firstname', 'First name is required').not().isEmpty(),
    check('lastname', 'Last name is required').not().isEmpty(),
    check('gender', 'Gender is required').not().isEmpty(),
    check('age', 'Age is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('usertype', 'Please select what you are').not().isEmpty(),
    check('password', 'Please enter a password with 6 or more characters').isLength({
        min: 6
    })
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, lastname, gender, age, email, usertype, password } = req.body;

    try {
        let user = await User.findOne({ email: email });

        if(user) {
            return res.status(400).json({ msg: "User already exists" });
        }

        user = new User({
            firstname: firstname,
            lastname: lastname,
            gender: gender,
            age: age,
            email: email,
            usertype: usertype,
            password: password
        });

        // Create Salt
        const salt = await bcrypt.genSalt(10);

        // Encrypt User Password
        user.password = await bcrypt.hash(password, salt);

        // Save to database
        await user.save();

        // Create and sign payload using JWT
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (err, token) => {
            if(err) throw err;
            res.json({ token });
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;