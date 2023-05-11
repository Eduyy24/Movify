/* eslint-disable react-hooks/rules-of-hooks */
import {createContext, useEffect, useState} from 'react';
import {getAuthToken} from '../services';
import {Alert} from 'react-native';

export interface IContextProps {
  loading: boolean;
  countryList: ICountryData[];
}

export const GeneralContext = createContext<IContextProps>({
  loading: true,
  countryList: [],
});

export const valueGeneralContext = (): IContextProps => {
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string>('');
  const [countryList, setCountryList] = useState<ICountryData[]>([]);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const tokenGenerated = await getAuthToken();
        setToken(tokenGenerated);
      } catch (error) {
        // Sentry
        Alert.alert('Error', 'Ha ocurrido un error inesperado');
      }
    };
    generateToken();
  }, []);

  useEffect(() => {
    const fetchCountryList = async () => {
      try {
        // setCountryList(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountryList();
  }, [token]);

  return {
    loading,
    countryList,
  };
};
