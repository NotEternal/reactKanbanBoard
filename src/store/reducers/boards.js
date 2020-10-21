export default function boards(state, action) {
  if (!state) {
    return [];
  }

  switch (action.type) {
    case 'ADD':
      return [...state, action.value];
    case 'REMOVE':
      return state.filter((board) => {
        return (
          board.title !== action.value.title &&
          board.color !== action.value.color
        );
      });
    default:
      return state;
  }
}
