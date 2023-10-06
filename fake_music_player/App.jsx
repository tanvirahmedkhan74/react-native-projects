import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class App extends React.Component {
    render() {
        const name = '01 - Mrittu Udpadon Karkhana'
        
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>
                        <Text style={styles.subtitle}>
                            Playing: 
                        </Text> {name}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        margin: 10,
        marginTop: 100,
        backgroundColor: '#e67e22',
        borderRadius: 7
    },
    innerContainer: {
        backgroundColor: '#d35400',
        height: 60,
        width: 250,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    title : {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 12,
        left: 10,
    },
    subtitle : {
        fontWeight: 'bold'
    }
})