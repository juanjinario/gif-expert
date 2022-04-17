import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./GifExpertApp.module.css";

const GifExpertApp = () => {
  const [categoriesList, setCategoriesList] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
  const handleAddCategory = () => {
    /// setCategoriesList([...categoriesList, 'new Category']);
    setCategoriesList(cats => [...cats, 'New Cateroy']);
  };
  return (
    <>
      <h2 className={styles['page-title']} data-testid="GifExpertApp">
        GifExpertApp Component
      </h2>
      <hr/>
      <button onClick={ handleAddCategory }>Agregar Categoría</button>
      <ol>
        {
          categoriesList.map((category, index) => {
            return <li key={ category }>{ category }</li>;
          })
        }
      </ol>
    </>
  ); 
}

GifExpertApp.propTypes = {};

GifExpertApp.defaultProps = {};

export default GifExpertApp;
