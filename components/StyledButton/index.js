//import liraries
import React from 'react';
import { View,Text, Pressable} from 'react-native';
import styles from './styles';

// create a component
const StyledButton = (props) => {

    const {type, content, onPress} = props;
    
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};


//make this component available to the app
export default StyledButton;
