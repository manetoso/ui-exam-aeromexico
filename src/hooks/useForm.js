import { useState } from 'react';

// API BASE URL
const API_BASE_URL = process.env.REACT_APP_SERVER_URL;

export const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);
  const resetForm = () => {
    setFormData(initialState);
  };
  const onChange = ({ target }) => {
    setFormData(prev => ({
      ...prev,
      [target.name]: target.value,
    }));
  };
  const onRadioStringChange = ({ target }) => {
    setFormData(prev => ({
      ...prev,
      [target.name]: target.value,
    }));
  };
  const onRadioBoolChange = ({ target }) => {
    setFormData(prev => ({
      ...prev,
      [target.name]: target.value === '0' ? false : true,
    }));
  };
  const onFileChange = ({ target }) => {
    if (target.files[0]) {
      setFormData(prev => ({
        ...prev,
        [target.name]: target.files[0],
        image: URL.createObjectURL(target.files[0]),
      }));
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    const houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
    const newCharacter = {
      ...formData,
      house: houses[Math.floor(Math.random() * (houses.length - 0 + 1) + 0)],
    };
    await fetch(
      `${API_BASE_URL}/${newCharacter.hogwartsStudent ? 'students' : 'staff'}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCharacter),
      }
    );
    resetForm();
  };

  return {
    formData,
    onChange,
    onFileChange,
    onRadioBoolChange,
    onRadioStringChange,
    resetForm,
    onSubmit,
  };
};
