const { transporter } = require('../config/mailer');
const userService = require('../services/userService');

const createUserController = async (req, res) => {
    try {
        const status = await userService.createUserDBService(req.body);
        if(status) {
            console.log(req.body, status)
            await transporter.sendMail({
                from: '"Successfully user registered 👻" <diegopanchomales@outlook.com>', // sender address
                to: req.body.email, // list of receivers
                subject: "Register", // Subject line
                text: "User Registered successfully", // plain text body
                html: `<b>Hello ${req.body.firstName}, Welcome to test project</b>`, // html body
              });
            res.send({ 
                status: true,
                body: "User created successfuly"
             });
        } else {
            res.send({
                status: false,
                body: "Error to create new user"
            })
        }
    } catch(error) {
        res.send({ 
            status: false, 
            body: error.msg 
        })
    }
}

const loginUserController = async (req, res) => {
    // let result = null;

    try {
        console.log(req.body);
        const result = await userService.loginuserDBService(req.body);
        console.log(result);
        if(result.status) {
            res.send({ 
                status: true,
                body: result.msg
            });
        } else {
            res.send({ 
                status: false,
                body: result.msg
            });
        }
    } catch(error) {
        console.log(error)
        res.send({
            status: false, 
            body: error.msg 
        })
    }
}

const uploadImageController = async (req, res) => {
    // let result = null;

    try {
        console.log(req.body);
        res.send({ 
            status: true, 
            body: "Uploaded!"
        })
    } catch(error) {
        console.log(error)
        res.send({
            status: false, 
            body: error.msg 
        })
    }
}

module.exports = { createUserController, loginUserController, uploadImageController };