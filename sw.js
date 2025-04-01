/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","6fbb1c811050e9a2b701d0c7bba59c07"],["/2024/01/06/阶段性总结/大二上期末感想/index.html","ad25c84873ad0fbe2956bab369ebcb0b"],["/2024/01/09/阶段性总结/大二上总结/index.html","0202d0488b7a6601174034e00e07f51f"],["/2024/01/12/学习笔记/数据结构期末复习/index.html","9281f0323d03440ecdee853e31db23f4"],["/2024/01/12/感悟与展望/大学物理下不理想成绩的反思/index.html","2219d8df92ba862815b7a46a3b66220a"],["/2024/01/17/遇到的bug/博客上传的问题得以解决/index.html","572786ce3e74e7ce696a0480cc94f32a"],["/2024/01/18/遇到的bug/git-clone问题/index.html","5ac1e40d4d2691827cc3c31ae4bb0de3"],["/2024/01/21/阶段性总结/1-20总结/index.html","64fa3dbea31a42c38215b91365a01265"],["/2024/01/23/学习笔记/C++map新知/index.html","cea932678f0550c942f49d9d42d9654e"],["/2024/01/28/学习笔记/HTML笔记/index.html","806e9fcc9c6045197d8259d003e7f6f8"],["/2024/02/01/感悟与展望/科三挂了的感想/index.html","3654c535d99c3e45387eb62ea9ee057f"],["/2024/02/23/阶段性总结/大二下开学前的总结与展望/index.html","b6a9b0fa529462acd9c7c549a4b9863b"],["/2024/03/26/学习笔记/MySQL学习笔记/index.html","6da866dfda5725513397ab9d0626fc44"],["/2024/03/29/学习笔记/MySQL——34道查询练习题/index.html","21ab77d844e799e61cbe0c4c955c38d0"],["/2024/04/02/阶段性总结/大二下开学一个月后的总结/index.html","82d1f447b6471e212dd33f7a7c62ab5a"],["/2024/04/07/阶段性总结/前三学期的绩点感想/index.html","323ba713a33cb4b0132cb7a941219ddc"],["/2024/04/27/遇到的bug/数据库实验——数据导入遇到的一系列问题/index.html","e77e6d76bf49e7a4fb9dd68fb7a32308"],["/2024/05/06/阶段性总结/大二下四月总结/index.html","d6b70c9aea408197377dda555aac1779"],["/2024/05/28/学习笔记/C sharp/index.html","77c431d4cc6564166255c6c908b15303"],["/2024/05/31/阶段性总结/大二下五月总结/index.html","a002f23095016373328138a7d68b6dc5"],["/2024/06/19/阶段性总结/大二下六月中总结/index.html","7228d1ca04c9d68ef3182e247c8def38"],["/2024/07/11/感悟与展望/法国被淘汰后的足球感想/index.html","5edb3fa24c59c2cfa208ccb5191ae01b"],["/2024/07/13/阶段性总结/大二下学期总结/index.html","19fad2395d082c4433c563ab7f72a521"],["/2024/07/14/感悟与展望/实况足球感想/index.html","b030d6743d24a02d81c60cf108b53a37"],["/2024/07/21/学习笔记/Python学习笔记/index.html","ea7dd013c82bd63d5e7e932a99495ab9"],["/2024/09/05/阶段性总结/大三上开学感想/index.html","69a4c6b23c567c804771b33953fad695"],["/2024/09/14/阶段性总结/大二学年成绩感想/index.html","199746158b26d9d8659b9afb35e16946"],["/2024/09/15/Next8.2.0主题更新计划/index.html","880d593fddd5cf09e55c27f843c26c7f"],["/2024/09/18/鸡汤文字/文字的救赎/index.html","f756d84d8e11f00a937ed40d21918fc6"],["/2024/09/19/感悟与展望/心里话/index.html","960952b597e7bc0cedbf0232860c01c9"],["/2024/10/02/遇到的bug/Mysql无法连接问题/index.html","58c290744a89100300eb858223bf48d6"],["/2024/10/07/学习笔记/ROS常用指令/index.html","142f884242bc31cd7c9bfc5304951390"],["/2024/10/07/阶段性总结/2024国庆假期总结/index.html","3e3369da90ee4b988c9d4562fcaaeff6"],["/2024/10/22/学习笔记/Linux基础命令/index.html","6991c5d2ba01791ba02eac60b97eef98"],["/2024/11/05/阶段性总结/十一月初总结/index.html","06fe371ede675f6a1069e26161eecc55"],["/2024/11/18/阶段性总结/2024十一月月中总结/index.html","33352cc937bf013391fe26beff8db7c5"],["/2024/12/05/阶段性总结/2024十二月月初总结/index.html","8be521a34ef08c1156ef9b3d14d978a2"],["/2024/12/14/阶段性总结/2024十二月中总结/index.html","69105e9553e582d216acca7a300f0798"],["/2024/12/20/感悟与展望/直面内心的反思/index.html","1e46f11185cfadf1811b821bf1bca0c8"],["/2024/12/24/学习笔记/通信原理期末重点复习/index.html","5d06a288fdf7fbcc487fa59de33c68ac"],["/2025/01/09/感悟与展望/对于实况足球的反思/index.html","de97be7dbf12c628ca351300b3df77c7"],["/2025/01/09/阶段性总结/2025-1-9-大三上总结/index.html","e5eebc5dc43f8ecab8978c3ff785f1c6"],["/2025/01/12/学习笔记/蓝桥杯C++刷题笔记/index.html","fc5a6306f63643113ca6abf414102c99"],["/2025/02/24/阶段性总结/大三下整体规划/index.html","219772f0fbebd4a8ad2b3001f4a3c6be"],["/2025/03/21/实况足球二十张高光券白光有感/index.html","b8b4ab8655b961f916485052e902a77c"],["/about/index.html","a0820ef78d8d8b48962b751ec8ab8b62"],["/archives/2024/01/index.html","e9eb2b3133e676886554725db0e4df30"],["/archives/2024/02/index.html","40518e2c506b79a298d0427e95c9eb62"],["/archives/2024/03/index.html","6c67ac917708f7c861a98ebf1e5c4619"],["/archives/2024/04/index.html","06a76a4382631f9e7703f9b2e9ebdce5"],["/archives/2024/05/index.html","554f91cd0acb5c33ada769154b9217dc"],["/archives/2024/06/index.html","2d0f62b5f14f273aed37918dc9da8029"],["/archives/2024/07/index.html","849e00b61d8826fbb5a69c89acac696d"],["/archives/2024/09/index.html","6a131f787c0ac1353e769cd13705ed91"],["/archives/2024/10/index.html","f36c1d1e2da0f7f8d69f7cf7ac395d0b"],["/archives/2024/11/index.html","4ec81cd2b3846680df437c9a54a6c521"],["/archives/2024/12/index.html","0d25b5da0e0039a57294ec50514e85d0"],["/archives/2024/index.html","abf793291a5a22d11c8a414f79870417"],["/archives/2024/page/2/index.html","0dff7899fb3254b320624607d9a42c3a"],["/archives/2024/page/3/index.html","1877c4821f39f8c0ff174af69c8a09a7"],["/archives/2024/page/4/index.html","b5bc4869e5d335094aecb66878e093f6"],["/archives/2025/01/index.html","61e478f9696683bd4458263a212ae406"],["/archives/2025/02/index.html","82ac2a23abd81f413a4b36fea8a1b1ba"],["/archives/2025/03/index.html","fa458d17da5349bcaa4cdc0e5ef4c7c6"],["/archives/2025/index.html","3404080a9365715f49c32a1a1d569303"],["/archives/index.html","36d9d5c4dee705e404f081e61385b53a"],["/archives/page/2/index.html","cc612e46a7cda20985ec7be1d3bde9fc"],["/archives/page/3/index.html","b0877194c293471751509769fcf239b6"],["/archives/page/4/index.html","4b2165ba7e26b7e1bfde6f45fa3dd98d"],["/archives/page/5/index.html","7787b4a75bb05da418a9d66c4728c23c"],["/categories/Plan/index.html","ae5e1609b15d1091122fe4cd297de33c"],["/categories/Problem/index.html","9756b2f382878da74aa90862ab27c5e0"],["/categories/index.html","97ab9b7c550bd9c91b3d285d3fb36cd5"],["/categories/人生感悟/index.html","4b22a480fd823466a2be9dc6e61b7505"],["/categories/人生感悟/page/2/index.html","740d7d1b269271e92e42c9c721dde09b"],["/categories/人生感悟/page/3/index.html","2d3fd4e82f4179c6c2e3ec298c6080fb"],["/categories/喜欢的文字/index.html","c1a2ce7aa44ebcaee2cfb46cd4862d8a"],["/categories/游戏/index.html","658a26233600fe43575cad85be5561a5"],["/categories/编程学习/index.html","2e6807aa97a048c421779170d3301a9c"],["/categories/编程学习/page/2/index.html","e3bfe717d9bf4b528e4cb262e7d8d4da"],["/categories/通信原理/index.html","640581be5b9cc12af21b5db0f4ec5f0f"],["/categories/面对失败/index.html","b7525504bfe443137a56fc62a94cff28"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","e992b2e97e12e479b24ff94c2d028348"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","e54f4594460779dd8da96ff2193db017"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/exif.js","9c486db86e7ceeb1ec2c0f36518f5603"],["/lib/fireworks.js","e7e4d9972a4c7ada5122077088b970be"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","efc864e029c9c37d30ab62b028e3b53b"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/page/2/index.html","0112ce90a964d66e10ace4e4d49e6650"],["/page/3/index.html","7ffbc6265c11907fa25f80c8356cf0bd"],["/page/4/index.html","be6a7dc69b58d594d0872dd17c887f65"],["/page/5/index.html","62abcc86e3b1da64bf9b21e484e7540a"],["/resources/index.html","fea53548e9aabb629295863507b45f43"],["/sw-register.js","3a584c150cefd49c51d329e3cd005b29"],["/tags/C/index.html","dcd108a8580e9bbac6aa358fbc59fcd7"],["/tags/HTML/index.html","9b0f477d09a16d2c0eaf1005e34ae04d"],["/tags/Linux/index.html","c439eadc5d16ec9b448afb718080e356"],["/tags/MySQL/index.html","5d8bf8dc78f171df39b5d1153b60c338"],["/tags/Python/index.html","f4269c0e0f9d90c34556a4f226434c68"],["/tags/index.html","fe940a28cdfba814b9f04d7ffae769c9"],["/tags/励志/index.html","3f61ac8269315918e1aa980ea2bcf7b8"],["/tags/博客问题/index.html","90cb684f608869e354bb01d531008897"],["/tags/实况足球/index.html","90b355ba68d3915e4c07462a70d72add"],["/tags/总结/index.html","74d16ffb2947617141552c22fde3dfb6"],["/tags/总结/page/2/index.html","d1442b7103edb4a6a94f8904e99f5831"],["/tags/数据结构/index.html","5ef44dabd70b53eb189e060c512f4afd"],["/tags/竞赛/index.html","7f3515df84b904825cd3a4b6ef26efd8"],["/tags/考试复习/index.html","9cd75a6bd4151e63ebb16c82466a1abb"],["/tags/规划/index.html","2662a8718ad16bc26c4ab95346d822d7"],["/tags/随笔/index.html","0376bbdae8ded517ef714ea9e2dd3a02"],["/tags/随笔/page/2/index.html","d41788d1b1654a786ec19c09614b5df1"]];
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
