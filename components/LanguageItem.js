import {
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { Feather } from '@expo/vector-icons';

export default LanguageItem = (props) => {
  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity style={styles.container}>
        <View style = {styles.iconContainer}>
            {props.selected &&
                <Feather name="check" size={18} color="black"/>
            }
        
        </View>
      
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderColor: "black",
    borderWidth: 0.3,
    borderRadius: 10,
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
  },
  viewContainer: {
    paddingVertical: 3,
    paddingHorizontal: 4,
  },
  iconContainer: {
    paddingRight : 7,
    alignItems: 'center',
    justifyContent: 'center',
    width : 40
  },
});
