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
    Image,
    RefreshControl
} from 'react-native';

import DataView      from  '../compo/DataView'
import Constant      from  '../common/Constant'
import AppUrl        from  '../common/AppUrl'

import {Actions} from 'react-native-router-flux'

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
            dataSource: ds.cloneWithRows([]),
            isRefreshing:true,
            pageNum:1,
            pageSize:6,
            tempDataSource: []
        }
        Blogthat=this
    }
    componentWillMount() {
        this.fetchData();
    }
    fetchData(){
        //网络获取数据
        var url = AppUrl.BlogListUrl;
        var options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:'pageSize='+this.state.pageSize+'&pageNum='+this.state.pageNum
        }

        fetch(url, options).then((response) => response.json())
            .then((responseData) => {
                var retCode = responseData.code;
                //console.log(responseData);
                if(retCode == Constant.SUCCESS) {
                    //Alert.alert(responseData.message);
                    this.setState({
                        dataSource:this.state.dataSource.cloneWithRows(responseData.data),
                        tempDataSource:responseData.data,
                        isRefreshing:false,
                        pageNum:this.state.pageNum+1
                    });
                } else {
                    Alert.alert(responseData.message);
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

    readBlog = (sigalRowdata) => {
        //Alert.alert('进来了')
        //console.log(sigalRowdata);


        //点击查看后更新数量

        //网络获取数据
        var url = AppUrl.UpdateViewCountUrl;
        var options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:'id='+sigalRowdata.id
        }

        fetch(url, options).then((response) => response.json())
            .then((responseData) => {
                var retCode = responseData.code;
                if(retCode == Constant.SUCCESS) {
                    //更新数据

                    var array = this.state.tempDataSource.slice()
                    var index = array.indexOf(sigalRowdata)

                    sigalRowdata.view=sigalRowdata.view+1

                    //console.log(sigalRowdata);

                    array[index]={
                        view:sigalRowdata.view,
                        content:sigalRowdata.content,
                        content_show:sigalRowdata.content_show,
                        create_time:sigalRowdata.create_time,
                        image:sigalRowdata.image,
                        title:sigalRowdata.title,
                        id:sigalRowdata.id
                    }


                    //console.log(array[index]);

                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(array),
                        tempDataSource: array
                    });

                    //console.log(oldRowData);
                    //然后去修改数据的数值
                    //重新渲染那一行数据
                    //跳转页面到详细内容
                    Actions.BlogContent({sigalRowdata:sigalRowdata});
                } else {
                    Alert.alert(responseData.message);
                }
            }).catch((error) => {
                Alert.alert('API Services is ShutDown');
        }).done();

    }

    renderRow(rowData,sectionId,indexId){
        return (
            <DataView
                rowData={rowData}
                dataType={Constant.Content_Type_BLOG}
                callBackReadBlog={(sigalRowdata)=>Blogthat.readBlog(sigalRowdata)}
            />
        )
    }

    _onRefresh(){
        console.log('刷新中');
        this.setState({isRefreshing: true})
    }

    _onLoadMore(){
        console.log('获取更多数据');
        //this.setState({isRefreshing: true})
        Blogthat.fetchData();
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

                    refreshControl={
						<RefreshControl
							refreshing={this.state.isRefreshing}
							//onRefresh={this._onRefresh.bind(this)}
							tintColor='#FFDB42'
							title='拼命加载中'
							titleColor="black"
							colors={['black']}
							progressBackgroundColor="#FA5600"
						/>
                    }
                    //onEndReachedThreshold={250}
                    //onEndReached={this._onLoadMore.bind(this)}
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
        borderRadius:width*0.7/30,
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
