/*
 * @Author: Escher1108
 * @Website: https://jkgblog.com
 * @Date: 2021-04-22 21:42:25
 * @LastEditTime: 2021-05-01 12:32:05
 * @LastEditors: Do not edit
 * @FilePath: \zhu\js\checkStatus.js
 * @Description: 耶斯莫拉
 */
(function () {

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
    }
    document.onkeydown = function (e) {
        if (e.shiftKey && e.ctrlKey && e.keyCode === 73) {
            return false;
        } else if (e.shiftKey && e.ctrlKey && e.keyCode === 74) {
            return false;
        } 

        if(e.ctrlKey || e.keyCode === 83) return false;

        if (e.keyCode === 123) return false;
    }
    doNothing();
})();