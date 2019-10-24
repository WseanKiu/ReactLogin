export const REMEMBER_CREDENTIALS = 'REMEMBER_CREDENTIALS';

export const rememberUserCredentials = (email, password) => ({
    type: REMEMBER_CREDENTIALS,
    email,
    password,
});