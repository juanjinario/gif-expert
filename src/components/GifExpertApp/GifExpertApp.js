// import PropTypes from "prop-types";
import { useState } from "react";
import AddCategory from "../AddCategory/AddCategory";
import GifGrid from "../GifGrid/GifGrid";
import styles from "./GifExpertApp.module.css";

const GifExpertApp = () => {
  const [categoriesList, setCategoriesList] = useState(['One Punch']);
  return (
    <>
      <h2 className={styles['page-title']} data-testid="GifExpertApp">
        GifExpertApp Component
      </h2>
      <hr/>
      <AddCategory setCategoriesList={ setCategoriesList }></AddCategory>
        {
          categoriesList.map((category, index) => {
            return <GifGrid key={ category } category={ category }>{ category }</GifGrid>;
          })
        }
    </>
  ); 
}

// GifExpertApp.propTypes = {};

// GifExpertApp.defaultProps = {};

export default GifExpertApp;
