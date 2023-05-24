import React from 'react'
import { createBottomNavigator } from '@react-navigation/bottom-tabs'
import Feeds from '../screens/Feeds'
import CreatePost from '../screens/CreatePost'

const Tab = createBottomNavigator

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOption={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feeds') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';

                    } else if (route.name === 'CreatePost') {
                        iconName = focused ? 'create' : 'create-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Feeds" component={Feeds} />
            <Tab.Screen name="CreatePost" component={CreatePost} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator