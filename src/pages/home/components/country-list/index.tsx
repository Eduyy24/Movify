import React from 'react';
import {useGeneralContext} from '../../../../hooks/useGeneralContext';
import {FlatList, StyleSheet, View} from 'react-native';
import {CountryCard} from '../country-card';

const Separator = () => <View style={styles.separator} />;

export const CountryList = () => {
  const {countryList} = useGeneralContext();

  return (
    <View>
      <FlatList
        data={countryList}
        renderItem={({item}) => <CountryCard country={item} />}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 12,
  },
  list: {
    padding: 12,
    width: '100%',
  },
});
