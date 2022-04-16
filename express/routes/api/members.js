const express = require('express')
const router = express.Router()
const members = require('../../Members')


const { readMember, readMembers, createMember, updateMember, deleteMember } = require('../../controllers/memberController')

// will return the json array when we get request to http://localhost:5000/api/members 
// router.get('/', (req, res) => {
//     // to return json
//     res.json(members)
// })


// get all the members
router.get('/', readMembers)


// get single member from the json array by its id
router.get('/:id', readMember)

// create member
router.post('/', createMember)


// update member
router.put('/:id', updateMember)


// Delete member
router.delete('/:id', deleteMember)


module.exports = router;