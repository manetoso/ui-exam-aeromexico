// import NoBookmarked from './../../assets/icons/bookmark-outline.svg'
import Bookmarked from './../../assets/icons/bookmark-fill-black.svg';

const placeholderData = {
  id: 8,
  name: 'Harry Potter',
  species: 'human',
  gender: 'male',
  house: 'Gryffindor',
  dateOfBirth: '31-07-1980',
  yearOfBirth: 1980,
  ancestry: 'half-blood',
  eyeColour: 'green',
  hairColour: 'black',
  wand: {
    wood: 'holly',
    core: 'phoenix feather',
    length: 11,
  },
  patronus: 'stag',
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: 'Daniel Radcliffe',
  alive: true,
  image: 'http://hp-api.herokuapp.com/images/harry.jpg',
};

export const Card = () => {
  return (
    <div className='card-wrapper'>
      <img className='card-image' src={placeholderData.image} alt='character' />
      <div className='card-body'>
        <h4 className='card-label'>{`${
          placeholderData.alive ? 'vivo' : 'finado'
        } / ${placeholderData.hogwartsStudent ? 'estudiante' : 'staff'}`}</h4>
        <h3 className='card-title'>{placeholderData.name}</h3>
        <ul className='card-details'>
          <li className='card-spec'>
            <strong>Cumplea&ntilde;os:</strong> {placeholderData.dateOfBirth}
          </li>
          <li className='card-spec'>
            <strong>Genero:</strong> {placeholderData.gender}
          </li>
          <li className='card-spec'>
            <strong>Color de ojos:</strong> {placeholderData.eyeColour}
          </li>
          <li className='card-spec'>
            <strong>Color de pelo:</strong> {placeholderData.hairColour}
          </li>
        </ul>
        <img className='card-icon' src={Bookmarked} alt='bookmark icon' />
      </div>
    </div>
  );
};
