import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



function SavedScreen() {
    return (
      <View style={styles.container}>
        <Text>Saved Screen</Text>
      </View>
    );
  }
  
  const Stack = createStackNavigator();




export default function Saved(props) {
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
              name="Saved"
              component={SavedScreen}
              options={{ title: "Saved" }}
            />
          </Stack.Navigator>
        
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
});
