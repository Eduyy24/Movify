import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../../styles';
import Countries from 'countries-capitals';

interface Props {
  country: string;
}

export const CountryCard: FC<Props> = ({country}) => {
  const countries = new Countries();
  const countryInfo = countries.byName(country);
  const countryJson = countryInfo.toJson();
  return (
    <View style={styles.container}>
      <View style={styles.containerGo}>
        <Text style={styles.txtGO}>GO</Text>
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.txtName}>{country}</Text>
        <Text style={styles.txtCapital}>{countryJson[0]?.city}</Text>
        <Text style={styles.txtRegion}>{countryJson[0]?.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 120,
    padding: 12,
    backgroundColor: COLORS.CLEAR,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  containerGo: {
    padding: 8,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 8,
    marginRight: 12,
  },
  containerInfo: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-evenly',
  },
  txtGO: {
    fontSize: 50,
    color: COLORS.CLEAR,
  },
  txtName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.BROWN,
  },
  txtCapital: {
    fontSize: 16,
    color: COLORS.BROWN,
  },
  txtRegion: {fontSize: 20, color: COLORS.ACCENT},
});
