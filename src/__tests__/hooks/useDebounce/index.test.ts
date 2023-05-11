import useDebounce from '../../../hooks/useDebounce';
import {renderHook, act} from '@testing-library/react-native';

describe('useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('test_debounced_value_is_returned_after_delay', async () => {
    const value = 'test';
    const delay = 1000;
    const {result} = renderHook(() => useDebounce(value, delay));

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(result.current).toBe(value);
  });
});
