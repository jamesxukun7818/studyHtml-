$(function ($) {
    //head static
    $(".middle_list li").bind({
        mouseover: function () {
            $(this).addClass("active");
        },
        mouseout: function () {
            $(this).removeClass("active");
        }

    });
    //head end


//    轮播图 start
    var image_list = $(".conten_box .left .banner .images li img");
    var button_list = $(".conten_box .left .banner .list li");
    var buttons = $(".conten_box .left .banner .button li");
    var x = 0;
    var run;

//初始化
    image_list.hide();
    image_list.eq(0).show();
    button_list.eq(0).addClass("on");

    // button_list 模块
    button_list.on("click", function () {
        if (x != $(this).index()) {
            image_change($(this).index()
            )
        }


    });
    // alert(buttons.length);

    // button 模块

    buttons.on("click", function () {
        var y = x;
        if ($(this).index()) {

            if (y >= button_list.length - 1) {
                y = 0;
            } else {
                y++;
            }

        } else {
            if (y < 1) {
                y = button_list.length - 1;
            }
            else {
                y--;
            }

        }
        image_change(y);
    });

    //自动轮播模块
    function run_fun() {
        run = setInterval(function () {
            var y = x;
            y++;
            if (y > button_list.length - 1) {
                y = 0;
            }

            image_change(y);
        }, 3000);
        return run_fun;
    }

    image_list.hover(function () {
        clearInterval(run);
    }, run_fun());


    function image_change(y) {
        image_list.eq(x).fadeOut(2000);
        button_list.eq(x).removeClass("on");

        x = y;

        image_list.eq(x).fadeIn(1000);
        button_list.eq(x).addClass("on");

    }

//    轮播图 end

// 课程显示详情 start

    var menu = $(".conten_box .left .menu ul li");
    var box = $(".conten_box .left .menu_images .image_box .box ");
    // alert(box.length);

    // 初始化
    box.hide().eq(0).show();

    menu.on("mousemove", function () {
        box.hide().eq($(this).index()).show();
    });

    // 课程显示详情 end

});