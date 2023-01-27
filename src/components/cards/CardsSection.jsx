import { Card } from './Card';
import { Modal } from '../modal/Modal';

import { useFetchData } from '../../hooks/useFetchData';

import Spinner from './../../assets/icons/spinner.svg';

// SPINNER COMPONENT
const CardSpinner = () => (
  <img className='loader' src={Spinner} alt='loading symbol' />
);

export const CardsSection = () => {
  // HOOK INITIALIZATION
  const { state, changeSelected, addCharacter } = useFetchData();
  const { staffData, studentsData, selectedData, isLoading } = state;
  return (
    <>
      <section className='cards-container'>
        <div className='cards-buttons'>
          <button
            onClick={() => changeSelected(0)}
            className={`button ${selectedData === 'students' && 'btn-active'}`}>
            estudiantes
          </button>
          <button
            onClick={() => changeSelected(1)}
            className={`button ${selectedData === 'staff' && 'btn-active'}`}>
            staff
          </button>
        </div>
        <div className={`cards-wrapper ${isLoading && 'loading'}`}>
          {isLoading ? (
            <CardSpinner />
          ) : (
            <>
              {selectedData === 'students' &&
                studentsData.map(data => <Card key={data.id} data={data} />)}
              {selectedData === 'staff' &&
                staffData.map(data => <Card key={data.id} data={data} />)}
            </>
          )}
        </div>
      </section>
      <Modal addCharacter={addCharacter} />
    </>
  );
};
