/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","6eab01a7d67365beae560e6ab143af90"],["/2024/01/06/阶段性总结/大二上期末感想/index.html","7746b07cc37828b19d85867fad99566d"],["/2024/01/09/阶段性总结/大二上总结/index.html","b7258760f201b3bb8f52ea01ce14c67d"],["/2024/01/12/学习笔记/数据结构期末复习/index.html","127b81dbc74a4a95af715783b305971b"],["/2024/01/12/感悟与展望/大学物理下不理想成绩的反思/index.html","ff46bffab4cb40776b8bde917fc9872a"],["/2024/01/17/遇到的bug/博客上传的问题得以解决/index.html","02dfdeb2f4357c1d0455b9de713c4f49"],["/2024/01/18/遇到的bug/git-clone问题/index.html","4485df1fb2c7a37d76e12058babb4371"],["/2024/01/21/阶段性总结/1-20总结/index.html","a8d33c0f0ad22f8a32e2a2f17951e757"],["/2024/01/23/学习笔记/C++map新知/index.html","b063c008d988ef0da30066af385973e7"],["/2024/01/28/学习笔记/HTML笔记/index.html","5ef59b1512de2040408662c278a54208"],["/2024/02/01/感悟与展望/科三挂了的感想/index.html","4aa952686f53b1cde9d211765cd0abee"],["/2024/02/23/阶段性总结/大二下开学前的总结与展望/index.html","3bdcd80010d4677e8eab09ebe2044e88"],["/2024/03/26/学习笔记/MySQL学习笔记/index.html","7b73a18ff20dc750e0503622adfa67e1"],["/2024/03/29/学习笔记/MySQL——34道查询练习题/index.html","7ae812d994f3f2750f70935f362a7bac"],["/2024/04/02/阶段性总结/大二下开学一个月后的总结/index.html","e59114fc07d0fd300983b89dbcf0ff6a"],["/2024/04/07/阶段性总结/前三学期的绩点感想/index.html","f946da3696f8a32cd7560f607251ab7c"],["/2024/04/27/遇到的bug/数据库实验——数据导入遇到的一系列问题/index.html","cdedbc66f09dd4c24e4520774c35cc1f"],["/2024/05/06/阶段性总结/大二下四月总结/index.html","653f67cfa6c011dc989c9c53f73dc333"],["/2024/05/28/学习笔记/C sharp/index.html","449d8d5f27b54e0e5faa3b95e37e2ed8"],["/2024/05/31/阶段性总结/大二下五月总结/index.html","34a383aa4a76059d28c140cd51b1c1f6"],["/2024/06/19/阶段性总结/大二下六月中总结/index.html","072aab009461847902ac88e42a041cdb"],["/2024/07/11/感悟与展望/法国被淘汰后的足球感想/index.html","61385bc550630a9500ee3ac6c77cb604"],["/2024/07/13/阶段性总结/大二下学期总结/index.html","2d8804ea76d09a3fecbfc6ca742c8731"],["/2024/07/14/感悟与展望/实况足球感想/index.html","092b0e4db76910798f26dee02732264b"],["/2024/07/21/学习笔记/Python学习笔记/index.html","d4f70e2a39c0682e9418617ada1a907c"],["/2024/09/05/阶段性总结/大三上开学感想/index.html","41ed320732b43b59de1e4672c9ccfcdf"],["/2024/09/14/阶段性总结/大二学年成绩感想/index.html","cfbbf73cc4f2ce5f6223680952f0591f"],["/2024/09/15/Next8.2.0主题更新计划/index.html","1517298b06c32fc6bda8ba79a721dc7e"],["/2024/09/18/鸡汤文字/文字的救赎/index.html","cbb8b21f2541382eba622f26149e0e3b"],["/2024/09/19/感悟与展望/心里话/index.html","225cdba6fae47454ff022d6a68f36f11"],["/2024/10/02/遇到的bug/Mysql无法连接问题/index.html","63b45742f575c41c75386e3343134ed2"],["/2024/10/07/学习笔记/ROS常用指令/index.html","7101022d69cd50f77fc14824a4b09fd7"],["/2024/10/07/阶段性总结/2024国庆假期总结/index.html","32384539ed79d30ef3b1050a0bf1fb0a"],["/2024/10/22/学习笔记/Linux基础命令/index.html","36798f40a38529da304bc196b3c8daf1"],["/2024/11/05/阶段性总结/十一月初总结/index.html","11349fac6b463bb8129d4b2d3100faec"],["/2024/11/18/阶段性总结/2024十一月月中总结/index.html","6275b1c4477ce8f388f6805cdc6820f0"],["/2024/12/05/阶段性总结/2024十二月月初总结/index.html","c40f29887d2dc667f51eb4d652059b28"],["/2024/12/14/阶段性总结/2024十二月中总结/index.html","4188942fb640aa53e2db4c9da5a26cba"],["/2024/12/20/感悟与展望/直面内心的反思/index.html","bd4148ef6ff795935e3b47f7e44f7e8c"],["/2024/12/24/学习笔记/通信原理期末重点复习/index.html","a0fa1dee850b2eadbd70f51d55379c72"],["/2025/01/09/感悟与展望/对于实况足球的反思/index.html","9fb5ae1f545807de8c9b677fcb0b11ed"],["/2025/01/09/阶段性总结/2025-1-9-大三上总结/index.html","d78c49e9dda3e2ba68d520ba79afc256"],["/2025/01/12/学习笔记/蓝桥杯C++刷题笔记/index.html","feb11c477dc7161616098977f6be76c7"],["/2025/02/24/阶段性总结/大三下整体规划/index.html","77ed3a377bf3c64f2e3b51a687783430"],["/2025/03/21/实况足球二十张高光券白光有感/index.html","bf35fdc06f2f266215a2df22afaefac0"],["/about/index.html","e6a35233f15c5702012a0373677cfaa3"],["/archives/2024/01/index.html","a6258d2a2567688c3503d5817457811a"],["/archives/2024/02/index.html","3450dac948f963ec2bfb775d2d3dd174"],["/archives/2024/03/index.html","2f2a6b2b62dc6b02054183ccaa7bb196"],["/archives/2024/04/index.html","52bcaede2c80b7531d549d434f7c64e4"],["/archives/2024/05/index.html","0421c7bf0bbed4da5d3e1894569db4d4"],["/archives/2024/06/index.html","2475ed5644f5d26f4537159fbe2142a6"],["/archives/2024/07/index.html","2140ca9d940b7d09eb4ad3edc3e7c4db"],["/archives/2024/09/index.html","fc4e82a093aaf6bedb0bc0ed3c62b3ab"],["/archives/2024/10/index.html","e271a485aba72087e49b93e17bfdbc9b"],["/archives/2024/11/index.html","56c8323f8393d685ddcf8b50b1576c22"],["/archives/2024/12/index.html","fd66226715699b779c7f9854667320d6"],["/archives/2024/index.html","581657be95448256dca25347f39b973f"],["/archives/2024/page/2/index.html","a03872d67c7cd088942a499696286350"],["/archives/2024/page/3/index.html","12f5b4a99b3fb9c4576414e10bea9ba6"],["/archives/2024/page/4/index.html","7031bc6b8e541754a78bc589fea2a18a"],["/archives/2025/01/index.html","51cb441f79fca095f84288dd114cff99"],["/archives/2025/02/index.html","20790915ad4eb412379abdd731f2c03f"],["/archives/2025/03/index.html","a241a2e63baf4ce2bb3eb20de2b43e80"],["/archives/2025/index.html","96c28ecd2d5ccc1b56028951957f085b"],["/archives/index.html","b197c5b141cbcaf92b6dd7f16fccf1c1"],["/archives/page/2/index.html","08cc554a35c75698dc5307a8931725a8"],["/archives/page/3/index.html","ab2dffc6cd26588e04e8e23222c4db23"],["/archives/page/4/index.html","b3901905cd01423beca23c0df94a1fd2"],["/archives/page/5/index.html","b50618f47b149e5b8df7849aedc2244e"],["/categories/Plan/index.html","acc98723777017901c098c7aa94cb1d4"],["/categories/Problem/index.html","24b846e7904acfc7ad6794c3b1eee65e"],["/categories/index.html","93bdf92c5ec5c0975c6cbfcef26be83a"],["/categories/人生感悟/index.html","59b154ba08ac2af2213da691afd895a7"],["/categories/人生感悟/page/2/index.html","71d10fa89891b4b02034d9395eef5e2c"],["/categories/人生感悟/page/3/index.html","30a8fd686ca099c0070e94644ea4a104"],["/categories/喜欢的文字/index.html","3ed9f49295276bcac31b45ceb07634ed"],["/categories/游戏/index.html","26757c7a0dec0a670a4c266eaaaa8ef4"],["/categories/编程学习/index.html","c9282e7ef83fb0474c788271da2cc7cb"],["/categories/编程学习/page/2/index.html","7ade7c4837a6b575153df463b921569c"],["/categories/通信原理/index.html","2e03334ba8f72999dde6a7a405f4b76c"],["/categories/面对失败/index.html","fb6a42e5bb4a2b41df35d92d93ac77b4"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","e992b2e97e12e479b24ff94c2d028348"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","03f65f39c01ce042e9d497422cb12404"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/exif.js","9c486db86e7ceeb1ec2c0f36518f5603"],["/lib/fireworks.js","e7e4d9972a4c7ada5122077088b970be"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","7525d27f9394f7e25ff7d92af4c5484c"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/page/2/index.html","c22daffe90bdf3ca8743a676274cce22"],["/page/3/index.html","442a755d6e4766d2ca2dfc1e54ce313c"],["/page/4/index.html","77db5ead17937573b32b0dcedb5ca93d"],["/page/5/index.html","ee2e73a98e679204badd7015b05dc2af"],["/resources/index.html","488c5a72a8f4283bbb4e1faa0fdf9ce9"],["/sw-register.js","eda6b59c0a04b21a854f4ffc5742e547"],["/tags/C/index.html","42d1fa34c33414149d1633480cc309e1"],["/tags/HTML/index.html","934a06421e8c4bbb8c204fa737da0597"],["/tags/Linux/index.html","e66a2b5420e00b47a0a1dabb2782cfd1"],["/tags/MySQL/index.html","31bf437ff055d09e3e6fe8f8b035598d"],["/tags/Python/index.html","6c96ee72b327e61483f016feba6d5c61"],["/tags/index.html","5b4a5c3f0eebe078ccfa08046753eb43"],["/tags/励志/index.html","d0c258f130dd425da2ab68181b5d8519"],["/tags/博客问题/index.html","ab7f78fdc2cea970b2411783c7a20e6f"],["/tags/实况足球/index.html","bdb9b6434ed556a982b8bdac1b1f5625"],["/tags/总结/index.html","6782bd4afc6f72b816f8b32fcdd2bc0a"],["/tags/总结/page/2/index.html","f86a0f4e7f41c9f71a6c92337fe3d90a"],["/tags/数据结构/index.html","733fc0598894110fea0c21655c10fba2"],["/tags/竞赛/index.html","2e83ccf39810f2960730e751687ed386"],["/tags/考试复习/index.html","1575ece5513889a7d53170169201a856"],["/tags/规划/index.html","986638ed8034d7de38d8ff77bb7efe73"],["/tags/随笔/index.html","6b632aa43cabfef5a3002a694af19f6f"],["/tags/随笔/page/2/index.html","dc0f58f5f02571275e39e949e3405a9d"]];
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
