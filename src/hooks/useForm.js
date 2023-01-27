import { useState } from 'react';

// API BASE URL
const API_BASE_URL = process.env.REACT_APP_SERVER_URL;

// HOOK
export const useForm = (initialState = {}) => {
  // FORM DATA STATE
  const [formData, setFormData] = useState(initialState);
  // SET FORM DATA STATE TO IT'S DEFAULT
  const resetForm = () => {
    setFormData(initialState);
  };
  // onChnage METHOD FOR GENERAL INPUTS
  const onChange = ({ target }) => {
    setFormData(prev => ({
      ...prev,
      [target.name]: target.value,
    }));
  };
  // onChange METHOD FOR RADIO BUTTONS WHERE IT'S VALUE IS A BOOLEAN
  const onRadioBoolChange = ({ target }) => {
    setFormData(prev => ({
      ...prev,
      [target.name]: target.value === '0' ? false : true,
    }));
  };
  // onChange METHOD FOR SINGLE FILE INPUTS
  const onFileChange = ({ target }) => {
    if (target.files[0]) {
      setFormData(prev => ({
        ...prev,
        [target.name]: target.files[0],
        image: URL.createObjectURL(target.files[0]),
      }));
    }
  };

  // onSubmit METHOD
  const onSubmit = async e => {
    e.preventDefault();
    try {
      const houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
      // SETS A RANDOM HOSE FOR THE NEW CHARACTER
      const newCharacter = {
        ...formData,
        house: houses[Math.floor(Math.random() * (houses.length - 1 + 1) + 0)],
        alive: true,
      };
      // POST METHOD
      const response = await fetch(
        `${API_BASE_URL}/${
          newCharacter.hogwartsStudent ? 'students' : 'staff'
        }`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCharacter),
        }
      );
      const data = await response.json();
      resetForm();
      // RETURNS THE CHARACTER CREATED
      return data;
    } catch (error) {
      throw new Error('Something went wrong creating new Character');
    }
  };

  return {
    ...formData,
    formData,
    onChange,
    onFileChange,
    onRadioBoolChange,
    resetForm,
    onSubmit,
  };
};
