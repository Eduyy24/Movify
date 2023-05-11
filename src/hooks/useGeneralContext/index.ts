import {useContext} from 'react';
import {GeneralContext, IContextProps} from '../../context/general-context';

export const useGeneralContext = (): IContextProps =>
  useContext(GeneralContext);
