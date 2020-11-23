$(document).ready(function () {
    $(window).scroll(function (event) {
        console.log($(window).scrollTop());
        if (eval($(window).scrollTop()) >= 120) {
            $(".navbar").css({
                position: "fixed",
                top: "0px",
                width: "100%"
            });
        } else {
            $(".navbar").css({
                position: "unset",
                width: "100%",
            });
        }
    });
});

function hideMess() {
    var x = document.getElementById('mess');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

// $(document).ready(function(){
//     $('.iconMess').click(function(){
//         $('.mess').html('<img onclick="hideMess()" width="100%" class="messIc" src="https://s3.amazonaws.com/ionic-marketplace/facebook-messenger-clone/icon.png">')
//     })
// })
// function chatbox() {
// }
if (window.location.pathname === '/' || window.location.pathname === '/page=2') {
    document.getElementById("ads").style.display = "block";
    document.getElementById("pagination").style.display = "block";
}

if (window.location.pathname === '/login' || window.location.pathname === '/register') {
    document.getElementById("ads2").style.display = "none";
}

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('goTop').fadeIn();
        } else {
            $('goTop').fadeOut();
        }
    });
    $('#goTop').click(function () {
        $("html, body").animate({scrollTop: 0}, 300);
        return false;
    });
});

function checkLogIn() {
    let username = document.getElementById("username");
    let password = document.getElementById("password").value;
    if (username.value === "" && password === "") {
        alert("Vui lòng nhập tài khoản và mật khẩu!");
    } else {
        if (username.value === "admin" && password === "12345") {
            alert("Đăng nhập thành công!");
            username.value = "";
            password = "";
        } else {
            alert("Sai tên đăng nhập hoặc mật khẩu!");
            username.value = "";
            password = "";
        }
    }
}
// function checkRegister() {
//     let username = document.getElementById("username");
//     let password = document.getElementById("password").value;
//     if (username.value === "" && password === "") {
//         alert("Vui lòng nhập tài khoản và mật khẩu!");
//     } else {
//         if (username.value === "admin" && password === "12345") {
//             alert("Đăng nhập thành công!");
//             username.value = "";
//             password = "";
//         } else {
//             alert("Sai tên đăng nhập hoặc mật khẩu!");
//             username.value = "";
//             password = "";
//         }
//     }
// }
