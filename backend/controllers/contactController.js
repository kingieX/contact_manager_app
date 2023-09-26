const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts).status(200);
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
    const contact = await Contact.create({
        name,
        email,
        phoneNo,
    });
    res.json(contact).status(201);
});

// Get contact
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found!");
    }
    res.json(contact).status(200);
});

// Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        throw new Error("Contact not found!");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.json(updatedContact).status(200);
});

// Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        throw new Error("Contact not found!");
    }

    const deletedContact = await Contact.deleteOne();
    res.json(deletedContact).status(200);
});


module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}