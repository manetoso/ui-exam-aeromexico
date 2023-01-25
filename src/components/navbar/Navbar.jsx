import BookmarkIcon from '../../assets/icons/bookmark-fill-white.svg';
import AddIcon from '../../assets/icons/add-character-fill.svg';

export const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-container'>
        <div className='nav-wrapper'>
          <div className='nav-buttons-wrapper'>
            <button className='nav-button'>
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
          </div>
        </div>
      </div>
    </nav>
  );
};
