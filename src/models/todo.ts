// In TS we need to define the properties ahead of time (id, text...) to make clear which types of values will be stored before initializing the constructor.
// We can use this class name as a type (like in Todos.tsx)
class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = Math.random().toLocaleString();
  }
}

export default Todo;
