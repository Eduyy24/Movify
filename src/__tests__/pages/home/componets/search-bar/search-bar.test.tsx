import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {
  GeneralContext,
  IContextProps,
} from '../../../../../context/general-context';
import {SearchBar} from '../../../../../pages/home/components/search-bar';

describe('<SearchBar />', () => {
  test('should render correctly', () => {
    render(<SearchBar />);
    expect(screen.toJSON()).toBeTruthy();
  });

  test('Render input and call context function', async () => {
    const valueGeneralContext = (): IContextProps => {
      const loading = true;
      return {
        loading,
        countryList: [],
        countryListRender: [],
        setValueSearch: jest.fn(),
      };
    };
    const value = valueGeneralContext();
    render(
      <GeneralContext.Provider value={value}>
        <SearchBar />
      </GeneralContext.Provider>,
    );
    const input = screen.getByTestId('search-input');
    expect(input).toBeTruthy();
    fireEvent.changeText(input, 'test');
    expect(value.setValueSearch).toHaveBeenCalled();
  });
});
