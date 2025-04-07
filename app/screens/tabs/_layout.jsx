import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarLabel: () => null,
                tabBarStyle: {
                    height: 80,
                    paddingBottom: 5,
                    paddingTop: 10,
                },
            }}
        >
            <Tabs.Screen
                name='home'
                options={{
                    title: 'Home',
                    tabBarIcon: () => <MaterialCommunityIcons name='home-roof' size={24} />,
                }}
            />

            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    tabBarIcon: () => <FontAwesome5 name='user-tie' size={24} />,
                }}
            />

            <Tabs.Screen
                name='add'
                options={{
                    title: 'Add',
                    tabBarIcon: () => <MaterialIcons name='add' size={24} />,
                }}
            />

            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    tabBarIcon: () => <FontAwesome5 name='search-dollar' size={24} />,
                }}
            />

            <Tabs.Screen
                name='notification'
                options={{
                    title: 'Notification',
                    tabBarIcon: () => <MaterialIcons name='notifications-active' size={24} />,
                }}
            />

        </Tabs>
    );
}