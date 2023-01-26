import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavlist } from '../../redux/slices/favlistSlice';
import Trash from '../../assets/icons/trash.svg';
import Placeholder from '../../assets/image-placeholder.svg';

export const FavList = ({ isOpen, toggleIsOpen }) => {
  // INITIALIZATION OF useSelector
  // PULLS THE DESIRE DATA FROM STORE => REDUCER => ELEMENT
  const { list } = useSelector(store => store.favlist);
  // INITILIZATION OF useDispatch
  // LET US EXECUTE THE ACTIONS DECLAIRE ON THE SLICE
  const dispatch = useDispatch();

  // METHOD TO REMOVE ELEMENT FROM FAVLIST
  // REQUIRES AN ID
  const handleRemoveFromFavlist = id => {
    dispatch(removeFromFavlist(id));
  };
  return (
    <>
      <div className={`favlist ${isOpen ? 'show-fav' : 'hidde-fav'}`}>
        {list.length === 0 && (
          <div className='fav-item'>
            <img className='item-image' src={Placeholder} alt='character' />
            <h3 className='item-name'>Lista Vacia</h3>
          </div>
        )}
        {list.length !== 0 &&
          list.map(({ id, name, image }) => (
            <div key={id} className='fav-item'>
              <img className='item-image' src={image} alt='character' />
              <h3 className='item-name'>{name}</h3>
              <button
                className='item-button'
                onClick={() => handleRemoveFromFavlist(id)}>
                <img src={Trash} alt='Delete icon' />
              </button>
            </div>
          ))}
      </div>
      {/* BACKGROUD TO CLOSE LIST WHEN CLICKING OUTSIDE */}
      <div
        className={`favlist-bg ${isOpen ? 'show-bg' : 'hidde-bg'}`}
        onClick={toggleIsOpen}
      />
    </>
  );
};
