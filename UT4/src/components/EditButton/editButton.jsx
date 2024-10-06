import React from 'react';
import styles from './EditButton.module.css';

const EditButton = ({ onClick }) => {
    return (
        <button className={styles.editButton} onClick={onClick}>
        Editar
        </button>
    );
}

export default EditButton;