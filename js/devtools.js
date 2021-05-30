/*
 * @Author: Escher1108
 * @Website: https://jkgblog.com
 * @Date: 2021-04-24 23:13:11
 * @LastEditTime: 2021-05-01 12:34:13
 * @LastEditors: Do not edit
 * @FilePath: \zhu\js\devtools.js
 * @Description: 耶斯莫
 */
/*!
devtools-detect
Detect if DevTools is open
https://github.com/sindresorhus/devtools-detect
By Sindre Sorhus
MIT License
*/
(function () {
    'use strict';

    const devtools = {
        isOpen: false,
        orientation: undefined
    };

    const threshold = 160;

    const emitEvent = (isOpen, orientation) => {
        window.dispatchEvent(new CustomEvent('devtoolschange', {
            detail: {
                isOpen,
                orientation
            }
        }));
    };

    const main = ({ emitEvents = true } = {}) => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        const orientation = widthThreshold ? 'vertical' : 'horizontal';

        if (
            !(heightThreshold && widthThreshold) &&
            ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
        ) {
            if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents) {
                emitEvent(true, orientation);
            }

            devtools.isOpen = true;
            devtools.orientation = orientation;
        } else {
            if (devtools.isOpen && emitEvents) {
                emitEvent(false, undefined);
            }

            devtools.isOpen = false;
            devtools.orientation = undefined;
        }
    };

    main({ emitEvents: false });
    setInterval(main, 500);

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = devtools;
    } else {
        window.devtools = devtools;
    }


    // 检测开发者模式
    var checkStatus;
    var element = new Image();
    // var element = document.createElement('any');
    element.__defineGetter__('id', function () {
        checkStatus = 'on';
    });

    setInterval(function () {
        checkStatus = 'off';
        console.log(element);
        // debugger;
        console.clear();
        if (checkStatus == 'on') {
            window.location.href = 'https://jkgblog.com';
        }
    }, 500);

    // 检测键盘事件
    function doNothing() {
        document.oncontextmenu = function () { return false; };
        document.onkeypress = new Function("return false");
    }
    document.onkeydown = function (e) {
        if (e.shiftKey && e.ctrlKey && e.keyCode === 73) {
            return false;
        } else if (e.shiftKey && e.ctrlKey && e.keyCode === 74) {
            return false;
        }

        if (e.ctrlKey || e.keyCode === 83) return false;
        if (e.keyCode === 123) return false;
    }
    doNothing();
})();