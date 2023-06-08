import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



function SavedScreen() {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
      </View>
    );
  }
  
  const Stack = createStackNavigator();




export default function Settings(props) {
    return (
        
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#102b46',
              },
              headerTintColor: '#fff',
              
            }}
          >
            <Stack.Screen
              name="Settings"
              component={SavedScreen}
              options={{ title: "Settings" }}
            />
          </Stack.Navigator>
        
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
});
