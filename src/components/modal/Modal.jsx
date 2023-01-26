import XIcon from '../../assets/icons/x.svg';

export const Modal = ({ isOpen, toggleIsOpen }) => {
  return (
    <div
      className={`modal ${isOpen ? 'show-modal' : 'hidde-modal'}`}
      onClick={toggleIsOpen}>
      <div className='modal-body' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h1>Agregar un personaje</h1>
          <button className='modal-close-button' onClick={toggleIsOpen}>
            <img src={XIcon} alt='close icon' />
          </button>
        </div>
        <div className='modal-inputs'>
          <div className='modal-input-group'>
            <label className='modal-input-label'>Nombre</label>
            <input className='modal-general-input' type='text' />
          </div>
          <div className='modal-input-group'>
            <label className='modal-input-label'>Cumplea&ntilde;os</label>
            <input className='modal-general-input' type='text' />
          </div>
          <div className='modal-input-group'>
            <label className='modal-input-label'>Color de ojos</label>
            <input className='modal-general-input' type='text' />
          </div>
          <div className='modal-input-group'>
            <label className='modal-input-label'>Color de pelo</label>
            <input className='modal-general-input' type='text' />
          </div>
          <div className='modal-input-group'>
            <label className='modal-input-label'>G&Eacute;nero</label>
            <div className='modal-checkbox-wrapper'>
              <div className='modal-checkbox-group'>
                <input id='woman' className='modal-checkbox' type='radio' />
                <label htmlFor='woman' className='modal-checkbox-label'>Mujer</label>
              </div>
              <div className='modal-checkbox-group'>
                <input id='man' className='modal-checkbox' type='radio' />
                <label htmlFor='man' className='modal-checkbox-label'>Hombre</label>
              </div>
            </div>
          </div>
          <div className='modal-input-group'>
            <label className='modal-input-label'>Posici&oacute;n</label>
            <div className='modal-checkbox-wrapper'>
              <div className='modal-checkbox-group'>
                <input id='student' className='modal-checkbox' type='radio' />
                <label htmlFor='student' className='modal-checkbox-label'>Estudiante</label>
              </div>
              <div className='modal-checkbox-group'>
                <input id='staff' className='modal-checkbox' type='radio' />
                <label htmlFor='staff' className='modal-checkbox-label'>Staff</label>
              </div>
            </div>
          </div>
        </div>
        <div className='modal-input-group'>
          <input type='file' />
        </div>
        <button className='button'>Guardar</button>
      </div>
    </div>
  );
};
