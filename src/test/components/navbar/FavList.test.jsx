import { act, render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';

import { Provider } from 'react-redux';
import {
  favlistReducer,
  favlistSlice,
} from '../../../redux/slices/favlistSlice';
import { modalReducer } from '../../../redux/slices/modalSlice';

import { FavList } from '../../../components/navbar/FavList';

/**
 * TESTS FOR THE FavList.jsx COMPONENT
 */
describe('Testing in FavList.jsx', () => {
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
        <FavList isOpen={false} toggleIsOpen={() => {}} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  test('should render the default item when the list is empty', () => {
    // RENDER
    render(
      <Provider store={store}>
        <FavList isOpen={false} toggleIsOpen={() => {}} />
      </Provider>
    );

    /**
     * SHOULD HAVE 1 ITEM WHEN EMPTY AND SAYS 'Lista Vacia'
     */
    expect(screen.getByText('Lista Vacia')).toBeTruthy();
  });

  test('should show the character add it', () => {
    // FAKE CHARACTER
    const character = {
      id: 0,
      name: 'Tome Cruise',
      image: 'https://some-url.jpg',
    };
    // RENDER
    render(
      <Provider store={store}>
        <FavList isOpen={false} toggleIsOpen={() => {}} />
      </Provider>
    );

    act(() => {
      store.dispatch(favlistSlice.actions.addToFavlist(character));
    });

    /**
     * SHOULD HAVE THE CHARACTER ADD IT
     */
    expect(screen.getByText(character.name)).toBeTruthy();
  });

  test('should remove 1 character', () => {
    // FAKE CHARACTER
    const character = {
      id: 0,
      name: 'Tome Cruise',
      image: 'https://some-url.jpg',
    };
    // RENDER
    render(
      <Provider store={store}>
        <FavList isOpen={false} toggleIsOpen={() => {}} />
      </Provider>
    );

    act(() => {
      store.dispatch(favlistSlice.actions.addToFavlist(character));
      store.dispatch(favlistSlice.actions.removeFromFavlist(character.id));
    });

    /**
     * SHOULD HAVE 1 ITEM THAT SAYS 'Lista Vacia'
     * BECAUSE THE LIST IS EMPTY AFTER REMOVING
     * THE CHARACTER ADD IT
     */
    expect(screen.getByText('Lista Vacia')).toBeTruthy();
  });
});
