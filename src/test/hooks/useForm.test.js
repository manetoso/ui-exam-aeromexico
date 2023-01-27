import { act, renderHook } from '@testing-library/react';

import { useForm } from '../../hooks/useForm';

/**
 * TESTS FOR THE useForm.js HOOK
 */
describe('Testing in useForm.js hook', () => {
  // FORM INITIAL VALUES
  const initialValues = {
    dateOfBirth: '',
    eyeColour: '',
    file: '',
    gender: '',
    hairColour: '',
    hogwartsStudent: 0,
    image: '',
    name: '',
  };

  test('should return the default values', () => {
    // HOOK RENDER
    const { result } = renderHook(() => useForm(initialValues));

    /**
     * WE MUST BE SURE THAT, AT TE BEGINNING, THE HOOK
     * MUST RETURN THE INITIAL STATE
     */
    expect(result.current).toEqual({
      dateOfBirth: initialValues.dateOfBirth,
      eyeColour: initialValues.eyeColour,
      file: initialValues.file,
      gender: initialValues.gender,
      hairColour: initialValues.hairColour,
      hogwartsStudent: initialValues.hogwartsStudent,
      image: initialValues.image,
      name: initialValues.name,
      formData: initialValues,
      onChange: expect.any(Function),
      onFileChange: expect.any(Function),
      onRadioBoolChange: expect.any(Function),
      resetForm: expect.any(Function),
      onSubmit: expect.any(Function),
    });
  });

  test('should change the value of the inputs', () => {
    const newName = 'Tom Cruise';
    // HOOK RENDER
    const { result } = renderHook(() => useForm(initialValues));

    /**
     * WE MUST BE ABLE TO CHNAGE THE VALUE OF THE INPUTS
     * WITH THE onChange METHOD
     */
    act(() => {
      result.current.onChange({ target: { name: 'name', value: newName } });
    });

    expect(result.current.name).toBe(newName);
  });

  test('should reset to its initial value', () => {
    const newName = 'Tom Cruise';
    // HOOK RENDER
    const { result } = renderHook(() => useForm(initialValues));

    /**
     * WE MUST BE ABLE TO RESET THE FORM TO ITS INITIAL VALUE
     */
    act(() => {
      result.current.onChange({ target: { name: 'name', value: newName } });
      result.current.resetForm();
    });

    expect(result.current.name).toBe('');
  });
});
