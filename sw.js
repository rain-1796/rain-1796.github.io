/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","3dc1d2f7bd6ebb4b677732f6dfd3fb60"],["/2024/01/06/大二上期末感想/index.html","12054aa6b883b005b7b86ba609f53424"],["/2024/01/09/大二上总结/index.html","20ec57062c2d583b379cfcccc5939a18"],["/2024/01/12/大学物理下不理想成绩的反思/index.html","f98dbb0cce3b483488db6fb60f9ab65f"],["/2024/01/12/数据结构期末复习/index.html","f24ec23c4fa2e16cca88142c3e421826"],["/2024/01/16/红龙贼/index.html","85aacbef7816b14781d569ce01fc8259"],["/2024/01/17/博客上传的问题得以解决/index.html","f95843a0e418fe7c5067c243b56639fe"],["/2024/01/18/git-clone问题/index.html","2af9bb85bf5ad594bd5598063294fa74"],["/2024/01/21/1-20总结/index.html","15a994333a8ecf6ce38685ba4ad96782"],["/2024/01/23/C++map新知/index.html","64a98c21647231c140e439225ee7ac6c"],["/2024/01/28/HTML笔记/index.html","ac73afcb40133693a3c05793a0b1120d"],["/2024/02/01/科三挂了的感想/index.html","30f6a860e233b53d683d38795e59fbed"],["/2024/02/23/大二下开学前的总结与展望/index.html","96d7c72370f1a9f9cd8deaca8db0a3fd"],["/2024/03/26/MySQL学习笔记/index.html","3f6eaac74ddf02c56e7ee64c6cc18a86"],["/2024/03/29/MySQL——34道查询练习题/index.html","e57fd1c79ae298b52ba46537c765f6ba"],["/2024/04/02/大二下开学一个月后的总结/index.html","5bb2c57db5225f9e0054519bb5387140"],["/2024/04/07/前三学期的绩点感想/index.html","58d68ab920c116260d7265aaa15c7b70"],["/2024/04/27/数据库实验——数据导入遇到的一系列问题/index.html","2d1d48ccddb57c25a6b9e95c3473974c"],["/2024/05/06/大二下四月总结/index.html","f8ff1a778ead069a791bb268d17a313c"],["/2024/05/28/C sharp/index.html","d95097d67e5cf154fad0d7c1d65c85a8"],["/2024/05/30/数据库课设报告（图书管理系统）/index.html","1c6072bc566badeae4975b86f647651a"],["/2024/05/31/大二下五月总结/index.html","54fd3b1296ea44216f646d68e01abb13"],["/2024/06/19/大二下六月中总结/index.html","bcf9b5d8d2b4956432bc4214078089a2"],["/2024/07/11/法国被淘汰后的足球感想/index.html","0f332e2f2b69e3849698a2737d9c9cb4"],["/2024/07/13/大二下学期总结/index.html","6b10b1ee0f29b186765fe19ba5bb0f70"],["/2024/07/14/实况足球感想/index.html","6d56ea053acd7504a8464ef7faae7cb2"],["/2024/07/21/Python学习笔记/index.html","d654168084dccb54bda33f3aafdf6fab"],["/2024/09/05/大三上开学感想/index.html","16354c02aa557dceab3b533f35e91110"],["/2024/09/14/大二学年成绩感想/index.html","9a85bcaab60a0df099596cfd7b786d55"],["/2024/09/15/Next8.2.0主题更新计划/index.html","d47ced207f5d4e79758be437abdfe9d8"],["/2024/09/18/文字的救赎/index.html","2e096bd338bed28da93b24d54a3f4c2f"],["/2024/09/19/心里话/index.html","b2b01c587d2e242798ed9fccd34e5a82"],["/2024/10/02/Mysql无法连接问题/index.html","7364a6d03e0818e10871b2b1b92f94d2"],["/2024/10/07/2024国庆假期总结/index.html","f51b522d09f649ccddd99ce6ac73a4fa"],["/2024/10/07/ROS常用指令/index.html","358607c38845dd572e0fa5a14fbfdc68"],["/2024/10/22/Linux基础命令/index.html","85c99a28761d4fdcdc28f86ced02789b"],["/2024/11/05/十一月初总结/index.html","e970a547c2d7508602d3c5ae7c7823e0"],["/2024/11/18/2024十一月月中总结/index.html","46e3961382dd70f014ed46d5de99a07e"],["/2024/12/05/2024十二月月初总结/index.html","8001a85ce3bba13981c9d062238ea9b9"],["/2024/12/14/2024十二月中总结/index.html","52e8f2fdd004ee5582191dab7e43e807"],["/2024/12/20/直面内心的反思/index.html","39282767a48d0bece5fe3d22438cb802"],["/2024/12/24/通信原理期末重点复习/index.html","9844ddc7292b19588cfdfca7b51eb7bc"],["/2025/01/09/2025-1-9-大三上总结/index.html","1754ca34fef423bdadc6de6c7dfbaddf"],["/2025/01/12/蓝桥杯C++刷题笔记/index.html","2e65759f6251bd866448430217f72831"],["/about/index.html","6591fa02e4eb03787752483d1bbea4e7"],["/archives/2024/01/index.html","48bcec266ee8238f9f6691677bd1397b"],["/archives/2024/01/page/2/index.html","d5c772bb708f3e13e1187b93fd8b4823"],["/archives/2024/02/index.html","f8ae64d74e9895fab261ee1ef3f82ab3"],["/archives/2024/03/index.html","f03db4b4c67ad7c6ca5cec7729b7e24a"],["/archives/2024/04/index.html","c6d6d547d910063fe2814ce784257079"],["/archives/2024/05/index.html","87e48a4764221a434f0f54021ef6c677"],["/archives/2024/06/index.html","9099b6b34e471f303e1921affd735eee"],["/archives/2024/07/index.html","62e343b2a8adce3fa809a9d2fe473618"],["/archives/2024/09/index.html","e9818276d6d3f076b9a1a597f3d9c8bf"],["/archives/2024/10/index.html","fd454273eb1422cbc9874a8228464d01"],["/archives/2024/11/index.html","13ec55cf66d2cda451f84ee023ecf738"],["/archives/2024/12/index.html","235b87785051a29bc661354337e14140"],["/archives/2024/index.html","4166fac20df84a8376d7d611ead7e97b"],["/archives/2024/page/2/index.html","6d8414f2f165ca60ef769f6945d6c3c9"],["/archives/2024/page/3/index.html","777d6ef5472287bf220074e6b86345a3"],["/archives/2024/page/4/index.html","1c04d9d9443ab45ebb5ed00fcaedf895"],["/archives/2024/page/5/index.html","9ec208e1aa91441f130728cd9a12bc5a"],["/archives/2025/01/index.html","33359a45f91d2dc57da876b927bd226b"],["/archives/2025/index.html","de0ab431165bcbd297595f51f55b15bb"],["/archives/index.html","a8e6f865290f2b6e3479f2facc4a8e9a"],["/archives/page/2/index.html","b545eebffb5ba4fcc4c0dcbfabd8b2ec"],["/archives/page/3/index.html","67a0608b9da96c02c95c53d6563d28ad"],["/archives/page/4/index.html","bbe8fcf6618cfbb7998ebb582b74bae8"],["/archives/page/5/index.html","94681bbb1241492cab7f0caff9c0cd9c"],["/categories/Plan/index.html","0f7fe9fed97e5f7f8318a20fe2655ee0"],["/categories/Problem/index.html","a5f37a32c6c2a88f3eed0dac93abc570"],["/categories/index.html","71cfc94a50e2721df8650383b2b8137c"],["/categories/人生感悟/index.html","227c6a79da8149d4151fe818c9bd23f6"],["/categories/人生感悟/page/2/index.html","366259e1d27febcb4bcea16ef9ec58c0"],["/categories/人生感悟/page/3/index.html","75938a74bd700106fee787e49da1c4b2"],["/categories/喜欢的文字/index.html","830f979d9b236ddb2f81a8aedef2ffe0"],["/categories/游戏/index.html","08560e39c7513f0bf0ef8a5c48f60397"],["/categories/编程学习/index.html","12ab3aa0e81213b04c72fd0d5722c950"],["/categories/编程学习/page/2/index.html","c6334aff6d7fd54a9c9a9e85c53d90f7"],["/categories/通信原理/index.html","c28bc340fe6e265fd9386ee3dd5cc34f"],["/categories/面对失败/index.html","db9e9a397c6a889c21e2280a36bfc544"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","ef4a6a05c1adde19fe3a8eaab4a2c6b0"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","469cce1f00a8cfacac275fa2e8e38764"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/canvas-nest/README.html","fdb97abf1ae7e1cd024de17a51ed500d"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/exif.js","9c486db86e7ceeb1ec2c0f36518f5603"],["/lib/fireworks.js","e7e4d9972a4c7ada5122077088b970be"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","40fc8da474b7d5b1cf8b21466e8ab7a1"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/page/2/index.html","8e7d6942b71c5c075b067e4c40e4c3d1"],["/page/3/index.html","15c64f0df231d4ae9562aa0767ab8a23"],["/page/4/index.html","c26d77765fbd47a3944f614d97d6fb6f"],["/page/5/index.html","ce992b7f266f4c99650dba6d2f90a588"],["/resources/index.html","850aaaf519573f963f9f6fe40b34c50a"],["/sw-register.js","10b3332b66a7c9a84304e790d1950834"],["/tags/C/index.html","be06aba55a4ec2789be745062e609cb3"],["/tags/HTML/index.html","a950af36105e92dbc678104cc4c7dd4c"],["/tags/Linux/index.html","bebe92d58b891048cd4549d5b5d88032"],["/tags/MySQL/index.html","22c06635047f4f3be2b3a5eb43d1d9ec"],["/tags/Python/index.html","04016f6cc48779a2f904e999415050d1"],["/tags/index.html","a2c56779ed7cbef5302c7c7c3fe412e4"],["/tags/励志/index.html","718e6c05dbd3900b5423238a66830537"],["/tags/博客问题/index.html","55a4d06a62394d741e4ed2f610e7a9d4"],["/tags/实况足球/index.html","9961a4782abfa1adca2c104953ae5742"],["/tags/总结/index.html","342d9408922adf963d463a7b350b6053"],["/tags/总结/page/2/index.html","98700a2ab22cfe6812639e8b4d3bc7d1"],["/tags/数据结构/index.html","fcf7cabee5a40a19d460313665663ef1"],["/tags/炉石传说/index.html","4e3c555e65d4f259a91981d3dc19c8be"],["/tags/竞赛/index.html","32319bdeec017f43e2e85ca8e4a7f1bc"],["/tags/考试复习/index.html","264b25a60945990055b8cce002a9fee9"],["/tags/随笔/index.html","01dcbcd73bf15d3ba72a2897ece52688"],["/tags/随笔/page/2/index.html","090bc5dee73a2aee95bd4a5ef8bd3e72"]];
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
