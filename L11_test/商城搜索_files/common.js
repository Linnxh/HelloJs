/*
Author:zhuzh
Date:2014-010-17
Desc:全局通用JS辅助类库
*/
var Common = {
    //加载下拉列表信息，url:请求路径，intId：当前选择ID，container：需要加载的jquery对象，onComplete回调函数
    LoadGeographyItems: function (url, intId, container, onComplete) {
        $.getJSON(url, function (response) {
            if (response && response.success && container) {
                Common.FillListItems(container, response.items, intId);
                if (onComplete) {
                    onComplete(container);
                }
            }
        });
    },
    //需要清楚的jquery对象
    ClearListItems: function (container) {
        $(container).find(":first").nextAll().remove();
    },
    //container:需要加载的jquery对象,dataItems:数据源，intId：当前选择ID
    FillListItems: function (container, dataItems, intId) {
        if (dataItems) {
            var strStmp = "";
            $.each(dataItems, function () {
                if (intId == this.GeographyCode) {
                    strStmp = "selected=selected";
                } else {
                    strStmp = "";
                }
                $("<option value='" + this.GeographyCode + "' " + strStmp + " >" + this.GeographyName + "</option>")
                                .appendTo(container);
            });
        }
    },
    //JS中获取图片详细地址
    GetImgUrl: function (strImg, intWidth, intHeight) {
        if (strImg != null && strImg != undefined && $.trim(strImg)!= "") {
            //一期图片
            if (strImg.indexOf("Old/") > -1) {
                if (intWidth != null && intWidth != undefined && intHeight != null && intHeight != undefined) {
                    return gpath.image_path + strImg + ".jpg" + intWidth + "_" + intHeight + ".jpg";
                } else {
                    return gpath.image_path + strImg + ".jpg";
                }
            }
                //二期图片
            else {
                if (intWidth != null && intWidth != undefined && intHeight != null && intHeight != undefined) {
                    return gpath.image_path + strImg + intWidth + "_" + intHeight + ".jpg";
                } else {
                    return gpath.image_path + strImg;
                }
            }
        } else {
            return gpath.static_path+"pc/web/ghs/"+"js/ImageUpload/images/empty.png";
        }

    },
    //将参数变为可以被后端程序以集合的形式接收数据（如：List） 邓福伟 2016-02-23
    MvcParamMatch: (function () {
        var MvcParameterAdaptive = {};
        //验证是否为数组
        MvcParameterAdaptive.isArray = Function.isArray || function (o) {
            return typeof o === "object" &&
            Object.prototype.toString.call(o) === "[object Array]";
        };
        //将数组转换为对象
        MvcParameterAdaptive.convertArrayToObject = function (/*数组名*/arrName, /*待转换的数组*/array, /*转换后存放的对象，不用输入*/saveOjb) {
            var obj = saveOjb || {};
            function func(name, arr) {
                for (var i in arr) {
                    if (!MvcParameterAdaptive.isArray(arr[i]) && typeof arr[i] === "object") {
                        for (var j in arr[i]) {
                            if (MvcParameterAdaptive.isArray(arr[i][j])) {
                                func(name + "[" + i + "]." + j, arr[i][j]);
                            } else if (typeof arr[i][j] === "object") {
                                MvcParameterAdaptive.convertObject(name + "[" + i + "]." + j + ".", arr[i][j], obj);
                            } else {
                                obj[name + "[" + i + "]." + j] = arr[i][j];
                            }
                        }
                    } else {
                        obj[name + "[" + i + "]"] = arr[i];
                    }
                }
            }
            func(arrName, array);
            return obj;
        };
        //转换对象
        MvcParameterAdaptive.convertObject = function (/*对象名*/objName,/*待转换的对象*/turnObj, /*转换后存放的对象，不用输入*/saveOjb) {
            var obj = saveOjb || {};
            function func(name, tobj) {
                for (var i in tobj) {
                    if (MvcParameterAdaptive.isArray(tobj[i])) {
                        MvcParameterAdaptive.convertArrayToObject(i, tobj[i], obj);
                    } else if (typeof tobj[i] === "object") {
                        func(name + i + ".", tobj[i]);
                    } else {
                        obj[name + i] = tobj[i];
                    }
                }
            }
            func(objName, turnObj);
            return obj;
        };
        return function (json, arrName) {
            arrName = arrName || "";
            if (typeof json !== "object") throw new Error("请传入json对象");
            if (MvcParameterAdaptive.isArray(json) && !arrName) throw new Error("请指定数组名，对应Action中数组参数名称！");
            if (MvcParameterAdaptive.isArray(json)) {
                return MvcParameterAdaptive.convertArrayToObject(arrName, json);
            }
            return MvcParameterAdaptive.convertObject("", json);
        };
    })(),
};