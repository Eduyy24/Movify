/* eslint-disable react-hooks/rules-of-hooks */
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import {getAuthToken, getCountries} from '../services';
import {Alert} from 'react-native';
import {ALERT_MSG} from '../utils/strings';
import useDebounce from '../hooks/useDebounce';

export interface IContextProps {
  loading: boolean;
  countryList: string[];
  countryListRender: string[];
  setValueSearch: Dispatch<SetStateAction<string>>;
}

export const GeneralContext = createContext<IContextProps>({
  loading: true,
  countryList: [],
  countryListRender: [],
  setValueSearch: () => {},
});

export const valueGeneralContext = (): IContextProps => {
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string>('');
  const [valueSearch, setValueSearch] = useState<string>('');
  const [countryList, setCountryList] = useState<string[]>([]);
  const [countryListRender, setCountryListRender] = useState<string[]>([]);
  const debunceValue = useDebounce(valueSearch, 300);

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

  useEffect(() => {
    if (!debunceValue) {
      setCountryListRender(countryList);
    } else {
      const list = countryList.filter(country =>
        country.toLowerCase().includes(debunceValue.toLowerCase()),
      );
      setCountryListRender(list);
    }
  }, [debunceValue, countryList]);

  return {
    loading,
    countryList,
    countryListRender,
    setValueSearch,
  };
};
