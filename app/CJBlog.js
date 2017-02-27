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
import VideoPage from './video/VideoPage'
import MinePage  from './mine/MinePage'

import BlogContent  from './blog/BlogContent'
import VideoContent  from './video/VideoContent'

import {Icon } from 'react-native-elements'
import { Scene, Router } from 'react-native-router-flux'

class TabIcon extends React.Component {
    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon name={this.props.tabIcon} size={20} color={this.props.selected ? "#FFDB42" : '#BBB'} />
                <Text style={{color: this.props.selected ? '#FFDB42' : '#BBB', marginTop: 5, fontSize:12}}>{this.props.title}</Text>
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
            <Router onExitApp={this._backAndroidHandler}>
                <Scene key="root" hideNavBar>
                    <Scene key="tabbar" tabs tabBarStyle={{backgroundColor: '#FFF', borderTopWidth: 1, borderTopColor: '#BBB'}}>
                        <Scene key="tab1" initial title="博客" icon={TabIcon} tabIcon="home" navigationBarStyle={{backgroundColor: '#ffdb42'}}>
                            <Scene key='blog'  component={BlogPage} title='博客' hideTabBar/>
                            <Scene key='blogContent'  component={BlogContent} title='博客内容' hideTabBar/>
                        </Scene>
                        <Scene key="tab2" title="美图" icon={TabIcon} tabIcon="circle-o" navigationBarStyle={{backgroundColor: '#ffdb42'}}>
                            <Scene key="beauty" component={ImagePage} title="美图" hideTabBar/>
                        </Scene>
                        <Scene key="tab3" title="视频" icon={TabIcon} tabIcon="music" navigationBarStyle={{backgroundColor: '#ffdb42'}}>
                            <Scene key='video' title='视频' component={VideoPage} hideTabBar/>
                            <Scene key='videoContent'  component={VideoContent} title='视频内容' hideTabBar/>
                        </Scene>
                        <Scene key="tab4" title="我" icon={TabIcon} tabIcon="map-marker" navigationBarStyle={{backgroundColor: '#ffdb42'}}>
                            <Scene key='mine' title='我' component={MinePage} hideTabBar/>
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

