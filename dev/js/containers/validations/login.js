export const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 3) {
        errors.password = 'Must be 4 characters or more'
    } else if (values.password.length > 10) {
        errors.password = 'Must be less 10 characters'
    }

    return errors
}