// ==UserScript==
// @name         NoveLR
// @namespace    http://china.beno.com/
// @version      0.1
// @description  reading novel online
// @author       Beno
// @match        http://www.79xs.com/Html/Book/*/*/*.html
// @match        http://www.23wxx.com/*/*.html
// @match        http://www.daomengren.com/*/*.html
// @match        http://www.gxwztv.com/*/*/*.html
// @match        http://www.xueyinglingzhu5200.com/book/*/*.html
// @match        http://www.biquge.com.tw/*/*.html
// @match        http://www.biquge.com/*/*.html
// @match        http://www.lwxs520.com/books/*/*/*.html
// @match        http://www.555zw.com/book/*/*/*.html
// @match        http://www.abc169.com/book/*/*/*.html
// @match        http://www.lanseshuba.com/seshu/*/*.html
// @match        http://www.81zw.com/book/*/*.html
// @run-at       document-end
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
    observer.observe(document.body, { 'childList': true });
    
    var data = function() {
        var title = '';
        var content = '';
        var hn = location.hostname;
        if (hn == "www.79xs.com") {
            title = document.body.querySelector('#htmltimu').innerText;
            content = document.body.querySelector('#BookText').innerHTML;
        } else if (hn == "www.23wxx.com") {
            title = document.body.querySelector('div.bookname h1').innerText;
            content = document.body.querySelector('#content').innerHTML;
        } else if (hn == "www.daomengren.com") {
            title = document.body.querySelector('div.bookname h1').innerText;
            content = document.body.querySelector('#content').innerHTML;
        } else if (hn == "www.gxwztv.com") {
            title = document.body.querySelector('div#h1 > h1').innerText;
            content = document.body.querySelector('#txtContent').innerHTML;
        } else if (hn == "www.xueyinglingzhu5200.com") {
            title = document.body.querySelector('div.bookname h1').innerText;
            content = document.body.querySelector('#content').innerHTML;
        } else if (hn == "www.biquge.com.tw" || hn == "www.biquge.com") {
            title = document.body.querySelector('div.bookname h1').innerText;
            content = document.body.querySelector('#content').innerHTML;
        } else if (hn == "www.lwxs520.com") {
            title = document.body.querySelector('#bgdiv .border_l_r h1').innerText;
            content = document.body.querySelector('#content p').innerHTML;
        } else if (hn == "www.555zw.com") {
            title = document.body.querySelector('div.article_listtitle').innerText;
            content = document.body.querySelector('#content').innerHTML;
        } else if (hn == "www.abc169.com") {
            title = document.body.querySelector('div.bookname h1').innerText;
            content = document.body.querySelector('#content').innerHTML;
        } else if (hn == "www.lanseshuba.com") {
            title = document.body.querySelector('#amain dd h1').innerText;
            content = document.body.querySelector('#contents').innerHTML;
        } else if (hn == "www.81zw.com") {
            title = document.body.querySelector('div.bookname h1').innerText;
            content = document.body.querySelector('#content').innerHTML;
        }
        return { "title": title, "content": content };
    }();
    document.head.innerHTML = '<title>' + 'NoveLR - ' + data.title + '</title>';
    document.body.innerHTML = '<div id="novelr_data"><div><h2>' + data.title + '</h2><div>' + data.content + '</div></div></div>';
    document.body.style.cssText = 'background-color:#e9ecec';
    document.body.querySelector('#novelr_data').style.cssText = 'width:1000px; align:center; margin:20px auto; border:1px solid #d8d8d8;background-color:#f6f1e7;font-size:26px; line-height:40px;';
    document.body.querySelector('#novelr_data > div').style.cssText = 'border:1px solid #d8d8d8; margin: 10px; font-family:"Microsoft YaHei",PingFangSC-Regular,HelveticaNeue-Light,"Helvetica Neue Light",sans-serif;';
    document.body.querySelector('#novelr_data > div > div').style.cssText = 'padding:20px';
    document.body.querySelector('#novelr_data h2').style.cssText = 'text-align:center';
})();