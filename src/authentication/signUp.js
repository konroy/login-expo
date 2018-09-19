'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { signup } from '../redux/actions/auth';

class SignUp extends Component{
    
    static navigationOptions = {
        title: 'Sign Up',
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
            password: '',
            id: '',
            namaPemohon: '',
            jawatan: '',
            lokasi: '',
            unit: '',
            phone: '',
            email: '',
        }
    }

    UserSignUpFunction=()=>{
        this.props.onSignUp(
            this.state.username, 
            this.state.password,
            this.state.id,
            this.state.namaPemohon,
            this.state.jawatan,
            this.state.lokasi,
            this.state.unit,
            this.state.phone,
            this.state.email
            );//calls on onSignUp function and pass parameters
        this.props.navigation.navigate('App')//then navigate to App inside the Switch Navigator
    }

    render(){
        return(
            <View style={styles.MainContainer}>
                <ScrollView>
                <Text style={styles.TextComponentStyle}>Sign Up</Text>
                <TextInput
                    placeholder="Enter Username"
                    onChangeText = {username => this.setState({username})}
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Enter Password"
                    onChangeText = {password => this.setState({password})}
                    style={styles.TextInputStyleClass}
                    secureTextEntry={true}
                />
                <TextInput
                    placeholder="Enter ID"
                    onChangeText = {id => this.setState({id})}
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Enter Nama Pemohon"
                    onChangeText = {namaPemohon => this.setState({namaPemohon})}
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Enter Jawatan"
                    onChangeText = {jawatan => this.setState({jawatan})}
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Enter Lokasi"
                    onChangeText = {lokasi => this.setState({lokasi})}
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Enter Unit"
                    onChangeText = {unit => this.setState({unit})}
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Enter Phone"
                    onChangeText = {phone => this.setState({phone})}
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Enter Email"
                    onChangeText = {email => this.setState({email})}
                    style={styles.TextInputStyleClass}
                />
                <Button
                    title="Sign Up"
                    onPress={this.UserSignUpFunction}
                    color="#2196F3"
                />
                <Button
                    title="Already have an account? Log in instead!"
                    onPress={() => {this.props.navigation.navigate('Login')}}
                    color="#2196F3"
                />
                </ScrollView>
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
            onSignUp: (
                username, 
                password,
                id,
                namaPemohon,
                jawatan,
                lokasi,
                unit,
                phone,
                email
                ) => { 
                dispatch(signup(
                    username, 
                    password,
                    id,
                    namaPemohon,
                    jawatan,
                    lokasi,
                    unit,
                    phone,
                    email
                    )); }
        }
}
     
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);