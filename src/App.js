import React from "react";
import { StackNavigator } from "react-navigation";

import Home from './screens/home'
import Detail from './screens/detailMovie'

const AppNavigator = StackNavigator(
    {
        Home: { screen: Home },
        Detail: { screen: Detail },
    },
    {
        initialRouteName: "Home",
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default () =>
    <AppNavigator />;
