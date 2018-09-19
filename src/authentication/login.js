'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { login } from '../redux/actions/auth';

class LoginPage extends Component{
    
    static navigationOptions = {
        title: 'Login',
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1
        },
        headerStyle: {
          backgroundColor: 'skyblue',
        },
        headerTintColor: '#fff',
    };

    constructor(props){
        super(props)
        this.state={
            username: '',
            userPassword: '',
        }
    }

    UserLoginFunction=()=>{
        this.props.onLogin(this.state.username, this.state.userPassword);//calls on onLogin function and pass username and password as parameters
        this.props.navigation.navigate('App')//then navigate to App inside the Switch Navigator
    }

    render(){
        return(
            <View style={styles.MainContainer}>
                <Text style={styles.TextComponentStyle}>Log In</Text>
                <TextInput
                    placeholder="Enter Username"
                    onChangeText = {username => this.setState({username})}
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Enter Password"
                    onChangeText = {userPassword => this.setState({userPassword})}
                    style={styles.TextInputStyleClass}
                    secureTextEntry={true}
                />
                <Button
                    title="Login"
                    onPress={this.UserLoginFunction}
                    color="#2196F3"
                />
                <Button
                    title="Don't have an account? Sign Up!"
                    onPress={() => {this.props.navigation.navigate('SignUp')}}
                    color="#2196F3"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
 
    MainContainer :{
     
        justifyContent: 'center',
        flex:1,
        margin: 10,
    },
     
    TextInputStyleClass: {
     
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 5 ,
    },
    
    TextComponentStyle: {
        fontSize: 20,
        color: "#000",
        textAlign: 'center', 
        marginBottom: 15
     }
    });

    const mapStateToProps = (state, ownProps) => {
        return {
            isLoggedIn: state.auth.isLoggedIn
        };
    }
     
    const mapDispatchToProps = (dispatch) => {
        return {
            onLogin: (username, userPassword) => { dispatch(login(username, userPassword)); }
        }
    }
     
    export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);