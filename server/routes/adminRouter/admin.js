const router = require('express').Router();
const adminAuth = require("../../controller/admin/adminController")

router.post('/login',adminAuth.Admin_login)
router.get('/home',adminAuth.admin_Home)

module.exports = router