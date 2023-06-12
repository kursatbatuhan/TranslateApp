import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Octicons, Ionicons, AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';


function HomeScreen() {

    const [resultText, setResultText] = useState("asdf");
    const [enteredText, setEnteredText] = useState("");
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            keyboardDidShow
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            keyboardDidHide
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const keyboardDidShow = () => {
        setKeyboardVisible(true);
    };

    const keyboardDidHide = () => {
        setKeyboardVisible(false);
    };

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

            {isKeyboardVisible && (
                <View style={styles.buttonsContainer} >
                    <TouchableOpacity style={styles.soundButtonsContainer} disabled={enteredText === ""}>
                        <Feather name="volume-2" size={24} color={enteredText !== "" ? color = '#102b46' : color = '#acacac'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.soundButtonsContainer} disabled={enteredText === ""}>
                        <Feather name="book-open" size={24} color={enteredText !== "" ? color = '#102b46' : color = '#acacac'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.soundButtonsContainer} disabled={enteredText === ""}>
                        <Feather name="share" size={24} color={enteredText !== "" ? color = '#102b46' : color = '#acacac'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.soundButtonsContainer} disabled={enteredText === ""}>
                        <Feather name="copy" size={24} color={enteredText !== "" ? color = '#102b46' : color = '#acacac'} />
                    </TouchableOpacity>
                </View>

            )}

            <View style={styles.resultContainer}>
                <TouchableOpacity onPress={Keyboard.dismiss} style={{ flex: 1, backgroundColor: "red" }}>
                    <Text style={styles.resultText}>{resultText}</Text>
                </TouchableOpacity>

            </View>


            <View style={styles.historyContainer}>
                <Text>History Area

                </Text>
            </View>
        </View>
    );
}

function LanguageSelect({ navigation, route }) {
    const params = route.params || {};
    const { title } = route.params;

    useEffect(() => {
        navigation.setOptions({
            headerTitle: title
        })
    })
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>LanguageSelect</Text>
        </View>
    );
}

const Stack = createStackNavigator();

export default function Home(props) {
    const navigation = useNavigation();

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
                        <TouchableOpacity
                            style={styles.langOpacityLeft}
                            onPress={() => navigation.navigate("Language", { title: 'Translate from' })}
                        >
                            <Text style={styles.headerText}>English</Text>
                        </TouchableOpacity>
                    ),
                    headerRight: (props) => (
                        <TouchableOpacity
                            style={styles.langOpacityRight}
                            onPress={() => navigation.navigate("Language", { title: 'Translate to' })}
                        >
                            <Text style={styles.headerText}>Turkish</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Group screenOptions={{
                presentation: 'modal'
            }} >
                <Stack.Screen
                    name='Language'
                    component={LanguageSelect}
                />
            </Stack.Group>


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

        backgroundColor: '#fff'
    },
    resultText: {
        letterSpacing: 0.3,
        color: '#202124',
        flex: 1,
        padding: 10,
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
        flex: 1,
        padding: 10
    }
});
