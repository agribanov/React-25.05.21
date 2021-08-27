import { FormHelperText, InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { useField } from 'formik';
import React from 'react';

function FormField({ name, label = '', ...props }) {
    const [field, meta] = useField(name);
    return (
        <FormControl fullWidth error={!!meta.error}>
            <InputLabel htmlFor={field.name}>{label}</InputLabel>
            <Input id={field.name} {...field} {...props} />
            <FormHelperText>{meta.error}</FormHelperText>
        </FormControl>
    );
}

export default FormField;
