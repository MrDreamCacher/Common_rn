/*
 * @providesModule ErrorPage
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const ModuleManager = require('ModuleManager');

class ErrorPage extends React.Component {

    render() {
        let {moduleName, screenName} = this.props;
        let renderElement;
        if (ModuleManager.isModuleEnable(moduleName)) {
            renderElement = (
                <Text style={styles.errorText}>找不到{moduleName}模块，{'\n'}请先注册模块后，重新npm start</Text>
            );
        } else {
            let screenName = screenName || require(moduleName).mainScreen;
            renderElement = (
                <Text>{moduleName}模块不存在{screenName}页面，请在模块中声明</Text>
            );
        }
        return (
            <View style={styles.container}>
                {renderElement}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText: {
        color: 'red',
        fontSize: 15
    }
})

module.exports = ErrorPage;