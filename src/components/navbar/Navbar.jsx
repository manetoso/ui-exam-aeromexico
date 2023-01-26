import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toggleModal } from '../../redux/slices/modalSlice';

import { FavList } from './FavList';

import BookmarkIcon from '../../assets/icons/bookmark-fill-white.svg';
import AddIcon from '../../assets/icons/add-character-fill.svg';

export const Navbar = () => {
  // INITIALIZE REDUX DISPATCH
  const dispatch = useDispatch();
  // STATE OF FAVLIST
  const [showFavList, setShowFavList] = useState(false);
  // FAVLIST TOGGLER
  const toggleFavList = () => {
    setShowFavList(!showFavList);
  };
  // MODAL TOGGLER
  const handleModal = () => {
    dispatch(toggleModal());
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
            <button onClick={handleModal} className='nav-button'>
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
