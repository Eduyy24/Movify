import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {CountryList} from '../../../../../pages/home/components/country-list';
import {
  GeneralContext,
  IContextProps,
} from '../../../../../context/general-context';

describe('<CountryList />', () => {
  test('should render correctly', () => {
    render(<CountryList />);
    expect(screen.toJSON()).toBeTruthy();
  });

  test('Render cities', () => {
    const valueGeneralContext = (): IContextProps => {
      const loading = true;
      return {
        loading,
        countryList: [],
        countryListRender: [
          'Albania',
          'Algeria',
          'Andorra',
          'Angola',
          'Anguilla',
          'Argentina',
          'Armenia',
        ],
        setValueSearch: () => {},
      };
    };
    render(
      <GeneralContext.Provider value={valueGeneralContext()}>
        <CountryList />
      </GeneralContext.Provider>,
    );

    expect(screen.getByText('Albania')).toBeTruthy();
    expect(screen.getByText('Algeria')).toBeTruthy();
    expect(screen.getByText('Andorra')).toBeTruthy();
    expect(screen.getByText('Angola')).toBeTruthy();
    expect(screen.getByText('Anguilla')).toBeTruthy();
    expect(screen.getByText('Argentina')).toBeTruthy();
    expect(screen.getByText('Armenia')).toBeTruthy();

    // evaluate render length of array
    expect(screen.getAllByTestId('press-go').length).toBe(7);
  });
});
