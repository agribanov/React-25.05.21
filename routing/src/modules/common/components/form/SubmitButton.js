import { useFormikContext } from 'formik';
import React, { useContext } from 'react';
import useLanguage from '../../hooks/useLanguage';
import LanguangeContext from '../../providers/LanguageProvider';

function SubmitButton() {
    const { language } = useLanguage();

    const formik = useFormikContext();

    return (
        <button type="submit" disabled={!formik.isValid}>
            {language === 'en' ? 'Save' : 'Сохранить'}
        </button>
    );
}

export default SubmitButton;
