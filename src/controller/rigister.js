const Register = require('../model/Register')

module.exports.newRegister = async (req, res) => {
    const newUser = await Register.create(req.body);

    res.status(201).json({
        staus: 'Success',
        newUser
    })
}
