import NoBookmarked from './../../assets/icons/bookmark-outline.svg';
// import Bookmarked from './../../assets/icons/bookmark-fill-black.svg';

export const Card = ({ data }) => {
  const {
    // id,
    name,
    // species,
    gender,
    house,
    dateOfBirth,
    // yearOfBirth,
    // ancestry,
    eyeColour,
    hairColour,
    // wand,
    // patronus,
    hogwartsStudent,
    // hogwartsStaff,
    // actor,
    alive,
    image,
  } = data;
  return (
    <div className='card-wrapper'>
      <div className={`card-image-container card-${house.toLowerCase()}`}>
        <img
          className='card-image'
          src={`${image}`}
          alt='character'
        />
      </div>
      <div className='card-body'>
        <div className='card-header header-lg'>
          <h4 className='card-header-label'>{`${
            alive ? 'vivo' : 'finado'
          } / ${hogwartsStudent ? 'estudiante' : 'staff'}`}</h4>
          <button>
            <img
              className='card-header-icon'
              src={NoBookmarked}
              alt='bookmark icon'
            />
          </button>
        </div>
        <h3 className='card-title'>{name}</h3>
        <div className='card-header header-sm'>
          <span>
            <h4 className='card-header-label'>
              {alive ? 'vivo' : 'finado'}
            </h4>
            <h4 className='card-header-label'>
              {hogwartsStudent ? 'estudiante' : 'staff'}
            </h4>
          </span>
          <button>
            <img
              className='card-header-icon'
              src={NoBookmarked}
              alt='bookmark icon'
            />
          </button>
        </div>
        <ul className='card-details'>
          <li className='card-spec'>
            <strong>Cumplea&ntilde;os:</strong>{' '}
            <span>{dateOfBirth}</span>
          </li>
          <li className='card-spec'>
            <strong>Genero:</strong> <span>{gender}</span>
          </li>
          <li className='card-spec'>
            <strong>Color de ojos:</strong>{' '}
            <span>{eyeColour}</span>
          </li>
          <li className='card-spec'>
            <strong>Color de pelo:</strong>{' '}
            <span>{hairColour}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
