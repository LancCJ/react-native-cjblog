/**
 * Created by lanccj on 17/2/24.
 */
import React, {Component} from 'react';
/**
 *Sqls定义
 */
export default class Sqls extends Component {
    //查询blog数据
    static QUERY_BLOG=' SELECT * FROM cjblog_blog '
    //创建cjblog_blog表
    static CREATE_CJBLOG_BLOG_TABLE='create table cjblog_blog (category content content_show create_time deleted editortype id image ispublic keyword level showside title type user_id view zhuanzai zhuanzaiurl)'


}

