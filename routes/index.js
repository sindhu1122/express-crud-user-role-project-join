const express = require('express');
const router = express.Router(); // initialize router
const {
    createUser,deleteUser,getUserDetails,getUsers,updateUser,userRoles,joinProject,getdelUsers,deleteBoolUser
} = require('./userMgm')
router.get('/users', getUsers)
router.get('/roles/:userId',userRoles)
router.get('/users/:userId', getUserDetails)
router.get('/projects',joinProject)
router.get('/deluser',getdelUsers)
router.delete('/users/:userId', deleteUser)
router.delete('/delusers/:userId', deleteBoolUser)
router.post('/users', createUser)
router.put('/users/:userId', updateUser)
module.exports = router;