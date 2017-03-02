/**
 * Created by lanccj on 17/3/2.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Alert
} from 'react-native';
/**
 *
 */
export default class UpdatePwd extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[{color:"red"}]}>修改密码界面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    }
});
