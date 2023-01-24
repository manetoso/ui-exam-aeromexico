import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from './redux/slices/counterSlice';
import logo from './assets/icons/add-character-fill.svg';

export const App = () => {
  const { value } = useSelector(store => store.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <img src={logo} alt='some-asset' />
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};
