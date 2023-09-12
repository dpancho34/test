const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    },
  });

const upload = multer({ storage: storage });

router.route('/user/register').post(userController.createUserController);
router.route('/user/image').post(upload.single("image"), userController.uploadImageController);
router.route('/user/login').post(userController.loginUserController);

module.exports = router;
