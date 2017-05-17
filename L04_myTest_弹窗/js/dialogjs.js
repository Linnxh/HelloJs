/**
 * Created by LXH on 17/4/24.
 */

;(function ($) {
    var Dialog = function (config) {
        var _this_ = this;
        this.config = {
            type: "waitint",
            buttons: null,
            delay: null,
            message: null,
            width: "auto",
            height: "auto",
            maskOpacity: null,
        }
        if (config && $.isPlainObject(config)) {
            $.extend(this.config, config);
        } else {
            this.isConfig = true;
        }
        //创建基本的dom
        this.body = $("body");
        this.mask = $('<div id="mask">');
        this.dialogContent = $('<div id="dialogContent">');
        // this.win = $('<div id="loadingImgContent">');
        this.loadingImgContent = $('<div class="loadingImgContent">');
        this.img = $('<div class=""></div>');
        this.create();

        if (config.delay) {
            window.setTimeout(function () {
                this.mask.remove();
                // _this_.close();
            }, config.delay);
        }
    };
    Dialog.prototype = {
        create: function () {
            var _this_ = this;
            if (this.isConfig) {
                //没有传入config
                this.loadingImgContent.append(this.img.addClass("loading"));
                this.dialogContent.append(this.loadingImgContent);
                this.mask.append(this.dialogContent);
                this.body.append(this.mask);
                console.log("46-----");
                // <div id="mask">
                //     <div id="dialogContent">
                //         <div id="loadingImgContent">
                //             <div class="loading"></div>
                //         </div>
                //         <button class="ok">确定</button>
                //         <button class="cancel">取消</button>
                //      </div>
                // </div>
            } else {
                // var _this_ = this;
                var dialogContent = this.dialogContent;
                this.loadingImgContent.append(this.img.addClass(this.config.type));
                this.dialogContent.append(this.loadingImgContent);
                if (this.config.buttons) {
                    var _this_ = this;
                    $(this.config.buttons).each(function () {
                        // var _this_ = this;
                        var type = this.type ? " class='" + this.type + "'" : "";
                        var btnText = this.text ? this.text : "dd";
                        var callBack = this.callback ? this.callback : null;
                        var btn = $("<button " + type + ">" + btnText + "</button>");
                        if (callBack) {
                            btn.on("click", function () {
                                console.log("dddddd");
                                var isShowDialog = callBack();
                                if (!isShowDialog) {
                                    /****this指向问题***/
                                    _this_.close();
                                }
                            })
                        } else {
                            btn.on("click", function () {
                                _this_.close();
                            })
                        }
                        /****
                         * dialogContent一定要在外层存一下，
                         * this.dialogContent,this指向不正确
                         * ******/
                        dialogContent.append(btn);
                    })
                }

                this.mask.append(dialogContent);
                this.body.append(this.mask);
            }
        },
        close: function () {
            this.mask.remove();
        },
    };
    // window.Dialog = Dialog;
    $.dialog = function (config) {
        return new Dialog(config)
    }
})(Zepto);