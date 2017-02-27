/**
 * Created by lanccj on 17/2/27.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Alert
} from 'react-native';

import {Actions, Scene, Router} from 'react-native-router-flux';

import CJBlog from './CJBlog'
import BlogContent from './blog/BlogContent'
import VideoContent from './video/VideoContent'


/**
 *
 */

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="CJBlog" component={CJBlog} title="CJBlog" hideNavBar/>
        <Scene key="BlogContent" component={BlogContent} title="BlogContent" hideNavBar/>
        <Scene key="VideoContent" component={VideoContent} title="VideoContent" hideNavBar/>
    </Scene>
);

export default class Root extends Component {
    render() {
        return <Router scenes={scenes}/>
    }
}


