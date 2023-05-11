import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {SearchInput} from '../../../components/search-input';

describe('<SearchInput />', () => {
  test('should render correctly and snapshot', () => {
    render(<SearchInput onChangeSearch={() => {}} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('Validate call onChangeSearch', () => {
    const onChangeSearch = jest.fn();
    render(<SearchInput onChangeSearch={onChangeSearch} />);
    const input = screen.getByTestId('search-input');
    fireEvent.changeText(input, 'test');
    expect(onChangeSearch).toBeCalledTimes(1);
  });
});
