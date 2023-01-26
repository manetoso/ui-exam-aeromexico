import { useForm } from '../../hooks/useForm';
import XIcon from '../../assets/icons/x.svg';
import PlaceholderImage from '../../assets/image-placeholder.svg';

export const Modal = ({ isOpen, toggleIsOpen }) => {
  const {
    formData,
    onChange,
    onFileChange,
    onRadioBoolChange,
    onRadioStringChange,
    onSubmit,
  } = useForm({
    name: '',
    dateOfBirth: '',
    eyeColour: '',
    hairColour: '',
    gender: '',
    hogwartsStudent: 0,
    file: '',
    image: '',
  });
  const {
    name,
    dateOfBirth,
    eyeColour,
    hairColour,
    gender,
    hogwartsStudent,
    file,
    image,
  } = formData;
  const handleSubmit = async (e) => {
	await onSubmit(e)
	toggleIsOpen()
  }
  return (
    <div
      className={`modal ${isOpen ? 'show-modal' : 'hidde-modal'}`}
      onClick={toggleIsOpen}>
      <form onSubmit={handleSubmit}>
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
              <input
                required
                autoComplete='off'
                className='modal-general-input'
                name='name'
                onChange={onChange}
                type='text'
                value={name}
              />
            </div>
            <div className='modal-input-group'>
              <label className='modal-input-label'>Cumplea&ntilde;os</label>
              <input
                required
                className='modal-general-input'
                name='dateOfBirth'
                onChange={onChange}
                type='text'
                value={dateOfBirth}
              />
            </div>
            <div className='modal-input-group'>
              <label className='modal-input-label'>Color de ojos</label>
              <input
                required
                className='modal-general-input'
                name='eyeColour'
                onChange={onChange}
                type='text'
                value={eyeColour}
              />
            </div>
            <div className='modal-input-group'>
              <label className='modal-input-label'>Color de pelo</label>
              <input
                required
                className='modal-general-input'
                name='hairColour'
                onChange={onChange}
                type='text'
                value={hairColour}
              />
            </div>
            <div className='modal-input-group'>
              <label className='modal-input-label'>G&Eacute;nero</label>
              <div className='modal-checkbox-wrapper'>
                <div className='modal-checkbox-group'>
                  <input
                    required
                    id='female'
                    className='modal-checkbox'
                    type='radio'
                    name='gender'
                    value='female'
                    checked={gender === 'female'}
                    onChange={onRadioStringChange}
                  />
                  <label htmlFor='female' className='modal-checkbox-label'>
                    Mujer
                  </label>
                </div>
                <div className='modal-checkbox-group'>
                  <input
                    required
                    id='male'
                    className='modal-checkbox'
                    type='radio'
                    name='gender'
                    value='male'
                    checked={gender === 'male'}
                    onChange={onRadioStringChange}
                  />
                  <label htmlFor='male' className='modal-checkbox-label'>
                    Hombre
                  </label>
                </div>
              </div>
            </div>
            <div className='modal-input-group'>
              <label className='modal-input-label'>Posici&oacute;n</label>
              <div className='modal-checkbox-wrapper'>
                <div className='modal-checkbox-group'>
                  <input
                    required
                    id='student'
                    className='modal-checkbox'
                    type='radio'
                    name='hogwartsStudent'
                    value={1}
                    checked={hogwartsStudent === true}
                    onChange={onRadioBoolChange}
                  />
                  <label htmlFor='student' className='modal-checkbox-label'>
                    Estudiante
                  </label>
                </div>
                <div className='modal-checkbox-group'>
                  <input
                    required
                    id='staff'
                    className='modal-checkbox'
                    type='radio'
                    name='hogwartsStudent'
                    value={0}
                    checked={hogwartsStudent === false}
                    onChange={onRadioBoolChange}
                  />
                  <label htmlFor='staff' className='modal-checkbox-label'>
                    Staff
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='modal-file-group'>
            {image !== '' && (
              <img src={`${image}`} alt='.' placeholder={PlaceholderImage} />
            )}
            <label className='modal-input-file'>
              <input required type='file' name='file' onChange={onFileChange} />
              {file === '' && <span>Fotograf&iacute;a</span>}
              {file !== '' && <span>{file.name}</span>}
            </label>
          </div>
          <button type='submit' className='button btn-submit'>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
