//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from './styles';

// create a component
const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
        </View>
    );
};


//make this component available to the app
export default Header;
