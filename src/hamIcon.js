import React,{Component} from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

export default class Hamburger extends Component {

    toggleDrawer=()=>{
      
      this.props.navigationProps.toggleDrawer();
  
    }
   
    render() {
   
      return (
   
        <View style={{flexDirection: 'row'}}>
   
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >

            {/*Retrieve icon from react-native-elements library*/}
            <Icon name="list" type="SimpleLineIcons" style={{ width: 25, height: 25, marginLeft: 5}} />
  
          </TouchableOpacity>
   
        </View>
      
      );
    
    
    }
  }