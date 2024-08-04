const express = require("express");

//initialized the router
const router  = express.Router();

//controllers
const {getContacts, createContact, getContact, updateContact, deleteContact} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

// router.route("/").get(getContacts);
// router.route("/").post(createContact);

// router.route("/:id").get(getContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);
 
//adding validate token to make the path private
router.use(validateToken);

//combined routes which are with similar routing path
router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;