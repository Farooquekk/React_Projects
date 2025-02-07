import { createContext, useState } from 'react';

// firstly I am creating the context

const LanguageContext = createContext();

// now creating the Provider component

export const LanguageProvider = ({ children }) => {
    // state to store global selected language
    const [language, setLanguage] = useState('en');

    // now updating a language

    const changeLanguage = (newLan) => {
        setLanguage(newLan)
        
    };

    // now returning the value
    return (<LanguageContext.Provider value={{ language, changeLanguage }}>
        {children}

    </LanguageContext.Provider>);

};

// now exporting the context 
export default LanguageContext;