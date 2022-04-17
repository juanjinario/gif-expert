import PropTypes from 'prop-types';
import styles from './GifGrid.module.css';
import GifItem from '../GifItem/GifItem';
import { useFetchGifs } from '../../hooks/useFetchGif.hook';

const GifGrid = ({ category }) => {

  const { data: imagesList, loading } = useFetchGifs({ category });
  
  return (
    <>
      <h3 className={styles.GifGrid} data-testid="GifGrid">
        { category }
      </h3>
      <div className={styles['cards-grid']}>
      {
        loading && <p>Cargando...</p>
      }
      {
        imagesList.map(image => {
          return <GifItem key={ image.id } { ...image }></GifItem>
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
