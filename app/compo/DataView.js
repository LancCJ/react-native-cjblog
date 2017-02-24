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
                                        <View style={{height:(height*0.15-height*0.03*2)/4,width:width-width*0.04*2-height*0.12-width*0.02,flexDirection:'row',justifyContent:'space-between'}}>
                                            <Text>{this.props.rowData.title}</Text>
                                        </View>

                                        <Text style={{height:(height*0.15-height*0.03*2)/4*2,width:width-width*0.04*2-height*0.12-width*0.02,color:'#5E6977',fontSize:width*0.03}} numberOfLines={2}>{this.props.rowData.content_show}</Text>

                                        <View style={{height:(height*0.15-height*0.03*2)/4,width:width-width*0.04*2-height*0.12-width*0.02,flexDirection:'row',justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                                <Text style={{color:'#020202'}}>{this.props.rowData.create_time}</Text>
                                            </View>
                                            <Text style={{color:'#020202'}}>{this.props.rowData.view}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ):(
                        <View style={[styles.videocontainer]}>
                                <Image source={{uri:AppUrl.VideoAttachedUrl+this.props.rowData.image}} style={styles.DataItemVideoImageStyle}>
                                    <Text numberOfLines={2} style={[{marginLeft:width*0.04,backgroundColor:'transparent',color:'#FFFFFF',fontWeight: 'bold',fontSize:width*0.05,marginTop:height*0.01}]}>{this.props.rowData.title}</Text>
                                    <TouchableOpacity onPress={()=>{this.clickItem(this.props.rowData)}}>
                                        <Icon
                                            type='ionicon'
                                            name='ios-play'
                                            size={width*0.15}
                                            iconStyle={styles.play}
                                        />
                                    </TouchableOpacity>
                                </Image>
                            {/*<View style={styles.videoInfoStyle}>*/}
                                {/*<Text style={{color:'#020202'}} numberOfLines={1}>{this.props.rowData.create_time}</Text>*/}
                                {/*<Text style={{color:'#020202'}}>{this.props.rowData.view}</Text>*/}
                            {/*</View>*/}
                            {/*<HTMLView*/}
                                {/*value={this.props.rowData.pre}*/}
                            {/*/>*/}
                        </View>
                        )}

                </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:width,
        height:height*0.15,
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
        marginBottom:height*0.3/2*0.5*0.5,
        width:width*0.15,
        height:width*0.15,
        paddingLeft:width*0.15*0.3,
        backgroundColor:'transparent',
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:width*0.15/2,
        color:'#FA5600'
    }
});