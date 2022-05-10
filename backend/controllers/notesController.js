const Note = require("../models/Notes");
const db = require("../models/index.js");
const mongoose = require("mongoose");

/**
 * Toute les requetes disponibles pour l'url '/notes'
 */

// Création d'une note
exports.createNote = async (req, res) => {
  console.log(req.body);
  const note = new db.Note({
    _id: new mongoose.Types.ObjectId(),
    titre: req.body._titre,
    body: req.body._body,
    createDate: req.body._createDate,
    document: req.body._document,
    status: req.body._status,
  });
  note.save(function (err) {
    if (err) {
      return res.send(err);
    } else {
      res.json(note);
    }
  });
};

// Récupération de toutes les notes
exports.getAllNotes = async (req, res) => {
  db.Note.find({}).exec(function (err, notes) {
    if (err) {
      return res.send(err);
    }
    res.json(notes);
  });
};

// Récupération d'une note par id
exports.getNoteById = async (req, res) => {
  Note.findById(req.params.id).then(function (note) {
    res.send(note);
  });
};

// Récupération d'une note par titre
exports.getNoteByTitle = async (req, res) => {
  db.Note.find(
    {
      $or: [
        {
          titre: req.params.titre,
        },
      ],
    },
    function (err, note) {
      res.send(note);
    }
  );
};

//Modification d'une note
exports.updateNote = async (req, res) => {
  console.log(req.params.id);
  Note.findById(req.params.id, function (err, note) {
    console.log(req.body);
    if (err) {
      return res.send(err);
    } else {
      // Si le champs n'est pas renseigné alors on prend la valeur précédente
      req.body.hasOwnProperty("_titre") && (note.titre = req.body._titre);
      req.body.hasOwnProperty("_body") && (note.body = req.body._body);
      req.body.hasOwnProperty("_status") && (note.status = req.body._status);
      req.body.hasOwnProperty("_createDate") &&
        (note.createDate = req.body._createDate);
      req.body.hasOwnProperty("_document") &&
        (note.document = req.body._document);

      note.save(function (err) {
        if (err) {
          return res.send(err);
        } else {
          res.json(note);
        }
      });
    }
  });
};

// Suppression d'une note par id
exports.deleteNoteById = function (req, res) {
  Note.deleteOne(
    {
      _id: req.params.id,
    },
    function (err) {
      if (err) {
        return res.send(err);
      }
      res.json({
        message: "Note deleted",
      });
    }
  );
};
