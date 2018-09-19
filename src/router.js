import React from 'react';
import {
    View,
} from 'react-native';
import {
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    NavigationActions,
    DrawerItems,
} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Profile from './screens/profile';
import Lists from './screens/list';
import Explore from './screens/explore';
import Hamburger from './hamIcon';
import Login from './authentication/login';
import SignUp from './authentication/signUp';

//make a profile stack
export const ProfileStack = createStackNavigator({
    Profile:{
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            title: 'Profile',
            headerLeft : <Hamburger navigationProps={ navigation }/>,//left of header there is hamburger icon
   
            headerStyle: {
              backgroundColor: 'skyblue'
            },
            headerTintColor: '#fff',
        })
    },
});

//make a explore stack
export const ExploreStack = createStackNavigator({
    Explore:{
        screen:Explore,
        navigationOptions: ({ navigation }) => ({
            title: 'Explore',
            headerLeft : <Hamburger navigationProps={ navigation }/>,//left of header there is hamburger icon
            
            headerStyle: {
              backgroundColor: 'skyblue'
            },
            headerTintColor: '#fff',
        })
    }
});

//make a explore stack
export const ListsStack = createStackNavigator({
    Lists:{
        screen:Lists,
        navigationOptions: ({ navigation }) => ({
            title: 'List',
            headerLeft : <Hamburger navigationProps={ navigation }/>,//left of header there is hamburger icon
            
            headerStyle: {
              backgroundColor: 'skyblue'
            },
            headerTintColor: '#fff',
        })
    }
})

//make a authentication stack
export const AuthStack = createStackNavigator({
    Login:{
        screen: Login,
    },
    SignUp:{
        screen: SignUp,
    }

})

//make a router of bottom tab navigator consisting of explore stack and list stack
export const TabsRoute = createBottomTabNavigator({
    Explore: {
        screen: ExploreStack,
        navigationOptions: {
            tabBarLabel: 'Explore',
            tabBarIcon: ({tintColor}) => <Icon name="ios-map" type="ionicon" size={28} color={tintColor}/>
            
        },
            
    },
    Lists: {
        screen: ListsStack,
        navigationOptions: {
            tabBarLabel: 'Lists',
            tabBarIcon: ({tintColor}) => <Icon name="list" type="entypo" size={28} color={tintColor}/>
        },
    },
},{
    order: ['Explore','Lists'],//init order of tab routes
    headerMode: null
});

//to enable route Explore>List>Profile>List again
export const CustomDrawerContent = (props) => (
    <View style={{ flex:1 ,flexDirection:'column'}}>
        <View style={{flex:0.94}}>

        <DrawerItems {...props} onItemPress={(navigation) => {
            if ( navigation.focused == false ){
                const navigateAction = NavigationActions.navigate({
                    routeName: navigation.route.routeName,
                });
                props.navigation.dispatch(navigateAction);
            }
        }} />

        </View>
    </View>
);

//make a drawer consisting of TabRoute and ProfileStack
export const DrawerRoute = createDrawerNavigator({
    Home:{
        screen: TabsRoute,
        navigationOptions:{
            drawerLabel: 'Home',
            drawerIcon: () => (
              <Icon name="ios-home" type="ionicon" size={28} />//get icon image from react-native-elements library
            )
        }
    },
    Profile: { 
        screen: ProfileStack,
        navigationOptions:{
          drawerLabel: 'Profile Page',
          drawerIcon: () => (
            <Icon name="ios-person" type="ionicon" size={28} />//get icon image from react-native-elements library
          ),
        }
      },
    
},{
    initialRouteName:'Home',//init starting route
    contentComponent: CustomDrawerContent //init the CustomDrawerContent
});

//make a Switch Navigator,
//To disable back functions after authentication
//Forces users to use logout button if they want to switch accounts
export const RootAuthSwitch = createSwitchNavigator(
    {
        Auth: AuthStack,
        App: DrawerRoute,
        
    },
    {
        initialRouteName: 'Auth',
    }
);