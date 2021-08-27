import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string().required().max(25).label(),
    email: yup.string().email().required(),
    adsress: yup.object().shape({}),
});
