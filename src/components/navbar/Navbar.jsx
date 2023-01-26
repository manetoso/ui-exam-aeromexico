import BookmarkIcon from '../../assets/icons/bookmark-fill-white.svg';
import AddIcon from '../../assets/icons/add-character-fill.svg';
import { useState } from 'react';
import { FavList } from './FavList';

export const Navbar = () => {
  const [showFavList, setShowFavList] = useState(false);
  const toggleFavList = () => {
    setShowFavList(!showFavList);
  };

  return (
    <nav className='nav'>
      <div className='nav-container'>
        <div className='nav-wrapper'>
          <div className='nav-buttons-wrapper'>
            <button className='nav-button' onClick={toggleFavList}>
              <span className='nav-button-label'>favoritos</span>
              <img
                className='nav-button-icon'
                src={BookmarkIcon}
                alt='bookmark icon'
              />
            </button>
            <div className='separator' />
            <button className='nav-button'>
              <span className='nav-button-label'>agregar</span>
              <img className='nav-button-icon' src={AddIcon} alt='add icon' />
            </button>
            <FavList isOpen={showFavList} toggleIsOpen={toggleFavList} />
          </div>
        </div>
      </div>
    </nav>
  );
};
