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

var Dimensions = require('Dimensions')
var {width,height}=Dimensions.get('window')

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
        width:width/2,
        height:height/2,
        backgroundColor: "#FFFFFF"
    }
});
