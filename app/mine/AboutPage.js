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
 *关于界面
 */
export default class AboutPage extends Component {
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
                        <Text style={styles.topTextStyles}>关于</Text>
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

                <View style={[{alignItems:'center'}]}>
                    <Image source={{uri:'http://lanccj.synology.me:7070/blog/images/footer/64.png'}} style={{marginTop:width*0.1,width:width*0.4,height:width*0.4,borderRadius:width*0.4/2}}/>
                    <Text>程序名称:CJ博客</Text>
                    <Text>程序版本:20170302150855</Text>
                    <Text>程序依赖组件:</Text>
                    <Text>react-native-app-intro</Text>
                    <Text>react-native-elements</Text>
                    <Text>react-native-htmlview</Text>
                    <Text>react-native-lightbox</Text>
                    <Text>react-native-modalbox</Text>
                    <Text>react-native-router-flux</Text>
                    <Text>react-native-splash-screen</Text>
                    <Text>react-native-vector-icons</Text>
                    <Text>react-native-scrolltotop</Text>
                    <Text>react-native-message-bar</Text>
                    <Text>react-native-video</Text>
                    <Text>源码地址:</Text>
                    <Text>github.com/LancCJ/react-native-cjblog.git</Text>
                </View>
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
