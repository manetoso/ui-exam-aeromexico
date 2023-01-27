const { configureStore } = require('@reduxjs/toolkit');
const { render, screen } = require('@testing-library/react');

const { Provider } = require('react-redux');
const { favlistReducer } = require('../../../redux/slices/favlistSlice');

const { Card } = require('../../../components/cards/Card');

/**
 * TESTS FOR THE Card.jsx COMPONENT
 */
describe('Testing in Card.jsx', () => {
  // FAKE DATA FOR THE CARD
  const fakeData = {
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
  };
  // STORE CONFIGURATION - JEST NEED IT
  const store = configureStore({
    reducer: {
      favlist: favlistReducer,
    },
  });

  test('should match the snapshot', () => {
    // SHOULD MATCH THE SNAPSHOT SO THE RENDER MUST BE A CARD
    const { container } = render(
      <Provider store={store}>
        <Card data={fakeData} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  test('should show character image', () => {
    // RENDER
    render(
      <Provider store={store}>
        <Card data={fakeData} />
      </Provider>
    );
    /**
     * TO TEST IF THE CARD IS RENDERED
     * WE CAN SEARCH FOR THE MUST NOTICEABLE THING ON IT
     * THE IMAGE OF THE CHARACTER
     *
     * WE CAN KNOW THAT RENDERS THE CORRECT ONE BY
     * EXPECTING THAT THE URL IS THE SAME AS THE ONE
     * ON THE FAKE DATA
     */
    const images = screen.getAllByRole('img');
    expect(images[0].src).toBe(fakeData.image);
  });

  test('should show character info', () => {
    // RENDER
    render(
      <Provider store={store}>
        <Card data={fakeData} />
      </Provider>
    );

    /**
     * WE MUST BE SURE THAT THE CARD HAS THE CORRECT INFO
     * BY SEARCHING FOR IT ON THE HTML AS TEXT
     */
    expect(screen.getByText(fakeData.name)).toBeTruthy();
    expect(screen.getByText(fakeData.gender)).toBeTruthy();
    expect(screen.getByText(fakeData.dateOfBirth)).toBeTruthy();
    expect(screen.getByText(fakeData.eyeColour)).toBeTruthy();
    expect(screen.getByText(fakeData.hairColour)).toBeTruthy();
  });
});
