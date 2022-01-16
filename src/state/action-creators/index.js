// All data fetching, updates and transformation are made in the action creators

const addTodo = todo => {
  return { type: 'add_todo', payload: todo };
};

const deleteTodo = index => {
  return { type: 'delete_todo', payload: index };
};

const getJoke = () => {
  return { type: 'get_joke' };
};

const setJoke = jokeData => {
  return { type: 'set_joke', payload: jokeData };
};

export { addTodo, deleteTodo, getJoke, setJoke };
