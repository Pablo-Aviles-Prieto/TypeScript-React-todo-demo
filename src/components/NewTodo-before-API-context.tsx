import React, { useRef } from 'react';
import styles from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  // We need to specify which kind of data we are storing in this ref eventually. We do this with a generic type
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  // Since this Fn is handled by the onSubmit from React, we can type the event, telling TS that is the event from react form.
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // Since we initialize useRef as null and later (when the JSX is parsed) to an input element, we have to explicitly indicate that might not be a current property (using the '?' question mark) since useRef could be null (since TS cant know that this Fn is only executable when the JSX is parsed, so this useRef cant be called while is null).
    // Thats why the inference type of enteredText is string | undefined
    // In case we are using ! instead of ?, we can tell TS that this reference will be called only when is assigned to the input element and will have a current property always. Thx to this, the inference type of enteredText will be string only, and not undefined aswell (since we tell TS that we  wont call this reference while being null).
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
    todoTextInputRef.current!.value = '';
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor='text-input'>Todo text</label>
      <input type='text' id='text-input' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
