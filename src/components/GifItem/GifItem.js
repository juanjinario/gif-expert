import React from 'react';
import PropTypes from 'prop-types';
import styles from './GifItem.module.css';

const GifItem = ({ title, id, url }) => (
  <div className={styles['gift-item-card']} data-testid="GifItem">
    <img className={styles['gif-image']} src={ url } alt={ title }></img>
    <p className={styles['gif-title']}>{ title }</p>
  </div>
);

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

GifItem.defaultProps = {};

export default GifItem;
