import React from 'react';
import styles from '../../public/styles/SectionHeader.module.css'

export const SectionHeader = ({title}) => {
  return (
    <h1 className={styles.sectionHeader}>{title}</h1>
  )
}
