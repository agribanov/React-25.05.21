import { useContext } from 'react';
import { LanguangeContext } from '../providers/LanguageProvider';

export default function useLanguage() {
    const context = useContext(LanguangeContext);

    return context;
}
