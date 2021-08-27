import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import classnames from 'classnames';

import {
    createTheme,
    makeStyles,
    ThemeProvider,
} from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
});

const useClasses = makeStyles({
    hello: {
        backgroundColor: 'red',
    },
    secondClass: {
        color: 'blue',
    },
});

function Form() {
    const { hello, secondClass } = useClasses();
    return (
        <Box m={10} className={classnames(hello, secondClass)}>
            hello
        </Box>
    );
}

export default Form;
