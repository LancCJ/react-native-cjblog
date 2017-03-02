/**
 * Created by lanccj on 17/2/24.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';

import AppUrl   from '../common/AppUrl'
import Constant from  '../common/Constant'

import HTMLView from 'react-native-htmlview'
import { Icon } from 'react-native-elements'
var Lightbox = require('react-native-lightbox');

var Dimensions = require('Dimensions')
var {width,height}=Dimensions.get('window')

/**
 *列表数据ITEM
 * 三个类型
 *  blog
 *  video
 *  image
 */
export default class DataView extends Component {
    clickItem(sigalRowdate){
        if(this.props.callBackReadBlog==null)return
        this.props.callBackReadBlog(sigalRowdate)
    }
    render() {
        return (
            <View>

                {this.props.dataType===Constant.Content_Type_BLOG?(
                        <TouchableOpacity onPress={()=>{this.clickItem(this.props.rowData)}}>
                            <View style={styles.container}>
                                <Image source={{uri:AppUrl.BlogAttachedUrl+this.props.rowData.image}} style={styles.DataItemImageStyle}/>

                                <View style={{padding:width*0.02,width:width-width*0.04*2-height*0.12,height:height*0.15,justifyContent:'space-between'}}>
                                    <View style={{height:(height*0.2-height*0.03*2)/4,width:width-width*0.04*2-height*0.12-width*0.02,flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text>{this.props.rowData.title}</Text>
                                    </View>

                                    <Text style={{height:(height*0.2-height*0.03*2)/4*2,width:width-width*0.04*2-height*0.12-width*0.02,color:'#5E6977',fontSize:width*0.03}} numberOfLines={2}>{this.props.rowData.content_show}</Text>

                                    <View style={{height:(height*0.2-height*0.03*2)/4,width:width-width*0.04*2-height*0.12-width*0.02,flexDirection:'row',justifyContent:'space-between'}}>
                                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                            <Text style={{color:'#020202'}}>{this.props.rowData.create_time}</Text>
                                        </View>
                                        <View style={[{flexDirection:'row',alignItems:'center'}]}>
                                            <Icon
                                                name='eye'
                                                type='font-awesome'
                                                color="#5E6977"
                                                size={width*0.04}
                                            />
                                            <Text style={{color:'#020202'}}>{this.props.rowData.view}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ):(

                        this.props.dataType===Constant.Content_Type_VIDEO?(
                                <View style={[styles.videocontainer]}>
                                    <Image source={{uri:AppUrl.VideoAttachedUrl+this.props.rowData.image}} style={styles.DataItemVideoImageStyle}>
                                        <View style={[{height:Math.round(height*0.04)*2}]}>
                                            <Text numberOfLines={2} style={[{marginLeft:width*0.04,backgroundColor:'transparent',color:'#FFFFFF',fontWeight: 'bold',fontSize:width*0.05,marginTop:height*0.01,lineHeight:Math.round(height*0.04) }]}>{this.props.rowData.title}</Text>
                                        </View>
                                        <TouchableOpacity onPress={()=>{this.clickItem(this.props.rowData)}}>
                                            <Icon
                                                type='ionicon'
                                                name='ios-play'
                                                size={width*0.15}
                                                iconStyle={styles.play}
                                            />
                                        </TouchableOpacity>
                                    </Image>
                                </View>
                            ):(
                                <View style={[styles.imagecontainer]}>
                                    <TouchableOpacity onPress={()=>{this.clickItem(this.props.rowData)}}>
                                        {/*<Image source={{uri:AppUrl.ImageAttachedUrl+this.props.rowData.img}} style={styles.DataItemVideoImageStyle}/>*/}

                                        <Lightbox navigator={this.props.navigator}>
                                            <Image source={{uri:AppUrl.ImageAttachedUrl+'67cb3942417e43a4a4f9ba2638abcb7c.jpg'}} style={styles.DataItemImageImageStyle}/>
                                        </Lightbox>

                                    </TouchableOpacity>
                                </View>
                            )
                    )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:width,
        height:height*0.2,
        paddingLeft:width*0.04,
        paddingRight:width*0.04,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#DEDEDE',
        borderBottomWidth:0.5,
        backgroundColor:'#FFFFFF'
    },
    DataItemImageStyle:{
        height:height*0.12,
        width:height*0.12,
        resizeMode:'contain'
    },
    videocontainer:{
        marginBottom:height*0.02,
        width:width,
        height:height*0.3,
        paddingLeft:width*0.04,
        paddingRight:width*0.04,
        alignItems:'center',
        borderBottomColor:'#DEDEDE',
        borderBottomWidth:0.5,
        backgroundColor:'#FFFFFF'
    },
    DataItemVideoImageStyle:{
        height:height*0.3,
        width:width,
        resizeMode:'cover'
    },
    videoInfoStyle:{
        width:width*0.8,
        height:height*0.09,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    videoInfoTextStyle:{

    },
    play:{
        width:width*0.15,
        height:width*0.15,
        paddingLeft:width*0.15*0.3,
        backgroundColor:'transparent',
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:width*0.15/2,
        color:'#FA5600',


        right:width*0.5-width*0.15*0.5,
        top:height*0.3*0.5-width*0.15*0.5-Math.round(height*0.04)*2,
        position:'absolute'
    },
    imagecontainer:{
        width:width*0.5-width*0.01,
        height:width*0.5-width*0.01,
        justifyContent:'center',
        alignItems:'center',
    },
    DataItemImageImageStyle:{
        width:width*0.45,
        height:width*0.45,
        resizeMode:'cover'
    }
});
