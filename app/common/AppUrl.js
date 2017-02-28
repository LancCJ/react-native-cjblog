/**
 * Created by lanccj on 17/2/24.
 */
import React, {Component} from 'react';
/**
 *系统请求配置
 */
export default class AppUrl extends Component {
    static BlogAttachedUrl='http://lanccj.synology.me:7070/blog/attached/blog/'

    static VideoAttachedUrl='http://lanccj.synology.me:7070/blog/attached/video/'

    static ImageAttachedUrl='http://lanccj.synology.me:7070/blog/attached/beauty/'

    //服务器IP地址
    static HostUrl='http://localhost:8088/api/v1/';

    //列表请求地址
    static BlogListUrl=AppUrl.HostUrl+'blog/list';

    //阅读次数更新地址
    static UpdateViewCountUrl=AppUrl.HostUrl+'blog/updateviewcount';

}

