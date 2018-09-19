import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { logout } from '../redux/actions/auth';

class Profile extends React.Component {
  userLogout(e){
    this.props.onLogout();
    this.props.navigation.navigate('Auth');
    e.preventDefault();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{`Welcome ${this.props.username}`}</Text>
        <Button onPress={(e) => this.userLogout(e)} title="Logout"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.auth.username
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      onLogout: () => { dispatch(logout()); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);