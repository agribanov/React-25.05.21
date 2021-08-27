import { createContext, useState } from 'react';

export const LanguangeContext = createContext(null);

function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');

    function toggleLanguage() {
        setLanguage(language === 'en' ? 'ru' : 'en');
    }

    const value = { language, toggleLanguage };

    return (
        <LanguangeContext.Provider value={value}>
            {children}
        </LanguangeContext.Provider>
    );
}

export default LanguageProvider;

// console.log(LanguangeContext);
