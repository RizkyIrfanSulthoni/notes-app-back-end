const { nanoid } = require('nanoid');
const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
   
    const newNote = {
      title, tags, body, id, createdAt, updatedAt,
    };
   
    notes.push(newNote);
  };
module.exports = { addNoteHandler };

const getAllNotesHandler = () => ({
  status: 'success',
  data: {
    notes,
  },
});