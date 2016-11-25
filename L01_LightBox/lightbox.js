/**
 * Created by LXH on 16/11/23.
 */

;(function () {
    var LightBox = function () {
        var self = this;

        this.popupMask = $('<div id="G-lightbox-mask">');//创建遮罩
        this.popupWin = $('<div id="G-lightbox-container">');//弹出窗口最外层
        this.bodyNode = $(document.body);
        this.renderDOM();

        this.prcViewArea = this.popupWin.find("div.lightbox-img-box");
        this.popupPic = this.popupWin.find("img.lightbox-image");
        this.picCaptionArea = this.popupWin.find("div.lightbox-caption-box");
        this.nextBtn = this.popupWin.find("span.lightbox-next-btn");
        this.preBtn = this.popupWin.find("span.lightbox-prev-btn");

        this.captionText = this.popupWin.find("p.lightbox-pic-desc");
        this.currentIndex = this.popupWin.find("span.lightbox-index");
        this.closeBtn = this.popupWin.find("span.lightbox-close-btn");

        this.groupName = null;
        this.groupData = [];

        //事件委托机制，设置每个的点击事件
        this.bodyNode.delegate(".js-lightbox,*[data-role=lightbox]", "click", function (e) {
            //阻止事件冒泡
            e.stopPropagation();
            var currentGroupName = $(this).attr("data-group");
            if (currentGroupName != self.groupName) {
                self.groupName = currentGroupName;
                self.getGroup();
            }

            //初始化弹窗
            self.initPopup($(this));
        });

        this.popupMask.click(function () {
            $(this).fadeOut();
            self.popupWin.fadeOut()
        })
        this.closeBtn.click(function () {
            self.popupMask.fadeOut();
            self.popupWin.fadeOut()
        });

        this.flag = true;
        this.nextBtn.hover(function () {//hover移入方法
            if (!$(this).hasClass("disabled") && self.groupData.length > 1) {
                $(this).addClass("lightbox-next-btn-show");
            }
        }, function () {//hover移出方法
            if (!$(this).hasClass("disabled") && self.groupData.length > 1) {
                $(this).removeClass("lightbox-next-btn-show");
            }
        }).click(function (e) {
            console.log("--next-flag->" + self.flag);
            if (!$(this).hasClass("disabled") && self.flag) {
                self.flag = false;
                e.stopPropagation();
                self.goto("next");
            }
        });
        this.preBtn.hover(function () {
            if (!$(this).hasClass("disabled") && self.groupData.length > 1) {
                $(this).addClass("lightbox-prev-btn-show");
            }
        }, function () {
            if (!$(this).hasClass("disabled") && self.groupData.length > 1) {
                $(this).removeClass("lightbox-prev-btn-show");
            }
        }).click(function (e) {
            console.log("--prev-flag->" + self.flag);
            if (!$(this).hasClass("disabled") && self.flag) {
                self.flag = false;
                e.stopPropagation();
                self.goto("prev");
            }
        })
    }


    LightBox.prototype = {
        goto: function (dir) {
            if (dir === "next") {
                this.index++;
                if (this.index >= this.groupData.length - 1) {
                    this.nextBtn.addClass("disabled").removeClass("lightbox-next-btn-show");
                }

                if (this.index != 0) {//当前不是第一张图片
                    this.preBtn.removeClass("disabled");
                }

                var src = this.groupData[this.index].src;
                console.log(this.index);
                this.loadPicSize(src);
            } else {
                this.index--;
                if (this.index <= 0) {
                    this.preBtn.addClass("disabled").removeClass("lightbox-prev-btn-show");
                }

                if (this.index != this.groupData.length - 1) {
                    this.nextBtn.removeClass("disabled");
                }

                var src = this.groupData[this.index].src;
                console.log(this.index);
                this.loadPicSize(src);
            }
        },
        loadPicSize: function (sourceSrc) {
            var self = this;

            self.popupPic.css({width: "auto", height: "auto"}).hide();
            this.preLoadImg(sourceSrc, function () {
                self.popupPic.attr("src", sourceSrc);
                var PicWidth = self.popupPic.width();
                var picHeight = self.popupPic.height();
                console.log("图片宽高---" + PicWidth + "-----" + picHeight);
                self.changePic(PicWidth, picHeight);
            });
        },
        changePic: function (width, height) {
            var self = this;
            var winHeight = $(window).height();
            var winWidth = $(window).width();

            var scale = Math.min(winWidth / (width + 10), winHeight / (height + 10), 1);

            width = width * scale;
            height = height * scale;
            this.prcViewArea.animate({
                width: width - 10,
                height: height - 10
            });


            this.popupWin.animate({
                width: width,
                height: height,
                marginLeft: -(width / 2),
                top: (winHeight - height) / 2
            }, function () {
                self.popupPic.css({
                    width: width - 10,
                    height: height - 10,

                }).fadeIn();
                self.picCaptionArea.fadeIn();

            });
            this.flag = true;
            console.log("--set--this.flag->" + this.flag);

            this.captionText.text(this.groupData[this.index].caption);
            this.currentIndex.text("当前索引：" + (this.index + 1) + ":" + this.groupData.length);
        },
        preLoadImg: function (sourceSrc, callback) {
            var img = new Image();
            if (!!window.ActiveXObject) {//ie浏览器没有window.onload方法
                img.onreadystatechange = function () {
                    if (this.readyState == "complete") {
                        callback();
                    }
                };
            } else {
                img.onload = function () {
                    callback();
                }
            }
            img.src = sourceSrc;
        },
        showMaskAndPopup: function (sourceSrc, currentId) {
            console.log(sourceSrc + "----showMaskAndPopup-----" + currentId);
            var self = this;
            this.popupPic.hide();
            this.picCaptionArea.hide();

            this.popupMask.fadeIn();
            var winWidth = $(window).width();
            var winHeight = $(window).height();

            this.prcViewArea.css({
                width: winWidth / 2,
                height: winHeight / 2
            })
            this.popupWin.fadeIn();

            var viewHeight = winHeight / 2 + 10;
            this.popupWin.css({
                width: winWidth / 2 + 10,
                height: winHeight / 2 + 10,
                marginLeft: -(winWidth / 2 + 10) / 2,
                top: -viewHeight,
            }).animate({
                top: (winHeight - viewHeight) / 2,
            }, function () {
                //
                self.loadPicSize(sourceSrc);
            })

            //根据当前点击的id获取在当前组别的索引
            this.index = this.getIndexOf(currentId);
            console.log("点击索引位置-->" + this.index);

            var groupDataLenght = this.groupData.length;
            if (groupDataLenght > 1) {
                if (this.index === 0) {
                    console.log("this.index-->" + this.index);
                    this.preBtn.addClass("disabled")
                    this.nextBtn.remove("disabled")
                } else if (this.index == groupDataLenght - 1) {
                    this.preBtn.remove("disabled")
                    this.nextBtn.addClass("disabled")
                } else {
                    this.preBtn.remove("disabled")
                    this.nextBtn.remove("disabled")
                }
            } else {
                this.preBtn.addClass("disabled")
                this.nextBtn.addClass("disabled")
            }


        },


        getIndexOf: function (currentId) {
            var index = 0;
            $(this.groupData).each(function (i) {
                index = i;
                if (this.id === currentId) {
                    return false;
                }
            })
            return index;
        },

        initPopup: function (currentObj) {
            var self = this;
            var sourceSrc = currentObj.attr("data-source");
            var currentId = currentObj.attr("data-id");
            console.log(sourceSrc + "-----initPopup----" + currentId);
            this.showMaskAndPopup(sourceSrc, currentId);
        },

        getGroup: function () {
            var self = this;
            //根据当前组名获取所有相同组别的对象
            var groupList = this.bodyNode.find("*[data-group=" + this.groupName + "]");
            self.groupData.length = 0;
            groupList.each(function () {
                self.groupData.push({
                    src: $(this).attr("data-source"),
                    id: $(this).attr("data-id"),
                    caption: $(this).attr("data-caption")
                })
            });
            console.log("groupData---->" + self.groupData.toString());

        },

        renderDOM: function () {
            var strDom = '<div class="lightbox-img-box">' +
                '<span class="lightbox-btn lightbox-prev-btn"></span>' +
                '<img class="lightbox-image" src="img/2-2.jpg">' +
                '<span class="lightbox-btn lightbox-next-btn "></span>' +
                '</div>' +
                '<div class="lightbox-caption-box">' +
                '<div class="lightbox-caption-left">' +
                '<p class="lightbox-pic-desc">ddddddddd</p>' +
                ' <span class="lightbox-index">当前索引：0 of 0</span>' +
                ' </div>' +
                ' <span class="lightbox-close-btn"></span>' +
                ' </div>';

            this.popupWin.html(strDom);
            this.bodyNode.append(this.popupMask, this.popupWin);

        }
    }

    window["LightBox"] = LightBox;
})();

