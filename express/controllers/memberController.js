const uuid = require('uuid')
const members = require('../Members')
const asyncHandler = require('express-async-handler')
const Member = require('../models/memberModel')

const readMembers = asyncHandler(async (req, res) => {

    const members = await Member.find()
    res.status(200).json(members)
})

const readMember = asyncHandler(async (req, res) => {
    const member = await Member.findById(req.params.id)
    res.status(200).json(member)



    // const found = members.some(member => member.id === parseInt(req.params.id))


    // // req.params.id acess whatever sent in the :id
    // // the id returned as a string so we have to parse it to int
    // if (found)
    //     res.json(members.filter(member => member.id === parseInt(req.params.id)))
    // else
    //     res.status(404).json({msg: `No user with the id ${req.params.id}`})
})

const createMember = asyncHandler(async (req, res) => {

    const member = await Member.create({
        name: req.body.name,
        email: req.body.email
    })

    res.status(200).json(member)

    //------------------------------------------------------------- 

    // //res.send(req.body)
    // const newMember = {
    //     id: uuid.v4(), // generate a random universal id
    //     name: req.body.name,
    //     email: req.body.email,
    //     status: 'active'
    // }

    // // make sure that the name and the email sent
    // if (!newMember.name || !newMember.email) {
    //     return res.status(400).json({ msg: "please include name and email" })
    // }

    // members.push(newMember)
    // // return the entire array of json including the new one
    // res.json(members)

})

const updateMember = asyncHandler(async(req, res) => {

    const member = await Member.findById(req.params.id)
    if (!member) {
        res.status(400)
        throw new Error('member not found')
    }
    // the new will create a new one if it doesnt exists
    const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedMember)
    // ----------------------------------------------------------------------------------

    // const found = members.some(member => member.id === parseInt(req.params.id))

    // if (found) {
    //     const updmem = req.body
    //     members.forEach(member =>  {
    //         if (member.id === parseInt(req.params.id))   {
    //             member.name = updmem.name ? updmem.name : member.name
    //             member.email = updmem.email ? updmem.email : member.email

    //             res.json({ msg: `member ${req.params.id} updated`, member })
    //         }
    //     })
            
    // }
        
    // else
    //     res.status(404).json({msg: `No user with the id ${req.params.id}`})
})

const deleteMember = asyncHandler(async (req, res) => {
    const member = await Member.findById(req.params.id)
    if (!member) {
        res.status(400)
        throw new Error('member not found')
    }
    await member.remove()
    res.status(200).json({msg: "removed sucessfully"})
    //----------------------------------------------------------------------------------------
    
    // const found = members.some(member => member.id === parseInt(req.params.id))


    // if (found)
    //     res.json({msg: "member deleted", members: members.filter(member => member.id !== parseInt(req.params.id))})
    // else
    //     res.status(404).json({msg: `No user with the id ${req.params.id}`})
})

module.exports = {
    readMember, 
    readMembers,
    createMember,
    updateMember,
    deleteMember
}