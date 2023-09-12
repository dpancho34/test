var userModel = require('../models/userSchema');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);
const jwt = require('jsonwebtoken');


const JWT_SECRET = "dieTestDev2023[]pantest&males641988&pancho35"

module.exports.createUserDBService = async (userDetails) => {

    try{

        var userModelData = new userModel();

        userModelData.firstName = userDetails.firstName;
        userModelData.lastName = userDetails.lastName;
        userModelData.email = userDetails.email;
        userModelData.password = userDetails.password;

        var encrypted = encryptor.encrypt(userDetails.password);
        userModelData.password = encrypted;

        const res = await userModelData.save();
        return res;

    } catch(error) {
        console.log(error)
    }
}

module.exports.getUserDBService = async (email) => {
    try{

        const res = await userModel.findOne({ email });
        return res;

    } catch(error) {
        console.log(error)
    }
}

module.exports.loginuserDBService = async (employeeDetails) => {
   try {
    const user = await userModel.findOne({ email: employeeDetails.email}).exec()
        if(!user) {
            return { 
                status: false,
                msg: "Invaild Employee Detailssss" 
            };
        }
        else {
              var decrypted = encryptor.decrypt(user.password);

               if(decrypted== employeeDetails.password) {
                   const token = jwt.sign({}, JWT_SECRET);
                   return { 
                    status: true, 
                    msg: {
                       message: "Employee Validated Successfully",
                       token: token,
                       user: user
                   }};
               }
              else {
                 return { 
                    status: false, 
                    msg: "Employee Validated failed" 
                };
              }

        }
   } catch(error) {

   }
}