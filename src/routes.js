const { addNoteHandler, getAllNotesHandler } = require('./handler');
const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
    },
   ];
    
   module.exports = routes;
   const getAllNotesHandler = () => ({
    status: 'success',
    data: {
      notes,
    },
  });
   
  module.exports = { addNoteHandler, getAllNotesHandler };