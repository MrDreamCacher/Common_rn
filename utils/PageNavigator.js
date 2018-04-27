/*
* @providesModule PageNavigator
*
* PageNavigator - 用于rn跳转到native的导航器
*
* 一般会在Navigator的renderScene给每个页面传递pageNavigator属性，方便rn页面跳转到native页面
*
*/
import React from 'react';
import {Platform, NativeModules} from 'react-native';

const ActivityNative = NativeModules.ActivityNative;
const ViewControllerNative = NativeModules.ViewControllerNative;

function push(className, extrasJson, animated = true) {
    if (typeof extrasJson === 'undefined') {
        if (Platform.OS === 'android') {
            ActivityNative.startActivity(className, '');
        } else if (Platform.OS === 'ios') {
            ViewControllerNative.pushViewController(className, animated, '');
        }
    } else {
        if (typeof extrasJson === 'object') {
            extrasJson = JSON.stringify(extrasJson);
        }
        if (Platform.OS === 'android') {
            ActivityNative.startActivity(className, extrasJson);
        } else if (Platform.OS === 'ios') {
            ViewControllerNative.pushViewController(className, animated, extrasJson);
        }
    }
}

function pop(animated=true) {
    if (Platform.OS === 'android') {
        ActivityNative.finishTopActivity();
    } else if (Platform.OS === 'ios') {
        ViewControllerNative.popViewController(animated);
    }
}

function popToRoot(animated=true) {
    if (Platform.OS === 'android') {
        ActivityNative.startActivity('mainApp', '');
    } else if (Platform.OS === 'ios') {
        ViewControllerNative.popToRootViewController(animated);
    }
}

const PageNavigator = {
    push,
    pop,
    popToRoot
}

module.exports = PageNavigator;




