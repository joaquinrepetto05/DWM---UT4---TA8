import React, { useState, useEffect } from 'react';
import styles from './input.module.css';

const Input = ({ addTask, onSave, initialValue = '' }) => {
  const [inputText, setInputText] = useState(initialValue);

  useEffect(() => {
    setInputText(initialValue);
  }, [initialValue]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== '') {
      if (onSave) {
        onSave(inputText);
      } else {
        addTask(inputText);
      }
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className={styles.input} 
        type="text" 
        value={inputText} 
        onChange={handleInputChange} 
        placeholder="Ingresa una tarea" 
      />
      <button type="submit" className={styles.button}>
        {onSave ? 'Guardar' : 'Enviar'} {/* Cambia el texto del botón según el contexto */}
      </button>
    </form>
  );
}

export default Input;
