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
import HTMLView from 'react-native-htmlview'

var Dimensions = require('Dimensions')
var {width,height}=Dimensions.get('window')

/**
 *博客文章内容展示
 */
export default class BlogContent extends Component {
    renderNavBar(){
        return (
            <View style={styles.navBarStyle}>
                <View style={styles.navBarContentStyle}>
                    <View style={[styles.topIconStyles,{paddingLeft:width*0.04}]}>
                        <TouchableOpacity onPress={()=>this.props.navigator.pop()}>
                            <View>
                                <Icon type='ionicon' color={'#FFFFFF'} name='ios-arrow-round-back-outline' size={30} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/**中间**/}
                    <View>
                        <Text style={styles.topTextStyles}>{this.props.sigalRowdate.title}</Text>
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

                <ScrollView style={styles.contentStyle}>
                        <View style={styles.infoStyle}>
                            <Text style={styles.infoTextStyle}>发表时间:{this.props.sigalRowdate.create_time}</Text>
                            <Text style={[styles.infoTextStyle,{marginLeft:width*0.02}]}>阅览次数:{this.props.sigalRowdate.view}</Text>
                        </View>

                        <HTMLView
                            value={this.props.sigalRowdate.content}
                            stylesheet={htmlStyles}
                        />
                </ScrollView>
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
        height:height*0.06+(Platform.OS==='ios'?20:0),
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
