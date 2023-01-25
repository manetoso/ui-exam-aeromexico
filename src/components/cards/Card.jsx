import NoBookmarked from './../../assets/icons/bookmark-outline.svg'
import { useEffect, useState } from 'react';
// import Bookmarked from './../../assets/icons/bookmark-fill-black.svg';

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
      <div className='card-image-container card-gryffindor'>
        <img className='card-image' src={placeholderData.image} alt='character' />
      </div>
      <div className='card-body'>
        <div className='card-header header-lg'>
          <h4 className='card-header-label'>{`${
            placeholderData.alive ? 'vivo' : 'finado'
          } / ${placeholderData.hogwartsStudent ? 'estudiante' : 'staff'}`}</h4>
          <img className='card-header-icon' src={NoBookmarked} alt='bookmark icon' />
        </div>
        <h3 className='card-title'>{placeholderData.name}</h3>
        <div className='card-header header-sm'>
          <span>
            <h4 className='card-header-label'>
              {placeholderData.alive ? 'vivo' : 'finado'}
            </h4>
            <h4 className='card-header-label'>
              {placeholderData.hogwartsStudent ? 'estudiante' : 'staff'}
            </h4>
          </span>
          <img className='card-header-icon' src={NoBookmarked} alt='bookmark icon' />
        </div>
        <ul className='card-details'>
          <li className='card-spec'>
            <strong>Cumplea&ntilde;os:</strong> <span>{placeholderData.dateOfBirth}</span>
          </li>
          <li className='card-spec'>
            <strong>Genero:</strong> <span>{placeholderData.gender}</span>
          </li>
          <li className='card-spec'>
            <strong>Color de ojos:</strong> <span>{placeholderData.eyeColour}</span>
          </li>
          <li className='card-spec'>
            <strong>Color de pelo:</strong> <span>{placeholderData.hairColour}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
