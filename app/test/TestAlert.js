/**
 * Created by lanccj on 17/3/3.
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
    TouchableOpacity
} from 'react-native';

var MessageBarAlert = require('react-native-message-bar').MessageBar;
var MessageBarManager = require('react-native-message-bar').MessageBarManager;

/**
 *
 */
export default class TestAlert extends Component {
    componentWillUnmount() {
        // Remove the alert located on this master page from the manager
        MessageBarManager.unregisterMessageBar();
    }
    componentDidMount() {
        // Register the alert located on this master page
        // This MessageBar will be accessible from the current (same) component, and from its child component
        // The MessageBar is then declared only once, in your main component.
        MessageBarManager.registerMessageBar(this.refs.alert);
    }
    _alert(){
        MessageBarManager.showAlert({
            title: '温馨提示',
            message: '恭喜您,数据更新成功!',
            alertType: 'success',
            // See Properties section for full customization
            // Or check `index.ios.js` or `index.android.js` for a complete example
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this._alert()}>
                    <Text style={[{color:"red"}]}>点击提示</Text>
                </TouchableOpacity>
                <MessageBarAlert ref="alert" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20,
        backgroundColor: "#FFFFFF"
    }
});
