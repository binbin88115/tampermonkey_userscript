// ==UserScript==
// @name         NoveLR
// @namespace    http://china.beno.com/
// @version      0.1
// @description  reading novel online
// @author       Beno
// @match        http://www.79xs.com/Html/Book/*/*/*.html
// @require      http://code.jquery.com/jquery-2.2.4.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var observer = new MutationObserver(function(records) {
        for (var i = 0; i < document.body.childNodes.length; ++i) {
            var element = document.body.childNodes[i];
            if (element.id === undefined || element.id !== 'novelr_data') {
                element.remove();
            }
        }
    });
    var option = {
        'childList': true
    };
    observer.observe(document.body, option);
    
    var getData = function() {
        var title = '';
        var content = '';
        var hn = location.hostname;
        if (hn == "www.79xs.com") {
            title = $('#htmltimu').text();
            content = $('#BookText').html();
        } else if (hn == "www.23wxx.com") {
            title = $('div.bookname h1').text();
            content = $('#content').html();
        } else if (hn == "www.daomengren.com") {
            title = $('div.bookname h1').text();
            content = $('#content').html();
        } else if (hn == "www.gxwztv.com") {
            title = $('div#h1 > h1').text();
            content = $('#txtContent p').html();
        } else if (hn == "www.xueyinglingzhu5200.com") {
            title = $('div.bookname h1').text();
            content = $('#content').html();
        } else if (hn == "www.biquge.com.tw") {
            title = $('div.bookname h1').text();
            content = $('#content').html();
        } else if (hn == "www.lwxs520.com") {
            title = $('#bgdiv .border_l_r h1').text();
            content = $('#content p').html();
        }
        return { "title": title, "content": content };
    };
    
    var data = getData();
    document.head.innerHTML = '<title>' + 'NoveLR - ' + data.title + '</title>';
    document.body.innerHTML = '<div id="novelr_data"><div><h2>' + data.title + '</h2><div>' + data.content + '</div></div></div>';
    $('body').css({"background-color": "#e9ecec"});
    $('#novelr_data').css({ "width": "1000px", "align": "center", "margin": "20px auto", "border": "1px solid #d8d8d8", "background-color": "#f6f1e7", "font-size": "26px", "line-height": "40px" });
    $('#novelr_data > div').css({ "border": "1px solid #d8d8d8", "margin": "10px", "font-family": "'Microsoft YaHei',PingFangSC-Regular,HelveticaNeue-Light,'Helvetica Neue Light',sans-serif" });
    $('#novelr_data > div > div').css({ "padding": "20" });
    $('#novelr_data h2').css({ "text-align": "center" });
})();