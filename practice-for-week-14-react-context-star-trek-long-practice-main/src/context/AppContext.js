import { createContext, useContext, useState } from 'react';
import { initialCards } from '../mockdata/CardData';

export const AppContext = createContext();

export const useAppContext = useContext(AppContext);

export default function AppContextProvider({children}) {
    const [applicationState, setApplicationState] = useState()

    return (
        <AppContext.Provider value={{cards: initialCards}}>
            {children}
        </AppContext.Provider>
    )
}