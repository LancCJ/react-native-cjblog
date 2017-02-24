/**
 * Created by lanccj on 17/2/24.
 */
/**
 * Created by lanccj on 17/1/19.
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
    ScrollView,
    Platform
} from 'react-native';

import {Icon} from 'react-native-elements'

import CommonCell from '../compo/CommonCell'
import AppUrl   from '../common/AppUrl'

var Dimensions = require('Dimensions')
var {width,height}=Dimensions.get('window')

/**
 *我的
 */
export default class MinePage extends Component {
    renderTopUpView(){
        return (
            <View style={[styles.TopUpViewStyle,{flexDirection:'row'}]}>
                <View style={[{flexDirection:'row',justifyContent:'center',alignItems:'center'}]}>
                    <Image source={{uri:'http://lanccj.synology.me:7070/blog/attached/avatar/default.jpg'}} style={{marginLeft:width*0.04,width:width*0.15,height:width*0.15,borderRadius:width*0.15/2}}/>
                    <View style={[{marginLeft:width*0.02,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}]}>
                        <Text style={[{color:'#FFFFFF',fontSize:20}]}>陈健</Text>
                    </View>
                </View>
                <View style={[{marginRight:width*0.04,justifyContent:'center',alignItems:'center'}]}>
                    <Icon type='ionicon' color={'#F0EBF3'} name='ios-arrow-forward-outline' size={30} />
                </View>
            </View>
        )
    }
    renderTopDownView(){
        return (
            <View style={[styles.TopDownViewStyle,{flexDirection:'row'}]}>
                <View style={styles.TopDownTextViewStyle}>
                    <Text style={styles.TopDownTextStyle}>100</Text>
                    <Text style={styles.TopDownTextStyle}>博客</Text>
                </View>
                <View style={[styles.TopDownTextViewStyle,{borderLeftWidth:0.5,borderLeftColor:'#DEDEDE',borderRightWidth:0.5,borderRightColor:'#DEDEDE'}]}>
                    <Text style={styles.TopDownTextStyle}>12</Text>
                    <Text style={styles.TopDownTextStyle}>美图</Text>
                </View>
                <View style={styles.TopDownTextViewStyle}>
                    <Text style={styles.TopDownTextStyle}>50</Text>
                    <Text style={styles.TopDownTextStyle}>视频</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    contentInset={{top:-height*0.16*2}}
                    contentOffset={{y:height*0.16*2}}
                >
                <View style={styles.navBarStyle}>

                            <View style={styles.TopViewStyle}>
                                {this.renderTopUpView()}
                                {this.renderTopDownView()}
                            </View>

                            <View style={[{marginTop:height*0.02}]}>
                                <CommonCell id='cooperation'     name='信息修改' type="button"  iconName="info" />
                            </View>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EDEDF3"
    },
    navBarStyle:{
        height:height*0.06+(Platform.OS==='ios'?20:0),
        backgroundColor:'#FA5600'
    },
    TopUpViewStyle: {
        width: width,
        backgroundColor: "#FA5600",
        height:height*0.1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:Platform.OS==='ios'?height*0.16*2:0
    },
    TopDownViewStyle: {
        width: width,
        backgroundColor: "#F4765B",
        height:height*0.06,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'#DEDEDE',
        borderBottomWidth:0.5
    },
    TopDownTextViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    TopDownTextStyle:{
        color:'#FFFFFF'
    },
    TopViewStyle:{
        height:Platform.OS==='ios'?height*0.16*3:height*0.16,
        backgroundColor: "#FA5600",
        marginTop:Platform.OS==='ios'?20:0,
    }
});

