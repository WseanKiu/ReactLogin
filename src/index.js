import React from 'react';
import { Provider } from 'react-redux';

import LoginForm from './containers/LoginForm';
import store from './config/store';

export default () => (
    <Provider store={store}><LoginForm/></Provider>
); 