var mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Model d'un utilisateur
 */
var noteSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    titre: {
      type: String,
      trim: true,
      maxlength: 255,
      required: true,
    },
    body: {
      type: String,
      trim: true,
      maxlength: 255,
      required: true,
    },
    document: {
      type: String,
      trim: true,
      maxlength: 255,
    },
    createDate: {
      type: String,
      trim: true,
      required: true,
    },
    status: String,
  },
  { versionKey: false, collection: "Notes" }
);
var Note = mongoose.model("Notes", noteSchema);
module.exports = Note;
