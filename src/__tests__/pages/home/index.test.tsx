import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Home from '../../../pages/home';

describe('<Home />', () => {
  test('should render correctly', () => {
    render(<Home />);
    expect(screen.toJSON()).toBeTruthy();
  });
});
