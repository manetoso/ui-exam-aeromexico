import { act, renderHook, waitFor } from '@testing-library/react';

import { useFetchData } from '../../hooks/useFetchData';

/**
 * TESTS FOR THE useFetchData.js HOOK
 */
describe('Testing in useFetchData.js hook', () => {
  test('should return the initialState of the hook', () => {
    // HOOK RENDER
    const { result } = renderHook(() => useFetchData());
    const { state, addCharacter, changeSelected } = result.current;
    const { staffData, studentsData, selectedData, isLoading } = state;

    /**
     * WE MUST BE SURE THAT, AT TE BEGINNING, THE HOOK
     * MUST RETURN THE INITIAL STATE
     */
    expect(staffData.length).toBe(0);
    expect(studentsData.length).toBe(0);
    expect(selectedData).toBe('students');
    expect(isLoading).toBeTruthy();
    expect(addCharacter).toEqual(expect.any(Function));
    expect(changeSelected).toEqual(expect.any(Function));
  });

  test('should return the data fetched', async () => {
    // HOOK RENDER
    const { result } = renderHook(() => useFetchData());

    await waitFor(() => {
      expect(result.current.state.staffData.length).toBeGreaterThan(0);
      expect(result.current.state.studentsData.length).toBeGreaterThan(0);
      expect(result.current.state.isLoading).not.toBeTruthy();
    });

    const { state } = result.current;
    const { staffData, studentsData, selectedData, isLoading } = state;

    /**
     * WE MUST BE SURE THAT, AT TE BEGINNING, THE HOOK
     * MUST RETURN THE INITIAL STATE
     */
    expect(staffData.length).toBeGreaterThan(0);
    expect(studentsData.length).toBeGreaterThan(0);
    expect(selectedData).toBe('students');
    expect(isLoading).not.toBeTruthy();
  });

  test('should change the selected data', async () => {
    // HOOK RENDER
    const { result } = renderHook(() => useFetchData());

    /**
     * WE MUST BE ABLE TO CHANGE WHICH DATA
     * SHOULD BE RENDERED
     */
    act(() => {
      result.current.changeSelected(1);
    });

    expect(result.current.state.selectedData).toBe('staff');
  });

  test('should add a new character to the state', async () => {
    // NEW CHARACTER FAKE DATA
    const newCharacter = {
      id: 0,
      name: 'Tom Cruise',
      hogwartsStudent: false,
    };
    // HOOK RENDER
    const { result } = renderHook(() => useFetchData());

    /**
     * WE MUST BE ABLE TO ADD A NEW CHARACTER TO
	 * THE STATE
     */
    act(() => {
      result.current.addCharacter(newCharacter);
    });

    expect(result.current.state.staffData.length).toBeGreaterThan(0);
  });
});
