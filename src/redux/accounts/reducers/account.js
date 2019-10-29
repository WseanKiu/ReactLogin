import { REMEMBER_CREDENTIALS, rememberUserCredentials } from '../actions/account';

const initialState = {
    email: '',
    password: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REMEMBER_CREDENTIALS:
            return {
                ...state,
                email: action.email || '',
                password: action.password || '',
            };
        default:
            return state;
    }
};

export default reducer;