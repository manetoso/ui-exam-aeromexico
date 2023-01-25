import { Navbar } from './components/navbar/Navbar';
import { Header } from './components/header/Header';
import { CardsSection } from './components/cards/CardsSection';

export const App = () => {
  return (
    <div className='background'>
      <Navbar />
      <main className='main-container'>
        <Header />
        <CardsSection />
      </main>
    </div>
  );
};
