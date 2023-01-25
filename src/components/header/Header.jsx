import logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <section className='header-container'>
      <img className='header-logo' src={logo} alt='app logo' />
      <h2 className='header-title'>Selecciona un filtro</h2>
    </section>
  );
};
