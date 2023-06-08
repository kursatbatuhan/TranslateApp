import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Octicons ,Ionicons } from '@expo/vector-icons';
import { useState } from 'react';


function HomeScreen() {

    

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    multiline
                    placeholder='Type or paste here to translate'
                    style={styles.inputText}
                    onChangeText={(text) => console.log(text)}
                />
                <TouchableOpacity style = {styles.iconContainer}>
                <Ionicons name="arrow-forward-circle-sharp" size={48} color="#102b46" />
                </TouchableOpacity>
            </View>

            <View styles = {styles.resultContainer}>
                <Text style = {styles.resultText}>Some Translation Words</Text>
            </View>
        </View>
    );
}

const Stack = createStackNavigator();



export default function Home(props) {


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
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: (props) => (
                        <TouchableOpacity>
                            <Octicons name="arrow-switch" size={18} color="#fff" />
                        </TouchableOpacity>
                    ),
                    headerLeft: (props) => (
                        <TouchableOpacity style={styles.langOpacityLeft} >
                            <Text style={styles.headerText}>English</Text>
                        </TouchableOpacity>
                    ),
                    headerRight: (props) => (
                        <TouchableOpacity style={styles.langOpacityRight}>
                            <Text style={styles.headerText}>Turkish</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack.Navigator>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    language: {

    },
    headerText: {
        color: '#fff',
        fontSize: 18
    },
    langOpacityLeft: {
        paddingLeft: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    langOpacityRight: {
        paddingRight: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        backgroundColor: '#fff'
    },
    inputText: {
        flex : 1,
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        letterSpacing: 0.3,
        height: 100,
        color: '#202124',
        fontSize: 18,
        backgroundColor: '#fff'
    },
    iconContainer: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',asd

    },
    resultContainer: {

    },
    resultText: {

    }
});
