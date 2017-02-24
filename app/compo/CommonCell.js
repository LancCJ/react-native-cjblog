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
 *通用条目
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
                <View style={[{flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:width*0.04}]}>
                    {this.props.iconType==='local'?(
                        <Image source={{uri:this.props.iconName}} style={{width:width*0.08,height:width*0.08,borderRadius:width*0.08/2}}/>
                    ):(
                        (this.props.iconName!=null && this.props.iconType!=null && this.props.iconColor!=null)?(
                    <View style={[{justifyContent:'center',alignItems:'center'}]}>
                        <Icon type={this.props.iconType} color={this.props.iconColor} name={this.props.iconName} size={30} />
                    </View>
                    ):(null)
                    )}
                    <Text style={[{fontSize:15,color:"#2B2B2B",marginLeft:this.props.iconName!=null?width*0.01:0}]}>{this.props.name}</Text>
                </View>
                <View style={[{marginRight:width*0.04}]}>
                    {this.props.type==='button'?(
                            <Icon type='ionicon' color={'#F0EBF3'} name='ios-arrow-forward-outline' size={30} />
                        ):(
                            this.props.type==='textButton'?(
                                    <View style={[{flexDirection:'row',justifyContent:'center',alignItems:'center'}]}>
                                        <Text style={[{marginRight:width*0.02,color:'#2B2B2B'}]}>{this.props.text}</Text>
                                        <Icon type='ionicon' color={'#F0EBF3'} name='ios-arrow-forward-outline' size={30} />
                                    </View>
                                ):(
                                    <Switch
                                        value={this.state.isOn}
                                        onValueChange={()=>{
                                            this.setState({
                                                isOn:!this.state.isOn
                                            })
                                        }}
                                        disabled={false}
                                        onTintColor='#FA5600'
                                    />
                                    )
                        )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        backgroundColor: "#FFFFFF",
        height:height*0.075,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'#DEDEDE',
        borderBottomWidth:0.5
    }
});
