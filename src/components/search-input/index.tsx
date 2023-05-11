import React, {FC} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {COLORS} from '../../styles';

interface Props {
  onChangeSearch: (text: string) => void;
}

export const SearchInput: FC<Props> = ({onChangeSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputText} onChangeText={onChangeSearch} />
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
