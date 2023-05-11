import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../styles';

export const HorizontalLine = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    width: '100%',
    borderBottomColor: COLORS.ACCENT,
    borderBottomWidth: 1,
    marginVertical: 5,
  },
});
