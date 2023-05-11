import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {HorizontalLine} from '../../../components/horizontal-line';

describe('<HorizontalLine />', () => {
  test('should render correctly and snapshot', () => {
    render(<HorizontalLine />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
