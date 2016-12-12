window.onload = function() {
    //获取元素
    var container = document.getElementsByClassName('index-banner')[0];
    var imgList = document.getElementsByClassName('imgList')[0];
    var dotList = document.getElementsByClassName('dotList')[0];
    var dots = dotList.children;
    var prev = document.getElementsByClassName('prev')[0];
    var next = document.getElementsByClassName('next')[0];
    var lessonList = document.getElementsByClassName('lesson-list')[0];//课程滚动
    var prev1 = document.getElementsByClassName('prev1')[0];
    var next1 = document.getElementsByClassName('next1')[0]
    var time; //这是一个定时器

    //点击事件
    prev.onclick = function() {
        leftMove(560,5,imgList);
        tab();
    }
    next.onclick = function() {
        rightMove(560,5,imgList);
        tab();
    }
    //点击向左移动
    function leftMove(num,n,obj) {
        obj.style.left = parseInt(obj.style.left) + num + 'px';
        // alert(parseInt(imgList.style.left));
        //判断点击到头的情况
        if (parseInt(obj.style.left) > 0) {
        	obj.style.left = -(n-1)*num + 'px';
        }
    }
    //点击向右移动
    function rightMove(num,n,obj){
    	obj.style.left = parseInt(obj.style.left) - num + 'px';
        // alert(parseInt(imgList.style.left));
        //判断点击到头的情况
        if (parseInt(obj.style.left) < -(n-1)*num) {
        	obj.style.left = 0 + 'px';
        }
    }

     //小圆点hover上去时候图片相对应
        for (var i = 0; i < dots.length; i++) {
            //让所有圆点都是未点击状态
            dots[i].onmouseover = function () {
                for (var i = 0; i < dots.length; i++) {
                    if (dots[i].className == 'on') {
                        dots[i].className = '';
                    }
                }
                this.className = 'on';
                //让点的index对应图片的index
                for (var i = 0; i < dots.length; i++) {
                    if (dots[i].className == 'on') {
                        imgList.style.left = -560 * i + 'px';
                    }
                }
            }
        }
//点击时候正好对应这个点
        function tab() {
            var index = Math.abs(parseInt(imgList.style.left) / 560);
            for (var i = 0; i < dots.length; i++) {
                if (i !== index) {
                    if (dots[i].className == 'on') {
                        dots[i].className = '';
                    } else {
                        dots[index].className = 'on';
                    }
                }
            }
        }
        //设置个定时器自动轮播,实际上就是触发点击事件
        function go() {
            timer = setInterval(function () {
                next.onclick();
            }, 3000)
        }
        go();
        //鼠标放上去清除定时器,鼠标移开再重新开始
        container.onmouseover = function () {
            clearTimeout(timer);
        };
        container.onmouseout = function () {
            go();
        };

        // 小课程滚动部分
        // 向左滚动
    prev1.onclick = function() {
        leftMove(186.5,10,lessonList);
    }
    next1.onclick = function() {
        rightMove(186.5,10,lessonList);
    }

}
