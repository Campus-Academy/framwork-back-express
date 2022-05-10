const express = require("express");
const router = express.Router();
const noteController = require("../controllers/notesController");

const multer = require("./multer-config");

// sans parametre
router.get("/", noteController.getAllNotes);
router.post("/", multer, noteController.createNote);

// par id
router.get("/:id", noteController.getNoteById);
router.put("/:id", multer, noteController.updateNote);
router.delete("/:id", noteController.deleteNoteById);

// par titre
router.get("/titre/:titre", noteController.getNoteByTitle);

module.exports = router;
