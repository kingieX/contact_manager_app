const asyncHandler = require("express-async-handler");

// Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
    res.json({message: "Get all contacts"}).status(200);
});

// Create New contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const {name, email, phoneNo} = req.body;
    if(!name || !email || !phoneNo) {
        throw new Error("Please input all the details")
    }
    res.json({message: "Create contact"}).status(201);
});

// Get contact
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
    res.json({message: `Get contact for ${req.params.id}`}).status(200);
});

// Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
    res.json({message: `Update contact for ${req.params.id}`}).status(200);
});

// Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
    res.json({message: `delete contact for ${req.params.id}`}).status(200);
});


module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}