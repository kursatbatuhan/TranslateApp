import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Octicons, Ionicons, AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons';

import { useState } from 'react';


function HomeScreen() {

    const [resultText, setResultText] = useState("");
    const [enteredText, setEnteredText] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    multiline
                    placeholder='Type or paste here to translate'
                    style={styles.inputText}
                    onChangeText={(text) => setEnteredText(text)}
                />
                <TouchableOpacity
                    style={styles.iconContainer}
                    disabled={enteredText === ""}
                >
                    <Ionicons
                        name="arrow-forward-circle-sharp"
                        size={30}
                        color={enteredText !== "" ? color = '#102b46' : color = '#acacac'}
                    />
                </TouchableOpacity>

            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.soundButtonsContainer} disabled={enteredText === ""}>
                    <Feather name="volume-2" size={24} color={enteredText !== "" ? color = '#102b46' : color = '#acacac'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.soundButtonsContainer}>
                    <Feather name="camera" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.soundButtonsContainer}>
                    <Feather name="folder" size={24} color="black" />
                </TouchableOpacity>


            </View>


            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>{resultText}</Text>


            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.soundButtonsContainer} disabled={enteredText === ""}>
                    <Feather name="volume-2" size={24} color={enteredText !== "" ? color = '#102b46' : color = '#acacac'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.soundButtonsContainer}>
                    <Feather name="bookmark" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={resultText === ""}
                    style={styles.soundButtonsContainer}
                >
                    <Ionicons name="copy-outline" size={24} color={resultText !== "" ? color = 'black' : color = '#acacac'}
                    />
                </TouchableOpacity>


            </View>
            <View style={styles.historyContainer}>

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
        backgroundColor: '#fff'
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

        backgroundColor: '#fff'
    },
    inputText: {
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        letterSpacing: 0.3,
        height: 150,
        color: '#202124',
        fontSize: 18,
        backgroundColor: '#fff'
    },
    iconContainer: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    resultContainer: {
        
        flexDirection: 'row',
        height: 150,
        paddingVertical: 15,
        backgroundColor: '#fff'
    },
    resultText: {
        letterSpacing: 0.3,
        color: '#202124',
        flex: 1,
        marginHorizontal: 20,
        fontSize: 18,
    },
    buttonsContainer: {
        borderBottomColor: '#f2f1f6',
        borderBottomWidth: 1,
        
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    soundButtonsContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,


    },

    historyContainer: {

    }
});
