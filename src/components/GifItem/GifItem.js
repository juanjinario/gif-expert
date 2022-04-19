import React from 'react';
import PropTypes from 'prop-types';
import styles from './GifItem.module.css';

const GifItem = ({ title, id, url }) => (
  <div className={styles['gift-item-card'] + ' animate__animated animate__fadeIn'} data-testid="GifItem">
    <img alt={ title } className={styles['gif-image']} data-testid="GifItemImg" src={ url }></img>
    <p className={styles['gif-title']} data-testid="GifItemTitle">{ title }</p>
  </div>
);

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

GifItem.defaultProps = {};

export default GifItem;
