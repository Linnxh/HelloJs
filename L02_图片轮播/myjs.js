/**
 * Created by LXH on 16/11/25.
 */

;(function ($) {

    var Carousel = function (poster) {

        var self = this;
        this.poster = poster;
        this.posterItemMain = poster.find(".poster-list");
        this.nextBtn = poster.find("div.poster-next-btn");
        this.prevBtn = poster.find("div.poster-prev-btn");
        this.posterItems = poster.find("li.poster-item");
        if(this.posterItems.length%2==0){
            this.posterItemMain.append(this.posterItems.eq(0).clone());
            this.posterItems=this.posterItemMain.children();
        }
        this.posterFirstItem = this.posterItemMain.find("li").eq(0);
        this.posterLastItem = this.posterItemMain.find("li").last();
        this.rotateFlag = true;
        console.log("传进来的参数-->" + poster.attr("data-setting"));

        this.setting = {
            "width": 1000,//图片实际宽高
            "height": 270,
            "posterWidth": 640,//第一帧的宽高
            "posterHeight": 270,
            "默认参数": 0.9,
            "speed": 500,
            "autoPlay": false,
            "delay": 1000,
            "verticalAlign": "middle"//各个图片的位置
        };
        $.extend(this.setting, this.getSetting());
        console.log("拼接后的参数-->");
        console.log(this.setting);

        this.setSettingValue();
        this.setPosterPos();


        this.nextBtn.click(function () {
            if (self.rotateFlag) {
                self.rotateFlag = false;
                self.carouseRoate("left");
            }
        });
        this.prevBtn.click(function () {
            if (self.rotateFlag) {
                self.rotateFlag = false;
                self.carouseRoate("right");
            }
        });

        if (this.setting.autoPlay) {
            this.autoPlay();
            this.poster.hover(function () {
                // alert("hover");
                window.clearInterval(self.timer);
            }, function () {
                // window.setInterval(self.timer);
                self.autoPlay();
            })
        }
    };
    Carousel.prototype = {

        autoPlay: function () {
            var self = this;
            this.timer = window.setInterval(function () {
                self.nextBtn.click();
            }, this.setting.delay)
        },
        carouseRoate: function (type) {
            var _this_ = this;
            var zIndexArr = [];
            if (type == "left") {
                this.posterItems.each(function () {
                    var self = $(this),
                        prev = self.prev().get(0) ? self.prev() : _this_.posterLastItem,
                        width = prev.width(),
                        height = prev.height(),
                        zIndex = prev.css("zIndex"),
                        opacity = prev.css("opacity"),
                        left = prev.css("left"),
                        top = prev.css("top");
                    zIndexArr.push(zIndex);
                    // var img= prev.find(".mImg");
                    // console.log("当前图片--》"+img.src);
                    // console.log(_this_.posterLastItem.find(".mImg").outerHTML);
                    self.animate({
                        width: width,
                        height: height,
                        zIndex: zIndex,
                        opacity: opacity,
                        left: left,
                        top: top
                    }, _this_.setting.speed, function () {
                        _this_.rotateFlag = true;
                    });

                });
                this.posterItems.each(function (i) {
                    $(this).css("zIndex", zIndexArr[i]);
                })
            } else if (type == "right") {
                this.posterItems.each(function () {
                    var self = $(this),
                        next = self.next().get(0) ? self.next() : _this_.posterFirstItem,
                        width = next.width(),
                        height = next.height(),
                        zIndex = next.css("zIndex"),
                        opacity = next.css("opacity"),
                        left = next.css("left"),
                        top = next.css("top");
                    zIndexArr.push(zIndex);

                    self.animate({
                        width: width,
                        height: height,
                        zIndex: zIndex,
                        opacity: opacity,
                        left: left,
                        top: top
                    })
                }, _this_.setting.speed, function () {
                    _this_.rotateFlag = true;
                });
                this.posterItems.each(function (i) {
                    $(this).css("zIndex", zIndexArr[i]);
                })
            }
        },
        setVerTicalAlign: function (height) {
            var self = this;
            var top;
            var verticelType = this.setting.verticalAlign;
            if (verticelType == "middle") {
                top = (this.setting.height - height) / 2;
            } else if (verticelType == "bottom") {
                top = (this.setting.height - height);
            } else if (verticelType == "top") {
                top = 0;
            } else {
                top = (this.setting.height - height) / 2;
            }
            return top;
        },

        setPosterPos: function () {
            var sliceItems = this.posterItems.slice(1),
                sliceSize = sliceItems.length / 2,
                rightSlice = sliceItems.slice(0, sliceSize),
                level = Math.floor(this.posterItems.length / 2),
                leftSlice = sliceItems.slice(sliceSize);

            var self = this;
            var rw = this.setting.posterWidth;
            var rh = this.setting.posterHeight;
            var gap = ((this.setting.width - this.setting.posterWidth) / 2) / level;


            var firstItemLeft = (this.setting.width - this.setting.posterWidth) / 2;
            var fixOffsetLeft = firstItemLeft + rw;
            rightSlice.each(function (i) {
                level--;
                rw = rw * self.setting.scale;
                rh = rh * self.setting.scale;
                var j = i;
                $(this).css({
                    width: rw,
                    height: rh,
                    zIndex: level,
                    opacity: 1 / (++j),
                    left: fixOffsetLeft + (++i) * gap - rw,
                    top: self.setVerTicalAlign(rh)
                })
            });

            var lw = rightSlice.last().width();
            var lh = rightSlice.last().height();
            var oLoopse = Math.floor(this.posterItems.length / 2);
            leftSlice.each(function (i) {
                $(this).css({
                    width: lw,
                    height: lh,
                    zIndex: level,
                    opacity: 1 / oLoopse,
                    left: (i) * gap,
                    top: self.setVerTicalAlign(lh)
                });
                lw = lw / self.setting.scale;
                lh = lh / self.setting.scale;
                oLoopse--;
            })
        },
        setSettingValue: function () {
            this.poster.css({
                width: this.setting.width,
                height: this.setting.height,
            })
            this.posterItemMain.css({
                width: this.setting.width,
                height: this.setting.height,
            })

            var w = (this.setting.width - this.setting.posterWidth) / 2;
            console.log("前后切换按钮的宽度-w->" + w);
            this.nextBtn.css({
                width: w,
                height: this.setting.height,
                zIndex: Math.ceil(this.posterItems.length / 2),
            });
            console.log("拼接后this.posterItems.length-->" + this.posterItems.length),
                this.prevBtn.css({
                    width: w,
                    height: this.setting.height
                })
            this.posterFirstItem.css({
                width: this.poster.posterWidth,
                height: this.poster.posterHeight,
                left: w,
                zIndex: Math.floor(this.posterItems.length / 2)
            })
        },
        getSetting: function () {
            var setting = this.poster.attr("data-setting");
            if (setting && setting != null) {
                return $.parseJSON(setting);
            } else {
                return {}
            }

        }

    };
    Carousel.init = function (posters) {
        var _this_ = this;
        posters.each(function () {
            new _this_($(this));
        });

    };
    window["Carousel"] = Carousel;
})(jQuery);
