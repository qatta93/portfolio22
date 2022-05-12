import React from 'react';
import styles from '../../public/styles/SectionHeader.module.css';
import { SectionHeaderProps } from '../types';

export const SectionHeader = ({title}:SectionHeaderProps) => {
  return (
    <h1 className={styles.sectionHeader}>{title}</h1>
  )
}
