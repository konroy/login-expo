import React from 'react';
import {Provider} from 'react-redux';
import {RootAuthSwitch} from './src/router';
import store from './src/redux';

export default class App extends React.Component{
    render(){
        return( 
            <Provider store={store}>{/*Makes the Redux store available to the connect() calls in the component hierarchy below.*/}
                <RootAuthSwitch/>
            </Provider>
        )
    }
}
