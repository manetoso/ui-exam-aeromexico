import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { modalReducer } from '../../../redux/slices/modalSlice';
import { favlistReducer } from '../../../redux/slices/favlistSlice';

import { CardsSection } from '../../../components/cards/CardsSection';
import { useFetchData } from '../../../hooks/useFetchData';

// JEST MOCK FOR CUSTOM HOOK
jest.mock('../../../hooks/useFetchData');

/**
 * TESTS FOR THE CardsSection.jsx COMPONENT
 */
describe('Testing in CardsSection.jsx', () => {
  // STORE CONFIGURATION - JEST NEED IT
  const store = configureStore({
    reducer: {
      favlist: favlistReducer,
      modal: modalReducer,
    },
  });

  test('should render loader on mounted', () => {
    // FAKE DATA RETURNED FROM JEST MOCK
    useFetchData.mockReturnValue({
      state: {
        staffData: [],
        studentsData: [],
        selectedData: 'students',
        isLoading: true,
      },
      changeSelected: () => {},
      addCharacter: () => {},
    });
    // RENDER
    render(
      <Provider store={store}>
        <CardsSection />
      </Provider>
    );

    /**
     * SEARCH FOR IMAGES ON THE RENDER BEACUSE THE FISRT ONE
     * MUST BE THE SPINNER ASSET
     */
    const imgs = screen.getAllByRole('img');

    expect(imgs[0].src).toBe('http://localhost/spinner.svg');
  });

  test('should render cards when loaded', () => {
    // CREATED FAKE DATA FOR THE CUSTOM HOOK
    const staff = [
      {
        id: 8,
        name: 'Minerva McGonagall',
        gender: 'female',
        house: 'Gryffindor',
        dateOfBirth: '04-10-1925',
        eyeColour: 'green',
        hairColour: 'black',
        hogwartsStudent: true,
        alive: true,
        image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg',
      },
    ];
    const students = [
      {
        id: 8,
        name: 'Harry Potter',
        gender: 'male',
        house: 'Gryffindor',
        dateOfBirth: '31-07-1980',
        eyeColour: 'green',
        hairColour: 'black',
        hogwartsStudent: true,
        alive: true,
        image: 'http://hp-api.herokuapp.com/images/harry.jpg',
      },
    ];
    // FAKE DATA RETURNED FROM JEST MOCK
    useFetchData.mockReturnValue({
      state: {
        staffData: staff,
        studentsData: students,
        selectedData: 'students',
        isLoading: false,
      },
      changeSelected: () => {},
      addCharacter: () => {},
    });
    // RENDER
    render(
      <Provider store={store}>
        <CardsSection />
      </Provider>
    );

    /**
     * EVERY CARD MUST HAVE 3 IMAGES
     * 	1 CHARACTER IMAGE
     * 	AND 2 BOOKMARK ICONS
     *
     * THE MODAL HAS 1 IMAGE ( CLOSE ICON )
	 * 
	 * SO THERE MUST BE AT LEAST 4 IMAES ON THE RENDER
     */

    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(4);
    // screen.debug()
  });
});
