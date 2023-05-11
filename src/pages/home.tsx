import React from 'react';
import {SearchBar} from '../components/search-bar';
import {HorizontalLine} from '../components/horizontal-line';
import {StyleSheet, View} from 'react-native';
import {Loading} from '../components/loading';
import {useGeneralContext} from '../hooks/useGeneralContext';

export const Home = () => {
  const {loading} = useGeneralContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <SearchBar />
      <HorizontalLine />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 1,
  },
});
