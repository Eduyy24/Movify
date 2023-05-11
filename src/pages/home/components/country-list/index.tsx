import React from 'react';
import {useGeneralContext} from '../../../../hooks/useGeneralContext';
import {FlatList, View} from 'react-native';
import {CountryCard} from '../country-card';

export const CountryList = () => {
  const {countryList} = useGeneralContext();
  return (
    <View>
      <FlatList
        data={countryList}
        renderItem={({item}) => <CountryCard country={item} />}
      />
    </View>
  );
};
