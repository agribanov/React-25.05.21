import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory, withRouter } from 'react-router-dom';
// import LanguangeContext from '../../common/providers/LanguageProvider';
import useUserDetails from '../hooks/useUserDetails';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import userDetailsSchema from '../validation/userDetailsSchema';
import SubmitButton from '../../common/components/form/SubmitButton';
import useLanguage from '../../common/hooks/useLanguage';

function UserDetailsPage({
    history,
    match: {
        params: { id },
    },
}) {
    const { details } = useUserDetails(id);
    // if (details) {
    //     details.name = '';
    // }

    const { language } = useLanguage();

    function onBackClick() {
        history.goBack();
    }

    function onSubmit(values) {
        console.log(values);
    }

    // function validate(values) {
    //     const errors = {};

    //     if (!values.name.length) {
    //         errors.name = 'Name is required';
    //     }

    //     if (!values.email.length) {
    //         errors.email = 'Email is required';
    //     }

    //     console.log(values, errors);

    //     return errors;
    // }

    // function validateName(value) {
    //     if (!value.length) {
    //         return 'Name is required';
    //     }
    // }

    // function validateEmail(value) {
    //     if (!value.length) {
    //         return 'Email is required';
    //     }
    // }

    return details ? (
        <div>
            <h2>User details</h2>
            <Formik
                initialValues={details}
                onSubmit={onSubmit}
                validationSchema={userDetailsSchema}
            >
                <Form>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <Field id="name" name="name" />
                        <ErrorMessage name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <Field id="email" name="email" />
                        <ErrorMessage name="email" />
                    </div>

                    <SubmitButton />
                    <button type="button" onClick={onBackClick}>
                        {language === 'en' ? 'Back' : 'Назад'}
                    </button>
                </Form>
            </Formik>
        </div>
    ) : (
        'Loading...'
    );
}

export default withRouter(UserDetailsPage);
