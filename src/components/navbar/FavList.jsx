import Trash from '../../assets/icons/trash.svg';
import Placeholder from '../../assets/image-placeholder.svg';

export const FavList = ({ isOpen, toggleIsOpen }) => {
  return (
    <>
      <div className={`favlist ${isOpen ? 'show-fav' : 'hidde-fav'}`}>
        <div className='fav-item'>
          <img
            className='item-image'
            src='https://cms-cdn.placeholder.co/toronto_be6ed650f3.png?width=750'
            alt='character'
          />
          <h3 className='item-name'>Some weird name</h3>
          <button className='item-button'>
            <img src={Trash} alt='Delete icon' />
          </button>
        </div>
        <div className='fav-item'>
          <img
            className='item-image'
            src='https://cms-cdn.placeholder.co/toronto_be6ed650f3.png?width=750'
            alt='character'
          />
          <h3 className='item-name'>Some weird name</h3>
          <button className='item-button'>
            <img src={Trash} alt='Delete icon' />
          </button>
        </div>
        <div className='fav-item'>
          <img
            className='item-image'
            src='https://cms-cdn.placeholder.co/toronto_be6ed650f3.png?width=750'
            alt='character'
          />
          <h3 className='item-name'>Some weird name</h3>
          <button className='item-button'>
            <img src={Trash} alt='Delete icon' />
          </button>
        </div>
        <div className='fav-item'>
          <img
            className='item-image'
            src='https://cms-cdn.placeholder.co/toronto_be6ed650f3.png?width=750'
            alt='character'
          />
          <h3 className='item-name'>Some weird name</h3>
          <button className='item-button'>
            <img src={Trash} alt='Delete icon' />
          </button>
        </div>
        <div className='fav-item'>
          <img className='item-image' src={Placeholder} alt='character' />
          <h3 className='item-name'>Empty space</h3>
          <button className='item-button'>
            <img src={Trash} alt='Delete icon' />
          </button>
        </div>
      </div>
	  <div className={`favlist-bg ${isOpen ? 'show-bg' : 'hidde-bg'}`} onClick={toggleIsOpen} />
    </>
  );
};
