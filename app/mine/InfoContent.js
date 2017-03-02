/**
 * Created by lanccj on 17/2/24.
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
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';

import { Icon } from 'react-native-elements'
import {Actions} from 'react-native-router-flux'

var Dimensions = require('Dimensions')
var {width,height}=Dimensions.get('window')

/**
 *用户信息
 */
export default class InfoContent extends Component {
    renderNavBar(){
        return (
            <View style={styles.navBarStyle}>
                <View style={styles.navBarContentStyle}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <View style={[styles.topIconStyles,{paddingLeft:width*0.04}]}>

                            <View>
                                <Icon type='ionicon' color={'#FFFFFF'} name='ios-arrow-back-outline' size={30} />
                            </View>

                        </View>
                    </TouchableOpacity>
                    {/**中间**/}
                    <View>
                        <Text style={styles.topTextStyles}>用户信息</Text>
                    </View>
                    {/**右边**/}
                    <View style={[styles.topIconStyles,{paddingRight:width*0.04}]}>
                        <TouchableOpacity>
                            <View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#FFFFFF"
    },
    navBarStyle:{
        height:height*0.08+(Platform.OS==='ios'?20:0),
        backgroundColor:'#FA5600'
    },
    navBarContentStyle:{
        marginTop:Platform.OS==='ios'?20:0,
        height:height*0.08,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',

    },
    topTextStyles:{
        fontSize:15,
        color:'#FFFFFF'
    },
    topIconStyles:{
        height:height*0.05,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    contentStyle:{
        width:width
    },
    infoStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:width*0.025
    },
    infoTextStyle:{
        fontSize:10,
        color:'#5E6977'
    },
    contentTextStyle:{
        fontSize:10,
        color:'#020202'
    }
});
