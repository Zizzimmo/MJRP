import React from 'react'
import styles from './List.module.css';
import { Link } from 'react-router-dom';

const List = ({faq}) => {
    const { id, text} = faq;
  return (
    <div className={styles.item} key={id}>
      <Link to={`/faqs/${text}`}> {text} </Link>
      </div>
  )
}

export default List