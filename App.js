import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import { View, Text, StyleSheet, TextInput ,SafeAreaView, ScrollView, Image, Button, Alert } from 'react-native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
return (
    <Tab.Navigator
    
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#c9c9c9',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'md-home' : 'md-home-outline';
            } else if (route.name === 'Product') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            } else if (route.name === 'Software Version') {
              iconName = focused ? 'apps' : 'apps-outline';
            } else if (route.name === 'Register') {
              iconName = focused ? 'ios-call' : 'ios-call-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={"#c9c9c9"} />;
          },
          //tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: '#c9c9c9',

        })}

    >
          <Tab.Screen name="Home" component={TabA} options={{ headerShown: false }}/>
          <Tab.Screen name="Product" component={TabB} options={{ headerShown: false }}/>
          <Tab.Screen name="Software Version" component={TabC} options={{ headerShown: false }}/>
          <Tab.Screen name="Register" component={TabD} options={{ headerShown: false }}/>
    </Tab.Navigator>
);
}

function TabA({navigation}) {
  return (
    
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <SafeAreaView>
        <ScrollView>
      <Image source ={require ('./assets/20210712_132137.jpg')}>
     </Image>
     <Text /> 
     <MaterialCommunityIcons  name="home" size={60} color="#454545" />
      <Text>
        Home Page
      </Text>
      <Text />
      <Button title ='Learn more' onPress={() => Alert.alert('Coming Soon.')} color="grey"></Button>
      <Text/>
        </ScrollView>
        </SafeAreaView>
    </View>
  );
}


function TabB({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Ionicons name="md-information-circle-outline" size={48} color="grey" />
    <Text />
      <Text>
        Product
      </Text>
    </View>
  );
}

function TabC({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
    <AntDesign name="exclamationcircle" size={48} color="grey" />
    <Text />
      <Text>
        Cilck Here To Check Version Software
      </Text>
      <Text />
      <Button title ='Cilck Here' onPress={() => Alert.alert('Version 2.0.0 (Beta)')} color="grey"></Button>
    </View>
  );
}

function TabD({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        Register
      </Text>
    </View>
  );
}




export default function App() {
return(

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Product" component={TabB} />
        <Drawer.Screen name="Software Version" component={TabC} />
        <Drawer.Screen name="Register" component={TabD} />
      </Drawer.Navigator>
    </NavigationContainer>

  /*
    <NavigationContainer>
    <HomeScreen />
  </NavigationContainer>
  */
);
}