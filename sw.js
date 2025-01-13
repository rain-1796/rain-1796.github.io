/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","3aa3bc6029894b72eca577531c57d47e"],["/2024/01/06/大二上期末感想/index.html","91632ebee3278512fa55b02974597056"],["/2024/01/09/大二上总结/index.html","505f7f54063c0fc9acfdf77f796d1c07"],["/2024/01/12/大学物理下不理想成绩的反思/index.html","182a3431fd136d69b7f18e22192f2526"],["/2024/01/12/数据结构期末复习/index.html","1075af67f4f27d35fd990b05f7946aa4"],["/2024/01/16/红龙贼/index.html","9e9159b2a5f8632d8569a35264ecdcfe"],["/2024/01/17/博客上传的问题得以解决/index.html","10c7f065569e666350122b584af7085c"],["/2024/01/18/git-clone问题/index.html","d629ab5427791ee94b398a80531883df"],["/2024/01/21/1-20总结/index.html","bfec289c72986f265168588157dd70e6"],["/2024/01/23/C++map新知/index.html","9f3f45728931e7d1b3492ce8fe460acf"],["/2024/01/28/HTML笔记/index.html","fe6b95e9fdd26db24ecffdf3b5c90619"],["/2024/02/01/科三挂了的感想/index.html","426ef1f3eb9ce5294364ea6bc6cafb8a"],["/2024/02/23/大二下开学前的总结与展望/index.html","5ac31f21ced6bc75ea1dafa6f44c158c"],["/2024/03/26/MySQL学习笔记/index.html","1940cc32a34807a8697526d6846353c1"],["/2024/03/29/MySQL——34道查询练习题/index.html","d59a265a1642b5f8ea85652a1002a144"],["/2024/04/02/大二下开学一个月后的总结/index.html","df9e118a8e82b1e04316dfd014370a0d"],["/2024/04/07/前三学期的绩点感想/index.html","171f6e77b870d85226c67c3ca466cf64"],["/2024/04/27/数据库实验——数据导入遇到的一系列问题/index.html","922c05f340fc5dc4afe1dc897c338d8f"],["/2024/05/06/大二下四月总结/index.html","4ccb7a42bde18e0080e53f858d83d9db"],["/2024/05/28/C sharp/index.html","5a1675964fc15a390615013aaa1b6885"],["/2024/05/30/数据库课设报告（图书管理系统）/index.html","f6d618a3b7d1de2a24b0755ff7a64ef9"],["/2024/05/31/大二下五月总结/index.html","a12ba026926cebf70a15127c714e608d"],["/2024/06/19/大二下六月中总结/index.html","668c02f3a776dedcb4ab9d7d132938fb"],["/2024/07/11/法国被淘汰后的足球感想/index.html","12e4eb6d51dfca836a016f5ac0d62037"],["/2024/07/13/大二下学期总结/index.html","d5b7244880e108ce184493c73d8521a9"],["/2024/07/14/实况足球感想/index.html","8784bdb53d6ba47a66541d27575bb3af"],["/2024/07/21/Python学习笔记/index.html","02764f65ce5c7401ed46f620dedca933"],["/2024/09/05/大三上开学感想/index.html","3b037e7f6eab908a2e98d129d8b3cc33"],["/2024/09/14/大二学年成绩感想/index.html","fc44dc86d040d81f79cc7b8e23cd1275"],["/2024/09/15/Next8.2.0主题更新计划/index.html","80644d3cc0899339953c94e32a050348"],["/2024/09/18/文字的救赎/index.html","245fb3557590edf5b1c07b1d6647b026"],["/2024/09/19/心里话/index.html","ee856fd1cf40ce87d904f099b8e1e50b"],["/2024/10/02/Mysql无法连接问题/index.html","38207b52bba8cad6943283e871f9aeed"],["/2024/10/07/2024国庆假期总结/index.html","301b736de5c5f8f47c424c773f12ff60"],["/2024/10/07/ROS常用指令/index.html","025bbe2f77d61929ace82a3cb609c778"],["/2024/10/22/Linux基础命令/index.html","326ca882b1b65e4b2f4a8deadbb24859"],["/2024/11/05/十一月初总结/index.html","d0d2ed8694742e41b462a67ad4ef63f3"],["/2024/11/18/2024十一月月中总结/index.html","bb7e588ebdd4b28775567cf19d852c8d"],["/2024/12/05/2024十二月月初总结/index.html","6ea2dc3d2e22e4e2f42c972b845b1397"],["/2024/12/14/2024十二月中总结/index.html","98c9ff8a8de0c72cddd804280e480c45"],["/2024/12/20/直面内心的反思/index.html","6196e4835ba6b135c11407cad97db49e"],["/2024/12/24/通信原理期末重点复习/index.html","5acd185ed8d65fe5a15bf03c03bb1769"],["/2025/01/09/2025-1-9-大三上总结/index.html","e07a58b1759a292c8f292764de948a29"],["/2025/01/12/蓝桥杯C++刷题笔记/index.html","c33b6659273c08e4eefad631e65c8fd7"],["/about/index.html","88feff443b57baaefb6f988c88a3dcd9"],["/archives/2024/01/index.html","5d8dd354fc97e1da2b126bf3433a8cac"],["/archives/2024/01/page/2/index.html","8cad3ab01098891d16f11dba3dce5812"],["/archives/2024/02/index.html","acf9f69df863012d068b66de5010a69f"],["/archives/2024/03/index.html","65a5788a5c0e8eebc3ff775e74f5cbce"],["/archives/2024/04/index.html","7a6b80c73c5d10f297a45addaa200d6e"],["/archives/2024/05/index.html","f7703666c956aa57fa2590fc2af12aac"],["/archives/2024/06/index.html","84bc73d3d7101951132539de845566e8"],["/archives/2024/07/index.html","043866d12cb93cc890c1845bca5cc566"],["/archives/2024/09/index.html","b4cddb4e8a62f9fbbec76cd4693ba6dc"],["/archives/2024/10/index.html","384c6c768a5158fef6de3b4ca623e019"],["/archives/2024/11/index.html","bbb172658d8eaf959a92c1206432a4b3"],["/archives/2024/12/index.html","3a569d7ab6b252b109caadd8872dbb01"],["/archives/2024/index.html","8f84628b274237c214d7314b1a8cff24"],["/archives/2024/page/2/index.html","c3e5b6b31d0d5db82d77c25e0cec7885"],["/archives/2024/page/3/index.html","7f27520df284f3a3d12db2e5a6db7e10"],["/archives/2024/page/4/index.html","1567ca88c005fda851a60a580f6dd06c"],["/archives/2024/page/5/index.html","a74b527627c5c3f165a45c5ab23c76fa"],["/archives/2025/01/index.html","6ece3efa757029bce6f752ac86e74629"],["/archives/2025/index.html","fc7141311218c6421889021423ee798a"],["/archives/index.html","cf705e3c08766af95078c5e0e0531a81"],["/archives/page/2/index.html","ea1d92f1acdf6ebd2504c79b46908162"],["/archives/page/3/index.html","537ea82afa408cdaf571aacaae6c7080"],["/archives/page/4/index.html","5784daea3729e932d3382fc27ec39d3a"],["/archives/page/5/index.html","0b169add83540a0dc9908866aee69ff1"],["/categories/Plan/index.html","2baece8063d8294779bf05243d7e1042"],["/categories/Problem/index.html","899332eef3e364035678f3859dc5fb5c"],["/categories/index.html","d4dec846811c1eb307000fb1a58695b5"],["/categories/人生感悟/index.html","91bbd7c5625987096f9e03470f9bbfeb"],["/categories/人生感悟/page/2/index.html","f090b1fd4293bb0f278f94f77478eda7"],["/categories/人生感悟/page/3/index.html","79f59beb3256636ec4af79299aa42936"],["/categories/喜欢的文字/index.html","ef76be1352017177a58e8651937281de"],["/categories/游戏/index.html","c3d71d5a1992c8d63a7494fe6a5e606e"],["/categories/编程学习/index.html","2f6c2c787a92f80522637141e45e0df5"],["/categories/编程学习/page/2/index.html","252f0ac99faea428db14fc5b3d340f75"],["/categories/通信原理/index.html","f37b43c17d1036e3b4228a0c8c48a1df"],["/categories/面对失败/index.html","9d3fcec9d4fe38245c2dbb886ce83f08"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","c5b9173f511ca4f8adf16bfa54ff4b6d"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","2b2320b66775a38d3e1fd5b5399582f0"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/canvas-nest/README.html","fdb97abf1ae7e1cd024de17a51ed500d"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/exif.js","9c486db86e7ceeb1ec2c0f36518f5603"],["/lib/fireworks.js","e7e4d9972a4c7ada5122077088b970be"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","a3fa7016f827b825432b68d6d385ea94"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/page/2/index.html","dbc63a99341aa5a1bcec568f297a372c"],["/page/3/index.html","595ddf265029f5962a6695f57e5406b8"],["/page/4/index.html","7f8814ce144bf1d27d3a0ffcef6dac24"],["/page/5/index.html","f0e3ad8b7309d553a6d9eb3b940bf5e6"],["/resources/index.html","ac59f478e136dadaf7269a9463a24dc0"],["/sw-register.js","06474fd672379068a106b1f4a72d9ace"],["/tags/C/index.html","d9afafbfc94f1ab453fda215ce4c05e0"],["/tags/HTML/index.html","2adeb7ab1f967f162626d9087d50f8e3"],["/tags/Linux/index.html","3e84457dfe0a463d3136881622048f27"],["/tags/MySQL/index.html","c3276f677a902ea358b24e702078f8b3"],["/tags/Python/index.html","da70dea9e19ad97b6dcdc819f8e32d05"],["/tags/index.html","2408a7e1337995b6899a1241731d025c"],["/tags/励志/index.html","e6c18e9c9a6f4cdd7c6fe8e1de1d6720"],["/tags/博客问题/index.html","44d539dcc6d6bc2ff88578b562801fda"],["/tags/实况足球/index.html","1672232180fb11a33c4ad8d215025257"],["/tags/总结/index.html","68708ad0bda7745849cadce4e77a8a6d"],["/tags/总结/page/2/index.html","6f5c60216bdd8047a14031423f5d20ce"],["/tags/数据结构/index.html","82a41ca3054faf07298fa7741ecd0f16"],["/tags/炉石传说/index.html","2c8dbd8b7d7609f414462fff1c13909b"],["/tags/竞赛/index.html","4bd959e2c24ea78af8e21cff68eed51b"],["/tags/考试复习/index.html","7d5c31b114e492844907eab41d429bc9"],["/tags/随笔/index.html","658d5a631221487703233adb62ee381c"],["/tags/随笔/page/2/index.html","9f3844c7b8d0882bf61c1279b12d245c"]];
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
