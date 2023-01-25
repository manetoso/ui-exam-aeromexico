import { Card } from './Card';

export const CardsSection = () => {
  return (
    <section className='cards-container'>
      <div className='cards-buttons'>
        <button className='button'>estudiantes</button>
        <button className='button'>staff</button>
      </div>
      <div className='cards-wrapper'>
        {[...Array(10).keys()].map(e => (
          <Card />
        ))}
      </div>
    </section>
  );
};
