import { createContext, useContext, FC, useState, SetStateAction, Dispatch } from 'react';

interface AppContextProps {
    planet: string,
    setPlanet: Dispatch<SetStateAction<string>>
}

const AppContext = createContext<AppContextProps>({ planet: '', setPlanet: () => '' });

export const AppWrapper: FC = ({ children }) => {
    const [planet, setPlanet] = useState('mercury')
    const planetValue = { planet, setPlanet }

    return (
        <AppContext.Provider value={planetValue} >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
