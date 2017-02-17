/**
 * Created by LXH on 17/1/13.
 */

window.onload = function () {

    /*****
     * 音乐控制
     * @type {Element}
     */
    var music = document.getElementById("music");
    var auto = document.getElementById("audio");
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");

    music.onclick = function () {
        // alert("ddd");
        if (auto.paused) {
            auto.play();
            this.setAttribute("class", "play");
            // this.style.animationPlayState="running";//兼容性不太好
        } else {
            auto.pause();
            this.setAttribute("class", "");
            // this.style.animationPlayState="paused";
        }
    }

    auto.addEventListener("ended", function () {
        music.setAttribute("class", "")
    }, false);

    /****
     * 图片切换控制
     */
    // page1.onclick = function () {
    //     alert("ddd")
    //     page2.style.display = "block";
    //     page1.style.display = "none";
    // }

    page1.addEventListener("touchstart", function (event) {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top = "100%";
        setTimeout(function () {
            page2.setAttribute("class", "page fadeOut");
            page3.setAttribute("class", "page fadeIn");
        }, 5000)//延迟5s执行方法
    }, false);


};
