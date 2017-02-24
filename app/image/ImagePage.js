/**
 * Created by lanccj on 17/2/24.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
/**
 *美图列表
 */
export default class ImagePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[{color:"red"}]}>美图列表</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent:"center",
        alignItems:"center"
    }
});
