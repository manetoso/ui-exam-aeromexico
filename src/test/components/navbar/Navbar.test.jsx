import { fireEvent, render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';

import { Provider } from 'react-redux';
import { favlistReducer } from '../../../redux/slices/favlistSlice';
import { modalReducer } from '../../../redux/slices/modalSlice';

import { Navbar } from '../../../components/navbar/Navbar';

/**
 * TESTS FOR THE Navbar.jsx COMPONENT
 */
describe('Testing in Navbar.jsx', () => {
  // STORE CONFIGURATION - JEST NEED IT
  const store = configureStore({
    reducer: {
      favlist: favlistReducer,
      modal: modalReducer,
    },
  });

  test('should match the snapshot', () => {
    // SHOULD MATCH THE SNAPSHOT SO THE RENDER MUST BE A CARD
    const { container } = render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  test('should have 2 buttons, fav button and modal toggler', () => {
    // RENDER
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    /**
     * SHOULD HAVE 2 BUTTONS
     * 	1 FOR THE FAVORITES LIST TOGGLE
     * 	1 FOR THE MODAL TOGGLER
     */
    expect(screen.getByText('favoritos')).toBeTruthy();
    expect(screen.getByText('agregar')).toBeTruthy();
  });

  test('should open the fav list when clicking on the right button', () => {
    // RENDER
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    /**
     * SHOULD OPEN THE FAV LIST
     * 	WE CAN KNOW IT BECAUSE THE CLASSNAME OF THE LIST
     * 	CHANGES FROM:
     * 	hidde-fav => show-fav
     */
    const btn = screen.getByText('favoritos');

    fireEvent.click(btn);
    const favlist = document.querySelector('.show-fav');

    expect(favlist).toBeTruthy();
    // screen.debug();
  });
});
