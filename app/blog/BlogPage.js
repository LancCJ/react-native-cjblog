/**
 * Created by lanccj on 17/2/24.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    Platform,
    TouchableOpacity,
    TouchableHighlight,
    StatusBar,
    ListView,
    Alert,
    Image
} from 'react-native';

import DataView from '../compo/DataView'
import Constant from '../common/Constant'
import AppUrl   from '../common/AppUrl'
import BlogContent   from './BlogContent'

var Dimensions = require('Dimensions')
var {width,height}=Dimensions.get('window')
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

/**
 *博客列表
 */
export default class BlogPage extends Component {
    constructor() {
        super()
        this.state = {
            dataSource: ds.cloneWithRows([])
        }
        that=this
    }
    componentWillMount() {
        this.fetchData();
    }
    fetchData(){
        //网络获取数据
        var url = AppUrl.BlogListUrl;
        var options = {
            method: 'GET'
        }

        fetch(url, options).then((response) => response.json())
            .then((responseData) => {
                var retCode = responseData.code;
                //console.log(responseData);
                if(retCode == Constant.SUCCESS) {
                    //Alert.alert(responseData.message);
                    this.setState({
                        dataSource:ds.cloneWithRows(responseData.data)
                    });
                } else if(retCode == Constant.FAIL){
                    Alert.alert(responseData.message);
                }else {
                    Alert.alert('API Services lost');
                }
            }).catch((error) => {
                Alert.alert('API Services is ShutDown');
            }).done();
    }
    renderNavBar(){
        return (
            <View style={styles.navBarStyle}>
                <View style={styles.navBarContentStyle}>
                    {/**左边**/}
                    <View style={[{paddingLeft:width*0.01,flexDirection:'row',alignItems:'center'}]}>
                        <Image source={{uri:'http://lanccj.synology.me:7070/blog/images/lanccj1.png'}} style={styles.logoImageStyle}/>
                        <Text style={styles.topTextStyles}>博客</Text>
                    </View>
                    {/**中间**/}
                    <View>
                        <TextInput
                            placeholder="输入标题,作者"
                            placeholderTextColor="#DEDEDE"
                            underlineColorAndroid='transparent'
                            style={styles.topInputStyle}
                        />
                    </View>
                </View>
            </View>
        )
    }

    readBlog = (sigalRowdate) => {
        //Alert.alert('进来了')
        console.log(sigalRowdate)
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: sigalRowdate.title,
                component: BlogContent,
                params:{
                    sigalRowdate:sigalRowdate
                }
            })
        }
    }

    renderRow(rowData){
        return (
            <DataView
                rowData={rowData}
                dataType={Constant.Content_Type_BLOG}
                callBackReadBlog={(sigalRowdate)=>that.readBlog(sigalRowdate)}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                {this.renderNavBar()}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    contentContainerStyle={styles.contentViewStyle}
                    scorllEnabled={false}
                    enableEmptySections={true}
                />
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
    navBarContentStyle:{
        marginTop:Platform.OS==='ios'?20:0,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    topTextStyles:{
        fontSize:15,
        color:'#FFFFFF',
        fontWeight: 'bold'
    },
    topInputStyle:{
        width:width*0.7,
        height:height*0.05,
        backgroundColor: "#FFFFFF",
        borderRadius:width*0.7/20,
        paddingLeft:width*0.02,
        fontSize:15
    },
    topIconStyles:{
        height:height*0.05,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    contentViewStyle:{
        width:width
    },
    logoImageStyle:{
        height:height*0.06,
        width:height*0.06,
        resizeMode:'contain'
    }
});
