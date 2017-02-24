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
            <TouchableOpacity onPress={()=>{this.clickItem(this.props.rowData)}}>
                <View style={styles.container}>
                    <Image source={{uri:AppUrl.BlogWebUrl+this.props.rowData.image}} style={styles.DataItemImageStyle}/>

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
    }
});
