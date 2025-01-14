/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","7ca26874067e2fd98ae74cd7652850e7"],["/2024/01/06/大二上期末感想/index.html","d76c337e81c111107ab40503b3b52505"],["/2024/01/09/大二上总结/index.html","9ea7d61a75620a3a06f5643a1970f6f7"],["/2024/01/12/大学物理下不理想成绩的反思/index.html","6a7a3d9aec1bd68fa6b272890437b0ab"],["/2024/01/12/数据结构期末复习/index.html","f54b918d65fd712fd10b96220208022c"],["/2024/01/16/红龙贼/index.html","e83b31ffa4727f6351d2cd7178156887"],["/2024/01/17/博客上传的问题得以解决/index.html","287a19bca094788c04e1a7942e5e1875"],["/2024/01/18/git-clone问题/index.html","f79f0fa37aacdeab5e4feae3c516161b"],["/2024/01/21/1-20总结/index.html","3405e99479baae276ee1641cfcc901f7"],["/2024/01/23/C++map新知/index.html","791083045572f7b03b3cc6ee13fca706"],["/2024/01/28/HTML笔记/index.html","9820638fe8a569eb29d1cadb6afa3062"],["/2024/02/01/科三挂了的感想/index.html","072ee118430a8bb9f0d4be352859bf0d"],["/2024/02/23/大二下开学前的总结与展望/index.html","1e8577ed1bf37a6c67bcbe1fbcd63a04"],["/2024/03/26/MySQL学习笔记/index.html","75867c3135f6c2f831e3cfa55a3e4107"],["/2024/03/29/MySQL——34道查询练习题/index.html","13b45634ebfaf4058160dd5216d061aa"],["/2024/04/02/大二下开学一个月后的总结/index.html","324774491b933646ba354a90ae3e2fc5"],["/2024/04/07/前三学期的绩点感想/index.html","0d7465fee048c2b5473877652f7fd042"],["/2024/04/27/数据库实验——数据导入遇到的一系列问题/index.html","df103b3011940f0f580f389a9f019a08"],["/2024/05/06/大二下四月总结/index.html","05b65a1048ce42a3621c8b5eb6777f84"],["/2024/05/28/C sharp/index.html","8e4fe89d0222b3d2e186ee7e18c3fbbb"],["/2024/05/30/数据库课设报告（图书管理系统）/index.html","365792ef966fbaf8c28edbf43b08d718"],["/2024/05/31/大二下五月总结/index.html","c825abd2f55ed36c75580399b3cf4e91"],["/2024/06/19/大二下六月中总结/index.html","f6aa8547ff813163adb405d9ea9a3416"],["/2024/07/11/法国被淘汰后的足球感想/index.html","6dcfa4f65c435ead91fb7e0f03e928f3"],["/2024/07/13/大二下学期总结/index.html","7b664ce5abd45becefeecb2e8d74dfdb"],["/2024/07/14/实况足球感想/index.html","268be883f7f0bfafdcae8249ebbe8aad"],["/2024/07/21/Python学习笔记/index.html","632f5dc973b2b8d366c0b9489f23cc40"],["/2024/09/05/大三上开学感想/index.html","b7e9060e0978f67f31ffd75957d75496"],["/2024/09/14/大二学年成绩感想/index.html","e4452450b6abeef341f7e058c0ce24dd"],["/2024/09/15/Next8.2.0主题更新计划/index.html","5b06bd843d83ca01658a93f9b72305a6"],["/2024/09/18/文字的救赎/index.html","e35cb3822f1da383041e768389df7362"],["/2024/09/19/心里话/index.html","2df8cf9151c310fdfc7a31d92d87c03a"],["/2024/10/02/Mysql无法连接问题/index.html","2e4904f941336331f72b4e966ef31bc9"],["/2024/10/07/2024国庆假期总结/index.html","a995058df486184b7c4aac45e0b4457d"],["/2024/10/07/ROS常用指令/index.html","35ec4fa462a2ce0c7c36fa810d2cf0d9"],["/2024/10/22/Linux基础命令/index.html","101cb579d1289e9da81598b92c52490c"],["/2024/11/05/十一月初总结/index.html","b74c1365dd7578f2a0c363e3b7e224f5"],["/2024/11/18/2024十一月月中总结/index.html","11c6da5e3a6f85979709556a8fe3a5b2"],["/2024/12/05/2024十二月月初总结/index.html","a7a044c7e306647a1026fba6813b6ab2"],["/2024/12/14/2024十二月中总结/index.html","56d9eb3cfef5f5ff8ee6045fbe1f3a2c"],["/2024/12/20/直面内心的反思/index.html","a6ead7041666c357bf0dcbdb7496a6d7"],["/2024/12/24/通信原理期末重点复习/index.html","c9b920843d4c1be0a9674ab35fdd06a8"],["/2025/01/09/2025-1-9-大三上总结/index.html","595e2bc7707f9a23246a45bbddeddb6d"],["/2025/01/12/蓝桥杯C++刷题笔记/index.html","f5ac097bf172bc061603167102ade009"],["/about/index.html","c3ffd11f54f8d1398c8452125c18bcc5"],["/archives/2024/01/index.html","6618b9325057662a4e998b068f91d57a"],["/archives/2024/01/page/2/index.html","a31bbd07e4af78b093df454da525c267"],["/archives/2024/02/index.html","1d7b4c9fe670ccd8e1654dab74349984"],["/archives/2024/03/index.html","35b795d74a0a3e7a28f84a9027a567f7"],["/archives/2024/04/index.html","60d1b5c08f5e02046d3c0ef050a973d9"],["/archives/2024/05/index.html","2836a6938fca5bc29f49002556257cc6"],["/archives/2024/06/index.html","89e9e788307992d61fbc8480fc116155"],["/archives/2024/07/index.html","a3e54f3b6caa717adb9a84b4db48cdfa"],["/archives/2024/09/index.html","2781b0b28a09282eab24c0d92f1bd664"],["/archives/2024/10/index.html","0409b21257759551a72a6cdf16a27dcf"],["/archives/2024/11/index.html","c0e98330d4a010f80857a2415525bec8"],["/archives/2024/12/index.html","594698994b0dbb709ba0f8a158911ba5"],["/archives/2024/index.html","9122d6925d5ce60cdddb88790d5bfff1"],["/archives/2024/page/2/index.html","186d3c7e959b03a0e9c8ea9041df257e"],["/archives/2024/page/3/index.html","23fe156a72312ad4280562e48fd89be2"],["/archives/2024/page/4/index.html","320d02ec67dc3aed515c74bdf3890929"],["/archives/2024/page/5/index.html","3f95cec547c197e67decf0835ae2c87b"],["/archives/2025/01/index.html","a0b43173ae144d56f6d4ab3d045216f6"],["/archives/2025/index.html","8909393d3efe8bbdaf9a2aae8e00bf65"],["/archives/index.html","67e917f67503d448a690a0c919e7d23b"],["/archives/page/2/index.html","2a133d821c4476ca3cd6d8b61ba7315d"],["/archives/page/3/index.html","e277c1bd4c0078e2f17d7ff47ef46bfd"],["/archives/page/4/index.html","adb588f132ae7bcefdfa5d6983c558d8"],["/archives/page/5/index.html","5c8886aec932b2e8b6bc25517d1624c6"],["/categories/Plan/index.html","5e7a3c35f5633ab529265daa8925ac78"],["/categories/Problem/index.html","1c0fd607509f5dcc5f9b93b0cf199c54"],["/categories/index.html","c9420d18cc8cb6bed686942e8fe40da8"],["/categories/人生感悟/index.html","614495889bef3804205291cc6e913a56"],["/categories/人生感悟/page/2/index.html","d632842a3718139d61a7242406ce384b"],["/categories/人生感悟/page/3/index.html","14e21380740c3ab45b370c1d74569bb5"],["/categories/喜欢的文字/index.html","1505e9ea59eed287c278c78fddf025fa"],["/categories/游戏/index.html","ee1e3a77cd66c7588b3828dc21704683"],["/categories/编程学习/index.html","cb24e806fcb623b29924222c6fae0635"],["/categories/编程学习/page/2/index.html","518d937a03541562c52a5a287e2792dd"],["/categories/通信原理/index.html","8964fddd85357c1f1f022259bacf47f6"],["/categories/面对失败/index.html","df5a234f2d653db00855cdc030764c72"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","63b3ddc93396d20455f3c8c22c9e464e"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","be2de5fdb113a7e45f7e1dca5380ec63"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/canvas-nest/README.html","fdb97abf1ae7e1cd024de17a51ed500d"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/exif.js","9c486db86e7ceeb1ec2c0f36518f5603"],["/lib/fireworks.js","e7e4d9972a4c7ada5122077088b970be"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","8e8755538895085ef30e369b9f70fe72"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/page/2/index.html","95146bbaeb00788bccd6a1d6e78aecad"],["/page/3/index.html","201168d43d87587be20415e9f3c3b2c5"],["/page/4/index.html","4a973cfa75d3b359efaca49f3eefd806"],["/page/5/index.html","1e6b297224e6fa512409985c315274bb"],["/resources/index.html","51dc347012c400ca328fa1e2decf6248"],["/sw-register.js","f4bae8302e5f507076b064e4566ec332"],["/tags/C/index.html","250243f85b9aee0785a0d59c920a9399"],["/tags/HTML/index.html","3d5fd7c78408168f023fe5de4c5ed5bc"],["/tags/Linux/index.html","618aa8e52570a36f74e982281b28f288"],["/tags/MySQL/index.html","0897297d3f037f660f8d3d4297182508"],["/tags/Python/index.html","1e2414b45d534481cb84b28efd7e0547"],["/tags/index.html","9aa826379a5747a02fc720ac1dd3d50b"],["/tags/励志/index.html","f690e5fa1b47de53fb30ac7a8fdce9b0"],["/tags/博客问题/index.html","b3bb3b2d8e547030659693a8fe49f5d2"],["/tags/实况足球/index.html","d104a65061306794691bc790d20509e1"],["/tags/总结/index.html","2e5e7434e5f345a754e1e2b93fed0c13"],["/tags/总结/page/2/index.html","3583207162c429f80a46babe064e5756"],["/tags/数据结构/index.html","4e30faf422d0b52d8eeb6079884f907a"],["/tags/炉石传说/index.html","a4e69d0011da1dddb9d95ea0b66fc5dd"],["/tags/竞赛/index.html","e16340af7fc76d12d2637f5ee2e19f3c"],["/tags/考试复习/index.html","c734cc69ec85d9028b3478ee191d6b78"],["/tags/随笔/index.html","ab5f935bccb05dee4df306cd84f97deb"],["/tags/随笔/page/2/index.html","7ddcdd422f649859a514d0f61405a93f"]];
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
