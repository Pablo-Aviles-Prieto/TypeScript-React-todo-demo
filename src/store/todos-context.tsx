import React, { useState } from 'react';
import Todo from '../models/todo';

type TodoContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContextType>({
  items: [],
  addTodo: (text) => {},
  removeTodo: (id) => {},
});

const TodosContextProvider: React.FC<{ children: any }> = (props) => {
  const [todosList, setTodosList] = useState<Todo[]>([]);

  const addTodoHandler = (enteredText: string) => {
    const newTodo = new Todo(enteredText);
    setTodosList((prevState) => [...prevState, newTodo]);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodosList((prevState) => prevState.filter((todo) => todo.id !== todoId));
  };

  // We could avoid to type this variable contextValue since it could get the type by inference. But the IDE would show the error in the value prop in the return JSX. Typing this contextValue ensures that the IDE prompt the error in this obj variable.
  const contextValue = {
    items: todosList,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
