import {
    Box,
    Button,
    Container,
    FormControl,
    Input,
    InputLabel,
    TextField,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import PrimaryButton from '../../common/components/PrimaryButton';

import useStyles from '../../common/hooks/useStyles';
import useUser from '../hooks/useUser';

import { Formik, Form, Field } from 'formik';
import FormField from '../../common/components/FormField';

export function UserEditForm() {
    const { userId } = useParams();
    const history = useHistory();

    const classes = useStyles();
    const { user, saveUser, deleteUser } = useUser(
        userId === 'add' ? null : userId
    );
    const [formState, setFormState] = useState(user);

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        saveUser(formState).then(closeForm);
    }

    function handleDelete() {
        deleteUser().then(closeForm);
    }

    function closeForm() {
        history.goBack();
    }

    // useEffect(() => {
    //     setFormState(user);
    // }, [user]);

    function validate(values) {
        if (!values.name) {
            return { name: 'Name is Required' };
        }
    }

    return (
        <Container maxWidth="sm">
            <Formik
                initialValues={user}
                enableReinitialize
                onSubmit={handleSubmit}
                validate={validate}
            >
                <Form>
                    <FormField label="Name" name="name" />
                    <FormField label="Phone" name="phone" />
                    <FormField label="Email" name="email" />
                    <FormField label="Website" name="website" />
                    <Box my={2}>
                        <PrimaryButton variant="outlined" type="submit">
                            Save
                        </PrimaryButton>
                        <Button
                            variant="contained"
                            className={classes.usersFormButton}
                            onClick={closeForm}
                        >
                            Cancel
                        </Button>
                        {user.id ? (
                            <Button
                                variant="contained"
                                className={classes.usersFormButton}
                                color="secondary"
                                onClick={handleDelete}
                            >
                                Delete
                            </Button>
                        ) : null}
                    </Box>
                </Form>
            </Formik>
            {/* <form autoComplete="off" onSubmit={handleSubmit}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="phone">Phone</InputLabel>
                    <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="website">Website</InputLabel>
                    <Input
                        id="website"
                        name="website"
                        value={formState.website}
                        onChange={handleChange}
                    />
                </FormControl>
                <Box my={2}>
                    <PrimaryButton variant="outlined" type="submit">
                        Save
                    </PrimaryButton>
                    <Button
                        variant="contained"
                        className={classes.usersFormButton}
                        onClick={closeForm}
                    >
                        Cancel
                    </Button>
                    {user.id ? (
                        <Button
                            variant="contained"
                            className={classes.usersFormButton}
                            color="secondary"
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    ) : null}
                </Box>
            </form> */}
        </Container>
    );
}
