import BookmarkIcon from '../../assets/icons/bookmark-fill-white.svg';
import AddIcon from '../../assets/icons/add-character-fill.svg';

export const Navbar = () => {
  return (
    <nav className='nav'>
      <button className='nav-button'>
        <span className='nav-button-label'>favoritos</span>
        <img className='nav-button-icon' src={BookmarkIcon} alt='bookmark icon' />
      </button>
      <button>
        <span className='nav-button-label'>agregar</span>
        <img className='nav-button-icon' src={AddIcon} alt='add icon' />
      </button>
    </nav>
  );
};
