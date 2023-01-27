import { configureStore } from '@reduxjs/toolkit';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { Modal } from '../../../components/modal/Modal';
import { modalReducer, modalSlice } from '../../../redux/slices/modalSlice';

/**
 * TESTS FOR THE Modal.jsx COMPONENT
 */
describe('Testing in Modal.jsx', () => {
  // STORE CONFIGURATION - JEST NEED IT
  const store = configureStore({
    reducer: {
      modal: modalReducer,
    },
  });

  test('should be closed when mounted', () => {
    // JEST FAKE FUNCTION
    const addCharacter = jest.fn();

    // RENDER
    render(
      <Provider store={store}>
        <Modal addCharacter={addCharacter} />
      </Provider>
    );

    /**
     * WE CAN KNOW THAT THE MODAL IS CLOSE BECAUSE
     * IT HAS THE CLASS
     *  hidde-modal
     */
    const modalContainer = document.querySelector('.hidde-modal');

    expect(modalContainer).toBeTruthy();
  });

  test('should open the modal when state changes', () => {
    // JEST FAKE FUNCTION
    const addCharacter = jest.fn();

    // RENDER
    render(
      <Provider store={store}>
        <Modal addCharacter={addCharacter} />
      </Provider>
    );

    act(() => {
      store.dispatch(modalSlice.actions.toggleModal());
    });

    /**
     * WE CAN KNOW THAT THE MODAL IS OPEN BECAUSE
     * ITS CLASS PASS FROM
     *  hidde-modal => show-modal
     */
    const modalContainer = document.querySelector('.show-modal');

    expect(modalContainer).toBeTruthy();
    // screen.debug();
  });

  test('should call onSubmit prop and submit form', async () => {
    // VALUES FOR THE INPUTS
    const inputName = 'Emmanuel Cortes';
    const inputDate = '12/08/1998';
    const inputEye = 'brown';
    const inputHair = 'brown';
    const inputGender = 'male';
    const inputStudent = '1';

    // JEST FAKE FUNCTION
    const addCharacter = jest.fn();

    // RENDER
    render(
      <Provider store={store}>
        <Modal addCharacter={addCharacter} />
      </Provider>
    );

    /**
     * TO KNOW IF THE MODAL SENDS DATA WE MUST TEST
     * THAT THE USER CAN INTERACT WITH THE INPUTS
     * AND BE SURE THAT THE onSubmit METHOD IT IS CALL
     *
     * FIRST THE INPUTS MUST HAVE THE VALUE WRITE IT ON THEM
     *
     * AND THE onSubmit AND THE addCharacter METHOD MUST BE CALLED
     * AT LEAST 1
     */
    const inputs = screen.getAllByRole('textbox');
    const radios = screen.getAllByRole('radio');
    const form = screen.getByRole('form');

    const [name, birthdate, eyeColor, hairColor] = inputs;
    const [female, male, student, staff] = radios;

    fireEvent.input(name, { target: { value: inputName } });
    fireEvent.input(birthdate, { target: { value: inputDate } });
    fireEvent.input(eyeColor, { target: { value: inputEye } });
    fireEvent.input(hairColor, { target: { value: inputHair } });
    fireEvent.input(male, { target: { value: inputGender } });
    fireEvent.input(student, { target: { value: inputStudent } });

    fireEvent.submit(form);
    await waitFor(() => {
      expect(addCharacter).toHaveBeenCalled();
      expect(addCharacter).toHaveBeenCalledTimes(1);
    });
  });
});
