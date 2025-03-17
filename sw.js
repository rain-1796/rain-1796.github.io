/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","f38fb801e13c9dbb7b9a70bf206e5ee6"],["/2024/01/06/阶段性总结/大二上期末感想/index.html","16676c6aad4a4c48fefced056e0c1931"],["/2024/01/09/阶段性总结/大二上总结/index.html","7616b5affdca46c359d64f50ba625d84"],["/2024/01/12/大学物理下不理想成绩的反思/index.html","f639ce5c769ef2404ca3bdf451b7ebf6"],["/2024/01/12/数据结构期末复习/index.html","d05efe6915b06c259b912a6307280ecc"],["/2024/01/16/红龙贼/index.html","2a8a76d401134af62e4739b1be379401"],["/2024/01/17/博客上传的问题得以解决/index.html","9158b4447410d17a33338e7711a56c01"],["/2024/01/18/git-clone问题/index.html","02dfdb45adde84bfdb8b2d5a068f8229"],["/2024/01/21/阶段性总结/1-20总结/index.html","f323c86fd1e600705e1096451808ebec"],["/2024/01/23/C++map新知/index.html","7f432b780f8a831eec23d22766dce92b"],["/2024/01/28/HTML笔记/index.html","5370a43a50bd6b23a5be135f42eb671f"],["/2024/02/01/科三挂了的感想/index.html","147af8080ba58d648bfa9edf8e2530c5"],["/2024/02/23/阶段性总结/大二下开学前的总结与展望/index.html","e8bc5c26251e8e91a78d4c56e3762bc8"],["/2024/03/26/MySQL学习笔记/index.html","cce9ef90c709d632405ab08ef31a46e0"],["/2024/03/29/MySQL——34道查询练习题/index.html","7c65ebcccc570c7e2d8c141d6420b9b1"],["/2024/04/02/阶段性总结/大二下开学一个月后的总结/index.html","029ba43d1e6aa11aa699aba4921966c2"],["/2024/04/07/阶段性总结/前三学期的绩点感想/index.html","5080786a649093df2b73bac547f0adbe"],["/2024/04/27/数据库实验——数据导入遇到的一系列问题/index.html","d2b0505dcf1dde4d394c33d4e8691866"],["/2024/05/06/阶段性总结/大二下四月总结/index.html","6af79ee7558dd4b5ef57276eb526174b"],["/2024/05/28/C sharp/index.html","e16701fd632310a56001d4d6a3f017b5"],["/2024/05/30/数据库课设报告（图书管理系统）/index.html","246191677d323b69daad8738206f0232"],["/2024/05/31/阶段性总结/大二下五月总结/index.html","2676c58d732cb9b3c64a495af7669e4d"],["/2024/06/19/阶段性总结/大二下六月中总结/index.html","535b867cd2c6706d1a36b89e6061afb5"],["/2024/07/11/法国被淘汰后的足球感想/index.html","cdc35f11eddc31bc8fa7b96f7342eeed"],["/2024/07/13/阶段性总结/大二下学期总结/index.html","385c83a8e270c2d21b8ec179e456bf9b"],["/2024/07/14/实况足球感想/index.html","d14dd9d3989158e7326c455b2cc1660d"],["/2024/07/21/Python学习笔记/index.html","ea50d5cc26bf40660f178dbb3ec44057"],["/2024/09/05/阶段性总结/大三上开学感想/index.html","eef07f4e0eea2abbf0803b614f78d218"],["/2024/09/14/阶段性总结/大二学年成绩感想/index.html","270926169e083f2ba368ab93e6872818"],["/2024/09/15/Next8.2.0主题更新计划/index.html","016a988297f6f0e2aff4bf333ba7d459"],["/2024/09/18/鸡汤文字/文字的救赎/index.html","11faca90139b3f9e3e48e8f248e7a208"],["/2024/09/19/心里话/index.html","9b8e8097e9e94e9c8bd3c72ea8174954"],["/2024/10/02/Mysql无法连接问题/index.html","b03e3ebb70c8cd91b55d36451d791faf"],["/2024/10/07/ROS常用指令/index.html","7f33f528f2600fd4f77837072b3e0d5d"],["/2024/10/07/阶段性总结/2024国庆假期总结/index.html","8df31a08c3101b7bd67c7ec4dd7a91ce"],["/2024/10/22/Linux基础命令/index.html","401583f78c4ce74abbaf0654d00dd7a3"],["/2024/11/05/阶段性总结/十一月初总结/index.html","8965ddae877a677d290d6746a0527bab"],["/2024/11/18/阶段性总结/2024十一月月中总结/index.html","ae67a8e1834b083b1ab93ec31ba763b3"],["/2024/12/05/阶段性总结/2024十二月月初总结/index.html","c7eb5d093a4f7e265fd9c10dd9e9a3c6"],["/2024/12/14/阶段性总结/2024十二月中总结/index.html","a8b1cbf8d7bb25810bf52c7af29c68d0"],["/2024/12/20/直面内心的反思/index.html","9a238b476c4e2713d3de47f23e756832"],["/2024/12/24/通信原理期末重点复习/index.html","6441e4566a22ec87badcd76fcb5a72be"],["/2025/01/09/对于实况足球的反思/index.html","3d170f36ec82d0f569388c9c70bf5fc5"],["/2025/01/09/阶段性总结/2025-1-9-大三上总结/index.html","68a84d30e89609a8a0714931fea47861"],["/2025/01/12/蓝桥杯C++刷题笔记/index.html","bae1d6ca3af2473f8c72c3c1b85daa39"],["/2025/02/24/阶段性总结/大三下整体规划/index.html","af9456860a10312b8f16fa81b663a7a0"],["/about/index.html","e74db5c52467abb597457f1840d90fb7"],["/archives/2024/01/index.html","4489eb0573308d6328cd11aa3b7eb52f"],["/archives/2024/01/page/2/index.html","d924f0c989064e6bfbfae0c2e4c09ae6"],["/archives/2024/02/index.html","6167e6515c8e87e7b36e863adbea47c7"],["/archives/2024/03/index.html","9a362ce7eed751093ccd9c677daca188"],["/archives/2024/04/index.html","aac47654e3198d6942c1764db4afbf9e"],["/archives/2024/05/index.html","a8d975c4b35434de9a870a2a19337975"],["/archives/2024/06/index.html","b6c2ab64c0fdf6d4ced1b2d87d953164"],["/archives/2024/07/index.html","ceb625b65fdc02f2d66feb4d349696e9"],["/archives/2024/09/index.html","11f16cc66b6d928274886770ebba1383"],["/archives/2024/10/index.html","688c069b81b4132f156aaeeaf2a940ac"],["/archives/2024/11/index.html","5cf9cdc455e268457dcd42457d2cdb21"],["/archives/2024/12/index.html","dd6350d90690aa43d8e884eaba8c2111"],["/archives/2024/index.html","bd1d7f0e697693bab1ee9cf41f2cd626"],["/archives/2024/page/2/index.html","9b5057db86613d023102456c7b106b1f"],["/archives/2024/page/3/index.html","2f64668b6e42114ce2b8782468b39aeb"],["/archives/2024/page/4/index.html","7b2bf1282b446091cf39bbd3291e47f2"],["/archives/2024/page/5/index.html","5722e5904473723e2be14dd150f0c61a"],["/archives/2025/01/index.html","b8674058b1e22c06e506560f42f0130c"],["/archives/2025/02/index.html","a6db804962ed9bc64c21e03013a6328d"],["/archives/2025/index.html","256afe6ed6a8b94bc30af716baf91b91"],["/archives/index.html","5a7a8c5c924d398ab54da6df1fc25563"],["/archives/page/2/index.html","69254fff437f7e649e7680dc9e2d2294"],["/archives/page/3/index.html","1bb0d0617248b3eb234d0e32b42df581"],["/archives/page/4/index.html","ef6a5c97b1ca0fb32bd6bfe2c9a7fda4"],["/archives/page/5/index.html","75237800182dc2bcff53f56caea6f418"],["/categories/Plan/index.html","167a0c6bdbe9f266ea0ff534992231b0"],["/categories/Problem/index.html","7683d161f37db05cfba4dd5896c8ca16"],["/categories/index.html","cbe60d9be4b77e3f60e2fe3e7dee671d"],["/categories/人生感悟/index.html","59b5d0f426f6310b9bfe12a8656fa7c7"],["/categories/人生感悟/page/2/index.html","7dfbc3e35bf758975b361b8bc13683d8"],["/categories/人生感悟/page/3/index.html","e4dd3f5daf5ac822bc414e96b335da37"],["/categories/喜欢的文字/index.html","539948c8ee091d9b1ed655bca4031856"],["/categories/游戏/index.html","d868e603a6f2a9844cf8c19411b8c2b9"],["/categories/编程学习/index.html","9a9428503fd1e52c5e9bd89397968694"],["/categories/编程学习/page/2/index.html","10415412acc10402d1c2b6bed9915687"],["/categories/通信原理/index.html","1482eab7b90a707bfb30180301647b2a"],["/categories/面对失败/index.html","41623a814039828ea07c0f7320fa5a05"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","9e7f4297eeaeb007e3ca8ceebbe33865"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","00fd6efa8fbbf440c9ed8ae0662ec9aa"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/exif.js","9c486db86e7ceeb1ec2c0f36518f5603"],["/lib/fireworks.js","e7e4d9972a4c7ada5122077088b970be"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","07fd54ebcbf9e471949425bbdc50e726"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/page/2/index.html","c4644d376ef1bc29334a8b8f78739083"],["/page/3/index.html","385309ee7162f892fa61f7371c6f2633"],["/page/4/index.html","52cd53e52ce73740bb2f0f70f01a8d7b"],["/page/5/index.html","d1956c9ea9db2b2cac2e5f06ee75f5f8"],["/resources/index.html","988791df341ae132d6001b205fc05bc7"],["/sw-register.js","0e25e9065b83553786ae07cdc824143f"],["/tags/C/index.html","854f5c4ff5ee4c613fa5d9036ea9929a"],["/tags/HTML/index.html","a111ba31ad7d5bc8b446d451c216bd3a"],["/tags/Linux/index.html","d91daf8364a5a48a34f7b08dba18fe84"],["/tags/MySQL/index.html","59bc3a2be8cee8738fe3aa0f40ed48eb"],["/tags/Python/index.html","fc057a997ed7ade2f1659ab14dac3a31"],["/tags/index.html","f38d8c1830821ba66d1eb69dc6f3a8c3"],["/tags/励志/index.html","204c82b8df4877afd1e7ba8bb26fe564"],["/tags/博客问题/index.html","69a6bbd1b4ba78ff73f0563420616c9e"],["/tags/实况足球/index.html","be10c1764040acceff94bb49048af5fb"],["/tags/总结/index.html","04b568d914b42339ff3d73384db0f955"],["/tags/总结/page/2/index.html","475d649174c0d8db98abf258f423962d"],["/tags/数据结构/index.html","4653b7fff5d8e5cdce61db0a963e619d"],["/tags/炉石传说/index.html","bee0e6e9a63f97dcaa4c0b1033f374ce"],["/tags/竞赛/index.html","5231ebed8ea0dd9e065ec726ad999107"],["/tags/考试复习/index.html","00ffe9d40f1da253315c1820be91bc0f"],["/tags/规划/index.html","47fa01decea06953bdaf321b734536bf"],["/tags/随笔/index.html","f7ddb62549b130bba1ecc648557b859b"],["/tags/随笔/page/2/index.html","ec675af707f4d8ae9a49fd43b2a833bd"]];
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
