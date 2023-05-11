import React from 'react';
import {SearchBar} from '../components/search-bar';
import {HorizontalLine} from '../components/horizontal-line';
import {StyleSheet, View} from 'react-native';
import {Loading} from '../components/loading';
import {useGeneralContext} from '../hooks/useGeneralContext';
import {CountryList} from './components/country-list';

export const Home = () => {
  const {loading} = useGeneralContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <SearchBar />
      <HorizontalLine />
      <CountryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
