/**
 * Created by lanccj on 17/2/24.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Platform,
    ToastAndroid
} from 'react-native';

import BlogPage  from './blog/BlogPage'
import ImagePage from './image/ImagePage'
import VideoPage from '@video/VideoPage'
import MinePage  from './mine/MinePage'
import InfoContent  from './mine/InfoContent'
import UpdatePwd  from './mine/UpdatePwd'
import AboutPage  from './mine/AboutPage'
import FeedBack  from './compo/FeedBack'
import TestAlert  from './test/TestAlert'

import BlogContent  from './blog/BlogContent'
import VideoContent  from './video/VideoContent'

import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Scene, Router,Modal } from 'react-native-router-flux'

class TabIcon extends React.Component {
    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon name={this.props.tabIcon} size={20} color={this.props.selected ? "#FA5600" : '#BBB'} />
                <Text style={{color: this.props.selected ? '#FA5600' : '#BBB', marginTop: 5, fontSize:12}}>{this.props.title}</Text>
            </View>

        )
    }
}

export default class CJBlog extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    _backAndroidHandler() {
        if (Platform.OS === 'android') {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                return false
            }
            this.lastBackPressed = Date.now()
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT)
            return true
        }else {
            return true
        }
    }

    render() {
        return (
                <Router onExitApp={this._backAndroidHandler} >
                    <Scene key="modal" component={Modal} >
                        <Scene key="root">
                            {/*<Scene key='TestAlert' component={TestAlert} title='弹出测试' hideNavBar/>*/}

                            <Scene key="tabbar" tabs tabBarStyle={{backgroundColor: '#FFF', borderTopWidth: 1, borderTopColor: '#BBB'}} >
                                <Scene key="tab1"   initial title="博客" icon={TabIcon} tabIcon="list" >
                                    <Scene key='Blog'  component={BlogPage} title='博客' hideNavBar/>
                                    <Scene key='BlogContent'  component={BlogContent} title='博客内容' hideNavBar/>
                                </Scene>
                                <Scene key="tab2"  title="美图" icon={TabIcon} tabIcon="image" >
                                    <Scene key="Beauty" component={ImagePage} title="美图" hideNavBar/>
                                </Scene>
                                <Scene key="tab3"  title="视频" icon={TabIcon} tabIcon="video-camera" >
                                    <Scene key='Video' title='视频' component={VideoPage} hideNavBar/>
                                    <Scene key='VideoContent'  component={VideoContent} title='视频内容' hideNavBar/>
                                </Scene>
                                <Scene key="tab4" title="我" icon={TabIcon} tabIcon="user" >
                                    <Scene key='Mine' title='我' component={MinePage} hideNavBar/>
                                    <Scene key='InfoContent' title='用户信息' component={InfoContent} hideNavBar/>
                                    <Scene key='UpdatePwdMadal' component={UpdatePwd} title='修改密码' hideNavBar/>
                                    <Scene key='AboutPage' component={AboutPage} title='关于' hideNavBar/>
                                </Scene>
                            </Scene>
                        </Scene>
                    </Scene>
                </Router>
        );
    }
}

