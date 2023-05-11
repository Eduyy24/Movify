import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {CountryCard} from '../../../../../pages/home/components/country-card';

describe('<CountryCard />', () => {
  test('should render correctly', () => {
    render(<CountryCard country="" />);
    expect(screen.toJSON()).toBeTruthy();
  });

  test('render props correctly', () => {
    const country = {
      name: 'Albania',
      capital: 'Tirana',
      region: 'Southern Europe',
    };

    render(<CountryCard country={country.name} />);
    expect(screen.queryByText(country.name)).toBeTruthy();
    expect(screen.queryByText(country.capital)).toBeTruthy();
    expect(screen.queryByText(country.region)).toBeTruthy();
  });

  test('Call onPress Go', () => {
    const country = {
      name: 'Albania',
      capital: 'Tirana',
      region: 'Southern Europe',
    };

    render(<CountryCard country={country.name} />);
    const btnGo = screen.getByTestId('press-go');
    expect(btnGo).toBeTruthy();
    fireEvent.press(btnGo);
  });
});
