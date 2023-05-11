import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {COLORS} from '../../styles';

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputText} />
      <Image source={require('../../assets/icons/search.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inputText: {
    flex: 1,
    borderBottomColor: COLORS.SECONDARY,
    borderBottomWidth: 1,
    height: 40,
  },
});
