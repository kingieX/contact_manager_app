const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// Get all contacts
// @route GET /api/contacts
// @access private
const getContacts = asyncHandler(async (req, res) => {
    // find individual contact by ID
    const contacts = await Contact.find({ user_id: req.user.id });
    // return contact
    res.json(contacts).status(200);
});

// Create New contact
// @route POST /api/contacts
// @access private
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    // inputs that is requested
    const {name, email, phoneNo} = req.body;
    if(!name || !email || !phoneNo) {
        throw new Error("Please input all the details")
    }
    // create contact
    const contact = await Contact.create({
        name,
        email,
        phoneNo,
        user_id: req.user.id,
    });
    // return contact created
    res.json(contact).status(201);
});

// Get contact
// @route GET /api/contacts/:id
// @access private
const getContact = asyncHandler(async (req, res) => {
    // check if contact is found
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found!");
    }
    // return contact
    res.json(contact).status(200);
});

// Update contact
// @route PUT /api/contacts/:id
// @access private
const updateContact = asyncHandler(async (req, res) => {
    // check if contact is found
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        throw new Error("Contact not found!");
    }

    // check if request match with user ID
    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts!!!");
    }

    // update contact
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.json(updatedContact).status(200);
});

// Delete contact
// @route DELETE /api/contacts/:id
// @access private
const deleteContact = asyncHandler(async (req, res) => {
    // check if contact is found
    const contact = await Contact.findByIdAndRemove(req.params.id);
    if (!contact) {
        throw new Error("Contact not found!");
    }
    // check if request match with user ID
    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts!!!");
    }

    // delete contact
    const deletedContact = await contact.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedContact);
});


module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}