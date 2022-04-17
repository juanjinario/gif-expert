import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './GifGrid.module.css';
import GifItem from '../GifItem/GifItem';

const GifGrid = ({ category }) => {

  const [imagesList, setimagesList] = useState([]);
  useEffect(() => {
    getGifsBySearch();
  }, []);
  

  const getGifsBySearch = async () => {
    const base = `https://api.giphy.com/v1/gifs/search`;
    const apiKey = 'IJZ9sNxedKg7fKPBa2GwQjvUtZfx8fbx';
    const url = `${ base }?api_key=${ apiKey }&q=${ encodeURI(category) }&limit=10`;
    const request = await fetch(url);
    const { data } = await request.json();
    const imgList = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      }
    })
    setimagesList(imgList);
  }
  return (
    <>
      <h3 className={styles.GifGrid} data-testid="GifGrid">
        { category }
      </h3>
      <div className={styles['cards-grid']}>
      {
        imagesList.map(image => {
          return <GifItem key={ image.key } { ...image }></GifItem>
        })
      }
      </div>
    </>
  );
}  

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

GifGrid.defaultProps = {};

export default GifGrid;
