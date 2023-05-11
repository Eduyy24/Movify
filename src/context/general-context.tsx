/* eslint-disable react-hooks/rules-of-hooks */
import {createContext, useEffect, useState} from 'react';

export interface IContextProps {
  loading: boolean;
}

export const GeneralContext = createContext<IContextProps>({
  loading: true,
});

export const valueGeneralContext = (): IContextProps => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return {
    loading,
  };
};
