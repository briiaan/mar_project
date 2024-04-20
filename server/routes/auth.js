import express from 'express';
const router = express.Router();

const {
    signUp,
    login
} = require('../controllers/authentication');

router.route('/signup').post(signUp);
router.route('/login').post(login);

module.exports = router;