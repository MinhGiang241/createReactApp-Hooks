const notesReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_NOTES":
      return action.notes;
    case "ADD_NOTES":
      return [
        ...state,
        {
          title: action.title,
          body: action.body,
          createdAt: action.createdAt,
        },
      ];
    case "REMOVE_NOTES":
      return state.filter((note) => note.createdAt !== action.createdAt);
    default:
      return state;
  }
};

export { notesReducer as default };
