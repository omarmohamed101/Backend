const uuid = require('uuid')
const members = require('../Members')
const asyncHandler = require('express-async-handler')

const readMember = asyncHandler(async (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))


    // req.params.id acess whatever sent in the :id
    // the id returned as a string so we have to parse it to int
    if (found)
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    else
        res.status(404).json({msg: `No user with the id ${req.params.id}`})
})

const createMember = asyncHandler(async (req, res) => {

    //res.send(req.body)
    const newMember = {
        id: uuid.v4(), // generate a random universal id
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    // make sure that the name and the email sent
    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: "please include name and email" })
    }

    members.push(newMember)
    // return the entire array of json including the new one
    res.json(members)

})

const updateMember = asyncHandler(async(req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found) {
        const updmem = req.body
        members.forEach(member =>  {
            if (member.id === parseInt(req.params.id))   {
                member.name = updmem.name ? updmem.name : member.name
                member.email = updmem.email ? updmem.email : member.email

                res.json({ msg: `member ${req.params.id} updated`, member })
            }
        })
            
    }
        
    else
        res.status(404).json({msg: `No user with the id ${req.params.id}`})
})

const deleteMember = asyncHandler(async (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))


    if (found)
        res.json({msg: "member deleted", members: members.filter(member => member.id !== parseInt(req.params.id))})
    else
        res.status(404).json({msg: `No user with the id ${req.params.id}`})
})

module.exports = {
    readMember, 
    createMember,
    updateMember,
    deleteMember
}