import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {COLORS} from '../../styles';

export const Loading: FC = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={COLORS.ACCENT} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
