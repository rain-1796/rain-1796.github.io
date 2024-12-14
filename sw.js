/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","91108ddba906556f8e17124e7280248f"],["/2024/01/06/大二上期末感想/index.html","b280c1c8b985d008d4401e46a6653bf2"],["/2024/01/09/大二上总结/index.html","a13f6331c12151397bcf11f9dcf663c2"],["/2024/01/12/大学物理下不理想成绩的反思/index.html","e32d52f667145124b6111a1886e34912"],["/2024/01/12/数据结构期末复习/index.html","7d6abcfb55b85d63e573b2a628ff2d43"],["/2024/01/16/红龙贼/index.html","6a9d66bb7a3411e96f377e6ddc4c00b7"],["/2024/01/17/博客上传的问题得以解决/index.html","09dea236af5317e05071d38d3b1f5a42"],["/2024/01/18/git-clone问题/index.html","e3f4a517459a8fb179068e337d4b8721"],["/2024/01/21/1-20总结/index.html","701f1e6d2fc5b57046d931b8fdcb1f60"],["/2024/01/23/C++map新知/index.html","b25f1a2d952a27f602bca55956716c7a"],["/2024/01/28/HTML笔记/index.html","9242008aa4cd367959bc15eb64513f33"],["/2024/02/01/科三挂了的感想/index.html","4a130767ece55b21b59794b2a4e042b7"],["/2024/02/23/大二下开学前的总结与展望/index.html","d1635178c372a10076e243e0ca937ea8"],["/2024/03/26/MySQL学习笔记/index.html","83dcffefc3fd331ac36c8cc5b61b11a0"],["/2024/03/29/MySQL——34道查询练习题/index.html","d6b49794ed2d8a152c69c5a6ea1fdda0"],["/2024/04/02/大二下开学一个月后的总结/index.html","086cb42f1664972612b04a1f138549ca"],["/2024/04/07/前三学期的绩点感想/index.html","816f5c18ece28b0dc34116f592568c0f"],["/2024/04/27/数据库实验——数据导入遇到的一系列问题/index.html","bd52b0bc3063fa0a5e33073c4a1823b8"],["/2024/05/06/大二下四月总结/index.html","823f6ea688a8b99642b02d45effaa189"],["/2024/05/28/C sharp/index.html","82ef7e1aa8bfdb56618cb8a972c710db"],["/2024/05/30/数据库课设报告（图书管理系统）/index.html","9acb5799f3f6b1578c4a1f882d936f64"],["/2024/05/31/大二下五月总结/index.html","2fd9547ae951207df3abf91c33c9bb91"],["/2024/06/19/大二下六月中总结/index.html","093b88f98d88cd1e50fb8bf018ae0201"],["/2024/07/11/法国被淘汰后的足球感想/index.html","0527c47afad9cb71b718eff1e283e4cf"],["/2024/07/13/大二下学期总结/index.html","2cbdf69e1cdc00f704b9894d149987f9"],["/2024/07/14/实况足球感想/index.html","4078270b3f00345cd7d3336406ae56d4"],["/2024/07/21/Python学习笔记/index.html","6f0b10016d852738316d8bb2ae06c774"],["/2024/09/05/大三上开学感想/index.html","16ed69dea8987992373fd98949a8bdba"],["/2024/09/14/大二学年成绩感想/index.html","78bbc952884a369883d67c3f6a655118"],["/2024/09/15/Next8.2.0主题更新计划/index.html","a0d45501c902da7fd0e01258683ed555"],["/2024/09/18/文字的救赎/index.html","d732e3fe0d64ead66f524b0c628f11c6"],["/2024/09/19/心里话/index.html","05df762d0e92420a8ad96521bd32fd4e"],["/2024/10/02/Mysql无法连接问题/index.html","464f0998a9f3009d07ad3e6b92c8a21d"],["/2024/10/07/2024国庆假期总结/index.html","0c2f8416de96c44cbe1516ef5b54159e"],["/2024/10/07/ROS常用指令/index.html","66ea612c5b73f044f8e04a45a406c5f0"],["/2024/10/22/Linux基础命令/index.html","5aad33132da05ea2aea0f74754a5cff8"],["/2024/11/05/十一月初总结/index.html","9f23629beebecbf7db97ea7f96cfe695"],["/2024/11/18/2024十一月月中总结/index.html","a69c469344ed2fe0050bc4374d804fcf"],["/2024/12/05/2024十二月月初总结/index.html","4867cb3b3a2b6df7415c54f693ea51ff"],["/2024/12/14/2024十二月中总结/index.html","70ed54d8305fc24287405fbfbe6c4faf"],["/about/index.html","29eb2181c0fc789a3d927e00dd74587e"],["/archives/2024/01/index.html","787a0081569e71d16674dc2e713c05bd"],["/archives/2024/01/page/2/index.html","20daf3444de34eda5ea4e87daab0b46f"],["/archives/2024/02/index.html","ffadc8cf91d022328f18dcca6e1d1b3f"],["/archives/2024/03/index.html","24dde9c0ad15971381d672286af7a785"],["/archives/2024/04/index.html","771f384d4208276860080685503a7928"],["/archives/2024/05/index.html","74f14e42ca45222b27f1104b98b3a66f"],["/archives/2024/06/index.html","afca0531cd898822acf41833abe91041"],["/archives/2024/07/index.html","62abf5897709a9154613c0a322b92211"],["/archives/2024/09/index.html","e0e17590efeb387ac44b7b072162ce00"],["/archives/2024/10/index.html","0059176eb4960ec80e43bd8824765109"],["/archives/2024/11/index.html","1121f56a559c13b5a3a6ab45219c68c7"],["/archives/2024/12/index.html","a100c01bc06cb0558891d463078464ad"],["/archives/2024/index.html","0c8ce1bd3fa706b6aaf871f8655c6df3"],["/archives/2024/page/2/index.html","7d593e2fa998652b51e69b18fefa1141"],["/archives/2024/page/3/index.html","0ace7fcc2147b74701bfd308d7174c1a"],["/archives/2024/page/4/index.html","d320dff5fa16151a2014a1aaaa123edd"],["/archives/index.html","83b77a855d2e48d4fc3f4b8e3670d988"],["/archives/page/2/index.html","d8b72bcea8383c742281c26a41752f37"],["/archives/page/3/index.html","700441bdad54a8388796aff778e8cdca"],["/archives/page/4/index.html","3d9b3a939036d3da5d4753bf56dd9517"],["/categories/Plan/index.html","5fc4214f77cd765e246d32d961f0b3ed"],["/categories/Problem/index.html","f863aea78c3cb61ec7c00610e491fd44"],["/categories/index.html","a00f70baa8c99e58ff8f05c351a4ae4a"],["/categories/人生感悟/index.html","6ad25bdf8a6b2105af0a2782fe6df35f"],["/categories/人生感悟/page/2/index.html","5b9ef04bcc011ebb615367cabf6edc4b"],["/categories/人生感悟/page/3/index.html","c01d47281eb6912b2d7571ba328c64f1"],["/categories/喜欢的文字/index.html","62050a59df077117ee5da6a927a10cd0"],["/categories/游戏/index.html","55fc9cce8b85d0c8faf91e5598a9b17d"],["/categories/编程学习/index.html","d7bfccdbaf2ce2b41600caafe98a3941"],["/categories/编程学习/page/2/index.html","8324a2e104ffee810046b82d5ea294af"],["/categories/面对失败/index.html","6f320b57cc7f372faad9de112656c805"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","f878cbff47d62cd5cce982fe065b75c5"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","57fc32740b20cb11ff9166af3332a46a"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/fireworks.js","921767fcb974670cc585a848f5f63172"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-ribbon/README.html","768f67e1911494c58fc32d022642e480"],["/lib/canvas-ribbon/canvas-ribbon.js","952c131e3099dbf7aad0c350355fea0a"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","00a5b3fe4ad5c57ce572577098a701bf"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","162964d0314dbe46a4b67e57136abab0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["/page/2/index.html","2e76d1f9ac9e9e889435f2963e1eb793"],["/page/3/index.html","ae2d6d6e7c3ba53e711b25dff1ebb558"],["/page/4/index.html","adbd3e66e72135b482d8894f7c4790b9"],["/resources/index.html","759af5656ef4def467d873115c5b7b6b"],["/sw-register.js","1289f342bfcb01bb5113b8fc48be7915"],["/tags/C/index.html","b453cd45351ea13b27d26b6b43a418f5"],["/tags/HTML/index.html","ac945ef3246dfdbe0c7d7ead1452d75e"],["/tags/Linux/index.html","6d4b31c9c8d55aee5ed2b78dce138e41"],["/tags/MySQL/index.html","1563255cdece6a4fe7384570392b2fd3"],["/tags/Python/index.html","6b4a7a31ea2a20a4896bc3464f0b3cf7"],["/tags/index.html","0fd3204fae3a65ebbad050abece55e3c"],["/tags/励志/index.html","27e2ba1469c644d29d7bc4be4fef5ff0"],["/tags/博客问题/index.html","1c2055d1d32cfe7022037d1aa4bb5eb2"],["/tags/实况足球/index.html","82195b7ff8b7e9c947334a2f1815a4ea"],["/tags/总结/index.html","ece56644734348a381b563b4df1930c0"],["/tags/总结/page/2/index.html","bf450e01fa4db4833f34a0d92b5e6466"],["/tags/数据结构/index.html","4e2973e9293f29c5266da3f1e025c7f4"],["/tags/炉石传说/index.html","36ec94094ef012c6b828bc79b0eb8376"],["/tags/随笔/index.html","51013e04c38dd27a290b71d4b2780083"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
