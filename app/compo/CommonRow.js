/**
 * Created by lanccj on 17/1/23.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Alert,
    TouchableHighlight,
    Switch
} from 'react-native';

import {Icon} from 'react-native-elements'

var Dimensions = require('Dimensions')
var {width,height}=Dimensions.get('window')

/**
 * 横向
 */
export default class CommonCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn:true
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={{uri:'order1'}} style={{width:width*0.08,height:width*0.07}}/>
                    <Text style={{fontSize:10}}>待付款</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={{uri:'order2'}} style={{width:width*0.08,height:width*0.07}}/>
                    <Text style={{fontSize:10}}>待使用</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={{uri:'order3'}} style={{width:width*0.08,height:width*0.07}}/>
                    <Text style={{fontSize:10}}>待评价</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={{uri:'order4'}} style={{width:width*0.08,height:width*0.07}}/>
                    <Text style={{fontSize:10}}>退款/售后</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        backgroundColor: "#FFFFFF",
        height:height*0.1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderBottomColor:'#DEDEDE',
        borderBottomWidth:0.5
    }
});
