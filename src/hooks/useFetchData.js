import { useEffect, useReducer } from 'react';

// API BASE URL
const API_BASE_URL = process.env.REACT_APP_SERVER_URL;

// REDUCER TYPES
const types = {
  SET_STAFF: '[FETCH] STAFF DATA',
  SET_STUDENTS: '[FETCH] STUDENTS DATA',
  START_LOADING: '[FETCH] START LOADING',
  FINISH_LOADING: '[FETCH] FINISH LOADING',
  SET_SELECTED: '[UI] SET NEW SELECTED DATA',
  SET_NEW_STAFF_CHARACTER: '[UI] SET NEW STAFF CHARACTER',
  SET_NEW_STUDENT_CHARACTER: '[UI] SET NEW STUDENT CHARACTER',
};
// REDUCER INITIAL VALUE
const initialValue = {
  staffData: [],
  studentsData: [],
  selectedData: 'students',
  isLoading: true,
};
// REDUCER FOR HANDLIGN STATE MANAGMENT WITHOUT A LOT OF useState's
const reducer = (state, action) => {
  switch (action.type) {
    case types.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.FINISH_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case types.SET_STAFF:
      return {
        ...state,
        staffData: action.payload,
      };
    case types.SET_STUDENTS:
      return {
        ...state,
        studentsData: action.payload,
      };
    case types.SET_SELECTED:
      return {
        ...state,
        selectedData: action.payload,
      };
    case types.SET_NEW_STAFF_CHARACTER:
      return {
        ...state,
        staffData: [...state.staffData, action.payload],
      };
    case types.SET_NEW_STUDENT_CHARACTER:
      return {
        ...state,
        studentsData: [...state.studentsData, action.payload],
      };

    default:
      return state;
  }
};

// HOOK
export const useFetchData = () => {
  // REDUCER
  const [state, dispatch] = useReducer(reducer, initialValue);

  // ADDS A NEW CHARACTER TO THE STATE
  const addCharacter = characterData => {
    // ASK IF THE CHARACTER IS A STUDENT O STAFF PERSONAL
    if (characterData.hogwartsStudent) {
      dispatch({
        type: types.SET_NEW_STUDENT_CHARACTER,
        payload: characterData,
      });
    } else {
      dispatch({ type: types.SET_NEW_STAFF_CHARACTER, payload: characterData });
    }
  };

  // CHANGE SELECTED DATA
  // STAFF OR STUDENTS
  const changeSelected = id => {
    if (id === 0) {
      dispatch({ type: types.SET_SELECTED, payload: 'students' });
    } else {
      dispatch({ type: types.SET_SELECTED, payload: 'staff' });
    }
  };

  // FETCH DATA THROW ANY OF THE TWO ENDPOINTS
  // /students
  // /staff
  const fetchData = async endpoint => {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    const data = await response.json();
    if (endpoint === 'staff') {
      dispatch({ type: types.SET_STAFF, payload: data });
    } else {
      dispatch({ type: types.SET_STUDENTS, payload: data });
    }
  };

  // METHOD CALLED WHEN COMPONENTS MOUNTS
  const initFetching = async () => {
    dispatch({ type: types.START_LOADING });
    await fetchData('students');
    await fetchData('staff');
    dispatch({ type: types.FINISH_LOADING });
  };

  useEffect(() => {
    initFetching();
  }, []);

  return {
    state,
    changeSelected,
    addCharacter,
  };
};
