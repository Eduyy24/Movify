import React from 'react';
import {useGeneralContext} from '../../../../hooks/useGeneralContext';
import {SearchInput} from '../../../../components/search-bar';

export const SearchBar = () => {
  const {setValueSearch} = useGeneralContext();
  const onChangeSearch = (text: string) => {
    setValueSearch(text);
  };

  return <SearchInput onChangeSearch={onChangeSearch} />;
};
