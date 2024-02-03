const {UserModel} = require('../models/user')

module.exports.signUp = async(req, res) => {
    try {
        const user = await UserModel.create(req.body);
            res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports.signIn = async(req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email and password using the User model from Sequelize
        const user = await UserModel.findOne({ where: { email, password } });
    
        if (user) {
            // If user found, return the user object
            res.status(200).json(user);
        } else {
            // If user not found, return 404 Not Found status
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
      // Handle any errors
        console.error('Error when signing in, please try latter', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports.getUsers = async(req, res) => {
    try {
        const users = await UserModel.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}