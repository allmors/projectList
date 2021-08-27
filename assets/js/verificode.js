/*
 * @Author: Escher1108
 * @Website: https://jkgblog.com
 * @Date: 2020-10-23 16:07:54
 * @LastEditTime: 2020-10-26 18:00:55
 * @LastEditors: Do not edit
 * @FilePath: \HB\Workspace\响应式学习\大项目\reg\js\verificode.js
 * @Description: 耶斯莫拉
 */

"use strict"

console.log("%cPower by jkgblog.com", " text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:2rem")

//表单校验
//用户名正则校验
$('#username').blur(function () {
    let RegExp = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/
    let user = $('#username').val()
    if (user === '' || RegExp.test(user)) {
        $('#u').css({ "display": "none" })

        $.ajax({
            url: "请求地址", //请求路径
            type: "get",
            data: { 'username': user }, //该字段user是输入框的值
            dataType: "text", //响应格式
            async: false,
            success: function (result) {
                // 响应结果逻辑代码
                /*
                示例：
                    如果请求结果与let user = $('#username').val()不同，则执行下面的操作
                    if(result == 已存在){
                        //#ucode已在register.html定义，可直接使用下面代码
                        $('#ucode').css({"display":"block"})
                    }else{
                        $('#ucode').css({"display":"none"})
                    }
                */
            //    let result = false
               
                if (result === 'false') {
                    //#ucode已在register.html定义，可直接使用下面代码
                    $('#ucode').css({ "display": "block" })
                } else {
                    $('#ucode').css({ "display": "none" })
                }
            },
            error: function (err) {
                //响应错误代码逻辑，一般很少遇到
            }
        })
    } else {
        $('#u').css({ "display": "block" })
    }
})

//邮箱本地校验
$('#email').blur(function () {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let email = $('#email').val()
    if (email === '' || reg.test(email)) {
        $('#e').css({ "display": "none" })

        $.ajax({
            url: "请求地址", //请求路径
            type: "get",
            data: { 'email': email }, //该字段email是输入框的值
            dataType: "text", //响应格式
            async: false,
            success: function (result) {
                // 响应结果逻辑代码
                if (result == 'false') {
                    //true表示匹对成功，数据库存在改条信息，弹出“已存在”提示
                    //#ucode已在register.html定义，可直接使用下面代码
                    $('#uemail').css({ "display": "block" })
                } else {
                    $('#uemail').css({ "display": "none" })
                }
            },
            error: function (err) {
                //响应错误代码逻辑，一般很少遇到
            }
        })

    } else {
        $('#e').css({ "display": "block" })
    }
})

//年龄本地校验
$('#age').mouseleave(function () {
    let reg = /^[0-9]+$/
    let age = $('#age').val()
    if (age === '' || reg.test(age)) {
        $('#a').css({ "display": "none" })
    } else {
        $('#a').css({ "display": "block" })
    }
})

//密码校验
$('#password').mouseleave(function () {
    let reg = new RegExp('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,16}');
    let pwd = $("#password").val()
    if (pwd === '' || reg.test(pwd)) {
        $("#p").css({ "display": "none" })
    } else {
        $("#p").css({ "display": "block" })
    }
})

//号码验证
$('#phone').blur(function () {
    let reg = /^1[3456789]\d{9}$/;
    let phone = $("#phone").val()
    if (phone === '' || reg.test(phone)) {
        $("#pn").css({ "display": "none" })

        $.ajax({
            url: "请求地址", //请求路径
            type: "get",
            data: { 'phone': phone }, //该字段phone是输入框的值
            dataType: "text", //响应格式
            async: false,
            success: function (result) {
                // 响应结果逻辑代码
                if (result == 'false') {
                    //true表示匹对成功，数据库存在改条信息，弹出“已存在”提示
                    //#ucode已在register.html定义，可直接使用下面代码
                    $('#uphone').css({ "display": "block" })
                } else {
                    $('#uphone').css({ "display": "none" })
                }
            },
            error: function (err) {
                //响应错误代码逻辑，一般很少遇到
            }
        })

    } else {
        $("#pn").css({ "display": "block" })
    }

})


//监听发送验证码事件
$('#sendcode').on('click', function () {
    const USER = $('#username').val()
    const Email = $('#email').val()
    const Age = $('#age').val()
    const PassWd = $("#password").val()
    const Phone = $("#phone").val()

    if (USER == '') {
        alert('请完善信息')
    } else if (Email == '') {
        alert('请完善信息')
    } else if (Age == '') {
        alert('请完善信息')
    } else if (PassWd == '') {
        alert('请完善信息')
    } else if (Phone == '') {
        alert('请完善信息')
    } else {
        //此处写发送验证码的相关代码
        return true
    }
})