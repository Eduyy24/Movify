/* eslint-disable react-hooks/rules-of-hooks */
import {createContext, useEffect, useState} from 'react';
import {getAuthToken, getCountries} from '../services';
import {Alert} from 'react-native';
import {ALERT_MSG} from '../utils/strings';

export interface IContextProps {
  loading: boolean;
  countryList: string[];
}

export const GeneralContext = createContext<IContextProps>({
  loading: true,
  countryList: [],
});

export const valueGeneralContext = (): IContextProps => {
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string>('');
  const [countryList, setCountryList] = useState<string[]>([]);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const tokenGenerated = await getAuthToken();
        setToken(tokenGenerated);
      } catch (error) {
        // Sentry
        Alert.alert('Error', ALERT_MSG.DEFAULT);
      }
    };
    generateToken();
  }, []);

  useEffect(() => {
    const fetchCountryList = async () => {
      if (!token) {
        return;
      }

      try {
        const list = await getCountries(token);
        setCountryList(list);
        setLoading(false);
      } catch (error) {
        Alert.alert('Error', ALERT_MSG.DEFAULT);
      }
    };
    fetchCountryList();
  }, [token]);

  return {
    loading,
    countryList,
  };
};
