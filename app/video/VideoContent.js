/**
 * Created by lanccj on 17/2/25.
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
    ScrollView,
    WebView
} from 'react-native';

import { Icon } from 'react-native-elements'
import {Actions} from 'react-native-router-flux'

var Dimensions = require('Dimensions')
var {width,height}=Dimensions.get('window')

/**
 *博客文章内容展示
 */
export default class VideoContent extends Component {
    renderNavBar(){
        return (
            <View style={styles.navBarStyle}>
                <View style={styles.navBarContentStyle}>
                    <View style={[styles.topIconStyles,{paddingLeft:width*0.04}]}>
                        <TouchableOpacity onPress={()=>Actions.pop()}>
                            <View>
                                <Icon type='ionicon' color={'#FFFFFF'} name='ios-arrow-back-outline' size={30} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/**中间**/}
                    <View>
                        <Text style={styles.topTextStyles}>{this.props.sigalRowdata.title}</Text>
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
    loadStart(){

    }
    setDuration(){

    }
    setTime(){

    }
    onEnd(){

    }
    videoError(){

    }
    onBuffer(){

    }
    onTimedMetadata(){

    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}

                <View style={styles.contentStyle}>
                    <WebView
                        ref='videoWebView'
                        automaticallyAdjustContentInsets={false}
                        style={styles.webView}
                        source={{uri: 'http://player.youku.com/embed/XMjUyODE4MjI3Mg=='}}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        decelerationRate="normal"
                        //onNavigationStateChange={this.onNavigationStateChange}
                        //onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                        startInLoadingState={true}
                        //scalesPageToFit={this.state.scalesPageToFit}
                    />

                </View>
            </View>
        );
    }
}

const htmlStyles = StyleSheet.create({
    a: {
        fontWeight: '300',
        color: '#FF3366', // pink links
    }
});

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
        flex:1,
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
    },



    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});
