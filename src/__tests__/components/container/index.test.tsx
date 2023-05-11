import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Container} from '../../../components/container';
import {Text} from 'react-native';

describe('<Container />', () => {
  test('should render and show children correctly', () => {
    const TestRender = () => <Text>Test</Text>;
    render(
      <Container>
        <TestRender />
      </Container>,
    );
    expect(screen.queryByText('Test')).toBeTruthy();
  });
});
