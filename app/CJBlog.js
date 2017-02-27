/**
 * Created by lanccj on 17/2/24.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import BlogPage  from './blog/BlogPage'
import ImagePage from './image/ImagePage'
import VideoPage from './video/VideoPage'
import MinePage  from './mine/MinePage'


import { Tabs, Tab, Icon } from 'react-native-elements'

export default class CJBlog extends Component {
    constructor() {
        super()
        this.state = {
            selectedTab: 'blog',
        }
    }

    changeTab (selectedTab) {
        this.setState({selectedTab})
    }

    renderTab(id,title,icon,compo){
        const { selectedTab } = this.state
        return (
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6,color:'#ED6000'}}
                    selected={selectedTab === id}
                    title={selectedTab === id ? title : null}
                    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name={icon} size={33} />}
                    renderSelectedIcon={() => <Icon color={'#ED6000'} name={icon} size={30} />}
                    onPress={() => this.changeTab(id)}>
                    {compo}
                </Tab>
        )
    }
    render() {
        return (
                <Tabs>
                    {this.renderTab('blog','博客','list',<BlogPage/>)}
                    {this.renderTab('image','美图','image',<ImagePage/>)}
                    {this.renderTab('video','视频','videocam',<VideoPage/>)}
                    {this.renderTab('mine','我'  ,'person',<MinePage/>)}
                </Tabs>
        );
    }
}

