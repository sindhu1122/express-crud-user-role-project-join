const models = require('../models')
async function createUser (req, res, next) {
    try {
        const user = await models.User.create(req.body)
        res.status(200).json({
            user
        })
    } catch (error) {
        next(error)
    }
}
async function updateUser (req, res, next) {
    try {
        const user = await models.User.update(req.body, {
            where: {
                id: req.params.userId
            }
        })
    } catch (error) {
        next(error)
    }
}
async function userRoles(req, res, next) {
    console.log("started");
    try {
        const users = await models.User.findAll({
            include: [{
                model: models.Role, // will create a left join
                where:{id :req.params.userId }
            }]
        });
        res.status(200).json({
            users
        });
    } catch (error) {
        next(error);
    }
}
async function joinProject(req,res,next)
{
    
    const users=await models.User.findAll({
        include:[{
            model:models.Project},
            { model:models.Role}]
})
    res.status(200).json({
        users
    })

}
async function getUsers (req, res, next) {
    const users = await models.User.findAll({})
    res.status(200).json({
        users
    })
}
async function getUserDetails (req, res, next) {
    const user = await models.User.findOne({
        where: {
            id: req.params.userId
        }
    })
    res.status(200).json({
        user
    })
}

async function deleteBoolUser (req, res, next) {
    const deletedUser = await models.User.update({'delBool':true},{
        where: {
            id: req.params.userId
        }
    })
    res.status(200).json({
        deletedUser
    })
}
async function deleteUser (req, res, next) {
    try{
    const deletedUser = await models.User.destroy({
        where: {
            id: req.params.userId
        }
    })
    res.status(200).json({
        deletedUser
    })}
    catch(error)
    {
        next(error)
    }
}
async function getdelUsers (req, res, next) {
    const users = await models.User.findAll({where:{delBool:true}})
    res.status(200).json({
        users
    })
}
module.exports = {
    createUser,
    updateUser,
    getUserDetails,
    getUsers,
    deleteUser,
    userRoles,
    joinProject,
    getdelUsers,
    deleteBoolUser
}
