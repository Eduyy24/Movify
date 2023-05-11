import React from 'react';
import {useGeneralContext} from '../../../../hooks/useGeneralContext';
import {FlatList, View, Text} from 'react-native';

export const CountryList = () => {
  const {countryList} = useGeneralContext();
  return (
    <View>
      <FlatList
        data={countryList}
        renderItem={({item}) => <Text>{item}</Text>}
      />
    </View>
  );
};
