import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Loading} from '../../../components/loading';

describe('<Loading />', () => {
  test('should render correctly and snapshot', () => {
    render(<Loading />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
