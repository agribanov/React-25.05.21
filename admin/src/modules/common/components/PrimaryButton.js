import { Button } from '@material-ui/core';
import React from 'react';
import useStyles from '../hooks/useStyles';

function PrimaryButton({ children, ...props }) {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            {...props}
            className={classes.usersFormButton}
            color="primary"
        >
            {children}
        </Button>
    );
}

export default PrimaryButton;
