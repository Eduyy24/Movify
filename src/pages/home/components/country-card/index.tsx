import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../../styles';

interface Props {
  country: string;
}

export const CountryCard: FC<Props> = ({country}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerGo}>
        <Text style={styles.txtGO}>GO</Text>
      </View>
      <View>
        <Text style={styles.txtName}>{country}</Text>
        <Text style={styles.txtCapital}>{country}</Text>
        <Text style={styles.txtRegion}>{country}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    margin: 12,
    padding: 12,
    backgroundColor: COLORS.CLEAR,
    borderRadius: 12,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerGo: {
    padding: 8,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 8,
    marginRight: 12,
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
