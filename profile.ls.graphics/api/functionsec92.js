///////////////////////////////////// LS Graphics Clear Cache Systems  v1.1.7 /////////////////////////////////////

$(document).ready(function () {


    Paddle.Setup({
        vendor: 15046,
        eventCallback: function(data) {
            if (data.event === 'Checkout.Loaded') {
                window.postMessage({type: 'product_total_price', key: data.eventData.checkout.prices.customer.total});
                window.postMessage({type: 'product_title', key: data.eventData.product.name});

                localStorage.setItem('product_total_price', data.eventData.checkout.prices.customer.total)
                localStorage.setItem('product_title', data.eventData.product.name);
            }
            if (data.event === 'Checkout.Coupon.Applied') {
                window.postMessage({type: 'product_total_price', key: data.eventData.checkout.prices.customer.total});
                window.postMessage({type: 'product_title', key: data.eventData.product.name});

                localStorage.setItem('product_total_price', data.eventData.checkout.prices.customer.total)
                localStorage.setItem('product_title', data.eventData.product.name);
            }
        }
    });

    Paddle.Options({debug: false});

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    let uniformest = getRandomInt(980884712355163);
    // Paddle Connect
    // Paddle.Setup({
    //     vendor: 15046
    // });

    // Download page config
    let download_url = 'https://www.ls.graphics/download';

    // Profile page
    let profile_url = "https://profile.ls.graphics/";

    // Token backend url
    let web_url = `${profile_url}backend/web.php`;



    // Setup download page
    let gets = (function () {
        var a = window.location.search;
        var b = new Object();
        a = a.substring(1).split("&");
        for (var i = 0; i < a.length; i++) {
            c = a[i].split("=");
            b[c[0]] = c[1];
        }
        return b;
    })();
    if (gets.link) {
        var seconds = 5;
        var seconds_timer_id = setInterval(function () {
            if (seconds > 0) {
                seconds--;
                if (seconds < 10) {
                    seconds = seconds;
                }
                console.log(gets.text)
                if (gets.text !== undefined) {
                    $(".div-block-225").parent().find("div.type-2.center").html(`You will be redirected in <br />${seconds} seconds`);
                    if (seconds === 0) {
                        let getss = (function () {
                            var a = window.location.search;
                            var b = new Object();
                            a = a.substring(1).split("&");
                            for (var i = 0; i < a.length; i++) {
                                c = a[i].split("=");
                                b[c[0]] = c[1];
                            }
                            return b;
                        })();

                        setTimeout(loadfunction2, 100);

                        function loadfunction2() {
                            window.location.href = getss.link;
                        }

                        $(".div-block-225").parent().find("div.type-2.center").html(`You will redirected`);
                    }
                } else {
                    $(".div-block-225").parent().find("div.type-2.center").html(`Your file will start downloading in <br />${seconds} seconds`);
                    if (seconds === 0) {
                        let gets = (function () {
                            var a = window.location.search;
                            var b = new Object();
                            a = a.substring(1).split("&");
                            for (var i = 0; i < a.length; i++) {
                                c = a[i].split("=");
                                b[c[0]] = c[1];
                            }
                            return b;
                        })();
                        let link = document.createElement('iframe');
                        link.setAttribute('src', gets.link);
                        link.setAttribute('width', '0');
                        link.setAttribute('height', '0');
                        link.setAttribute('id', 'down-iframe');
                        link.setAttribute('rel', 'noreferrer');
                        $('body').append(link);
                        window.onload = function () {
                            setTimeout(loadfunction, 100)
                        }

                        function loadfunction() {
                            document.getElementById("down-iframe").src;
                        }

                        $(".div-block-225").parent().find("div.type-2.center").html(`The file download has already started...`);
                    }
                }
            } else {
                clearInterval(seconds_timer_id);
            }
        }, 1000);
    }


    $("body").on("click", 'a', function () {
        let data = $(this).attr('data-type');
        if (data === 'directdownload') {

            let url = $(this).attr('href');
            if (url) {
                let link = document.createElement('a');
                link.setAttribute('href', `${download_url}?link=${url}`);
                link.setAttribute('target', '_blank');
                onload = link.click();
            } else {
                alert('Sorry, but the link can\'t be found! Please contact ls.graphics support (info@lstore.graphics)');
            }
            return false;
        }
    });

    $("body").on("click", 'a', function () {
        let data = $(this).attr('data-type');
        if (data === 'js-redirect-topage') {
            let url = $(this).attr('href');
            if (url) {
                let link = document.createElement('a');
                link.setAttribute('href', `${download_url}?text=redirect&link=${url}`);
                link.setAttribute('target', '_blank');
                onload = link.click();
            } else {
                alert('Sorry, but the link can\'t be found! Please contact ls.graphics support (info@lstore.graphics)');
            }
            return false;
        }
    });
    // React JS Add
    // Fix for work
    // React JS configuration and prepeare UI
    if ($('.js-priceblock')[0]) {
        const ReactDiv = document.createElement('div');
        const staticDiv = document.createElement('div');
        ReactDiv.setAttribute('id', 'react-priceblock');
        staticDiv.setAttribute('class', 'show_and_hide_form');
        $('.js-priceblock').append(staticDiv);
        $('.js-priceblock').children().each(function (index, element) {
            $('.show_and_hide_form').append(element);
        })
        $('.js-priceblock').append(ReactDiv);
    }
    const reactBody = document.createElement('div');
    reactBody.setAttribute('id', 'ls-modals');
    $('body').prepend(reactBody);
    //
    $.getScript( "https://profile.ls.graphics/api/dev/auth.js?v="+uniformest, function( data, textStatus, jqxhr ) {
        console.info( "DEV: LS Graphics ReactJS auth v1.0");
    });
    $.getScript( "https://profile.ls.graphics/api/dev/popup.js?v="+uniformest, function( data, textStatus, jqxhr ) {
        console.info( "DEV: LS Graphics ReactJS popup v1.0");
    });
    $.getScript( "https://profile.ls.graphics/api/dev/bundle.js?v="+uniformest, function( data, textStatus, jqxhr ) {
        console.info( "DEV: LS Graphics ReactJS forms v1.0");
    });
    $.getScript( "https://profile.ls.graphics/api/products_bubble/bubble.js?v="+uniformest, function( data, textStatus, jqxhr ) {
        console.info( "ready");
    });
    $.getScript( "https://profile.ls.graphics/api/newforms.js?v="+uniformest, function( data, textStatus, jqxhr ) {
        console.info( "ready");
    });
});
