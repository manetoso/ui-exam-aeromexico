import BookmarkIcon from '../../assets/icons/bookmark-fill-white.svg';
import AddIcon from '../../assets/icons/add-character-fill.svg';
import { useState } from 'react';
import { FavList } from './FavList';
import { Modal } from '../modal/Modal';

export const Navbar = () => {
  const [showFavList, setShowFavList] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const toggleFavList = () => {
    setShowFavList(!showFavList);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
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
            <button onClick={toggleModal} className='nav-button'>
              <span className='nav-button-label'>agregar</span>
              <img className='nav-button-icon' src={AddIcon} alt='add icon' />
            </button>
            <FavList isOpen={showFavList} toggleIsOpen={toggleFavList} />
          </div>
        </div>
      </div>
      <Modal isOpen={showModal} toggleIsOpen={toggleModal} />
    </nav>
  );
};
