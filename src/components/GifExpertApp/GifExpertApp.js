import PropTypes from "prop-types";
import { useState } from "react";
import AddCategory from "../AddCategory/AddCategory";
import styles from "./GifExpertApp.module.css";

const GifExpertApp = () => {
  const [categoriesList, setCategoriesList] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
  return (
    <>
      <h2 className={styles['page-title']} data-testid="GifExpertApp">
        GifExpertApp Component
      </h2>
      <hr/>
      <AddCategory setCategoriesList={ setCategoriesList }></AddCategory>
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
