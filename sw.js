/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","29108d48c1f39899d38ebb9e452b61e7"],["/2024/01/06/阶段性总结/大二上期末感想/index.html","be1b2a10caa1d9fc4cc8038fb5b32dd5"],["/2024/01/09/阶段性总结/大二上总结/index.html","7d70e64f745c617628a4d1f5950150f8"],["/2024/01/12/学习笔记/数据结构期末复习/index.html","ee4b2258ffe047b5ff8d5d7687ccf62d"],["/2024/01/12/感悟与展望/大学物理下不理想成绩的反思/index.html","f802491c6dce5375af7402d5f003414c"],["/2024/01/17/遇到的bug/博客上传的问题得以解决/index.html","469ec60620fd20092df7eaa806d03616"],["/2024/01/18/遇到的bug/git-clone问题/index.html","a85892fc069673e2688466072cbe165a"],["/2024/01/21/阶段性总结/1-20总结/index.html","2607bbffb19ed707a602588bf9604883"],["/2024/01/23/学习笔记/C++map新知/index.html","45a6a8309ea42c0819a030a478b95968"],["/2024/01/28/学习笔记/HTML笔记/index.html","01fa46545e030d0f9429e4e40b5011a7"],["/2024/02/01/感悟与展望/科三挂了的感想/index.html","e1825b6da2ce7b2a05802dc2e1f911d4"],["/2024/02/23/阶段性总结/大二下开学前的总结与展望/index.html","5f08f9afae1a9bd4013cd94515aa0ac3"],["/2024/03/26/学习笔记/MySQL学习笔记/index.html","6701f54bfcab9b08fb08e21399782b1d"],["/2024/03/29/学习笔记/MySQL——34道查询练习题/index.html","98fcad7b72ca6b782e3f2c028a8e44fe"],["/2024/04/02/阶段性总结/大二下开学一个月后的总结/index.html","28eb74dd132f46a972904b85c16313fa"],["/2024/04/07/阶段性总结/前三学期的绩点感想/index.html","77929ff2a521fd48decf0b2774580205"],["/2024/04/27/遇到的bug/数据库实验——数据导入遇到的一系列问题/index.html","c7d6625676e2792d67c39be30a2ec706"],["/2024/05/06/阶段性总结/大二下四月总结/index.html","f97276c5efab8171ddc110cedc8a47a2"],["/2024/05/28/学习笔记/C sharp/index.html","90f2ff5da2309c3193800f453e2b5271"],["/2024/05/31/阶段性总结/大二下五月总结/index.html","ac5d2a9e38da4ec23b02e9397b00628e"],["/2024/06/19/阶段性总结/大二下六月中总结/index.html","0e75bb5902d92cab3cf4cf5aeecbeed7"],["/2024/07/11/感悟与展望/法国被淘汰后的足球感想/index.html","f7ff25b26c2f580ac2deced67f062428"],["/2024/07/13/阶段性总结/大二下学期总结/index.html","f7db5365eaa62eb2a84c82eb2a1cf780"],["/2024/07/14/感悟与展望/实况足球感想/index.html","ac79681b50a67fd2c37962b06bdc0ab4"],["/2024/07/21/学习笔记/Python学习笔记/index.html","f02940ce668bb55f3308b88ec628190b"],["/2024/09/05/阶段性总结/大三上开学感想/index.html","39cc17ef06b662c1a0773a2fd04f0828"],["/2024/09/14/阶段性总结/大二学年成绩感想/index.html","9a98326dee92997c29444a55211abcaa"],["/2024/09/15/Next8.2.0主题更新计划/index.html","d851b18c7910c471810669dec8ed140e"],["/2024/09/18/鸡汤文字/文字的救赎/index.html","5019ca0b8cf11b6fd63e4e13c67ccb95"],["/2024/09/19/感悟与展望/心里话/index.html","e47cce69f283b8e8fe4c0590776a3051"],["/2024/10/02/遇到的bug/Mysql无法连接问题/index.html","24fb5b40d549da33aa32c4c34ef0d7b8"],["/2024/10/07/学习笔记/ROS常用指令/index.html","957fc1931610ebc4239327e52ee9ee8b"],["/2024/10/07/阶段性总结/2024国庆假期总结/index.html","adf7392332b15ea15cf2b71d1eb69978"],["/2024/10/22/学习笔记/Linux基础命令/index.html","3018965f825258c77622091e0692b049"],["/2024/11/05/阶段性总结/十一月初总结/index.html","98817862db4751deb6574afc8f2be70d"],["/2024/11/18/阶段性总结/2024十一月月中总结/index.html","fcc4af72d40ed555a0e387ff518baa3f"],["/2024/12/05/阶段性总结/2024十二月月初总结/index.html","4cda5f96da70a28bbc7b4c98d9ce9892"],["/2024/12/14/阶段性总结/2024十二月中总结/index.html","905d00964470bca47d9e96f6509832ed"],["/2024/12/20/感悟与展望/直面内心的反思/index.html","b67f53eb59a01f10b7064c6f9ffd0fd8"],["/2024/12/24/学习笔记/通信原理期末重点复习/index.html","524f2d444777baa117f9e75dba5792d6"],["/2025/01/09/感悟与展望/对于实况足球的反思/index.html","518c980f062d9923f3c4f02ed1c56d45"],["/2025/01/09/阶段性总结/2025-1-9-大三上总结/index.html","138fe42ebe3f8342d2a00050bcb3f51f"],["/2025/01/12/学习笔记/蓝桥杯C++刷题笔记/index.html","019073094ec10f89092f2fcddb68cbd2"],["/2025/02/24/阶段性总结/大三下整体规划/index.html","97f26c737788f28aed1899635e474355"],["/2025/03/21/实况足球二十张高光券白光有感/index.html","ebd681c3c3b432bcc427f185157377aa"],["/about/index.html","1c519591d75865e9927ddd294b695d32"],["/archives/2024/01/index.html","91bec8438bf5d2bc0c3cfb0a881411cf"],["/archives/2024/02/index.html","eb53424f33b849186b4941408890d033"],["/archives/2024/03/index.html","188b7168d9c272ff326e08ab1d36ad86"],["/archives/2024/04/index.html","aaf42ed200b043e6bff78de94904d6ec"],["/archives/2024/05/index.html","09c921ca1d98def229656ea336dfb1c6"],["/archives/2024/06/index.html","0d518ada558021a6cd4b7fe9d5c4c911"],["/archives/2024/07/index.html","a473fcb229ab85998b924b79a050abdd"],["/archives/2024/09/index.html","a71ea76a412e0c0ec9208bf482ac4ce9"],["/archives/2024/10/index.html","e582b103662a6e19b5d020d33f72d1a6"],["/archives/2024/11/index.html","10454c4d710c20a2edcc7edab18a1270"],["/archives/2024/12/index.html","ec35ae528086f8e89e1c42ff57bdf787"],["/archives/2024/index.html","7b93660257d85eec860f6365b9ada951"],["/archives/2024/page/2/index.html","1c754382831b5589dfb251bd7e602169"],["/archives/2024/page/3/index.html","2405b8e7b533e15c7418b9f356d6476f"],["/archives/2024/page/4/index.html","3519ef59f2f4346ab753cd01acf49f2e"],["/archives/2025/01/index.html","8175b4e995fe46ed394fa7b4aefd2a4d"],["/archives/2025/02/index.html","a76e874bbd2cb3b4623082c60d29f05c"],["/archives/2025/03/index.html","1ea35ada1244c96b5b5d00e016a9572b"],["/archives/2025/index.html","7c9bde377519784135eafdd90fa040bc"],["/archives/index.html","916330faa2566f4c207780fc0154da2e"],["/archives/page/2/index.html","1562dd4155f9ab47707cd106c552e0f5"],["/archives/page/3/index.html","713a8b1d430dfba564b5ff56a3133d89"],["/archives/page/4/index.html","c3f22a7270e09ac8f77ee976c74aa657"],["/archives/page/5/index.html","2d94a93fe44a14a75c1ae744dd13f17f"],["/categories/Plan/index.html","ae9800f85601ffa11809114714e151b5"],["/categories/Problem/index.html","ed7f02bca495acc3c224ba1dc7f130db"],["/categories/index.html","0c64b7f4d2f39d15ff74b87eb3d82d2a"],["/categories/人生感悟/index.html","b3e800c92f8d804c69bad377161a37db"],["/categories/人生感悟/page/2/index.html","ab683e0d6f0dd1493c24bb62139f31f8"],["/categories/人生感悟/page/3/index.html","38c6fbaf34d276251ae431c6f678f2fd"],["/categories/喜欢的文字/index.html","b948cf6b24e17984fbfa42949ea2cc6e"],["/categories/游戏/index.html","5c37d9329ab62e18a3f5ff2d6703689f"],["/categories/编程学习/index.html","0bff767da51d0689497e24d6e7314260"],["/categories/编程学习/page/2/index.html","c5e91c38a8e6a2da310b1214ada643f6"],["/categories/通信原理/index.html","a20b239b22ae57e0905b30e187a5908c"],["/categories/面对失败/index.html","a570b9d7d24bf63316c488ebdcba0019"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","af5e8cd3b79a76ece0a9c1a20c3f36d2"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","8a2c4bede8cac9059c445fb0031c4cd3"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/exif.js","9c486db86e7ceeb1ec2c0f36518f5603"],["/lib/fireworks.js","e7e4d9972a4c7ada5122077088b970be"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","4df7557592e41991a227c9348adf9e59"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/page/2/index.html","4b467239ad094338d466647a5e1b27ca"],["/page/3/index.html","606eac9b013ddc2036e4d9c4a0e38a89"],["/page/4/index.html","93b953414d658447b65e14022c909909"],["/page/5/index.html","a327c255e4f3ff53f31e4569bf451feb"],["/resources/index.html","451dababb55e392f8fbeb557939c69ae"],["/sw-register.js","63d347361ab2406297554f2c9bd1bf11"],["/tags/C/index.html","c055e6b6f6d151c4d50512192d95307d"],["/tags/HTML/index.html","6164d5b324aa19f474c6ff6690d18113"],["/tags/Linux/index.html","e327b07ac8d26fa27393c27fe6c8e2fb"],["/tags/MySQL/index.html","3cfeadd2678525ec4b26d6ee253040d0"],["/tags/Python/index.html","355e9205a43c1c8326c3b5b2933871d7"],["/tags/index.html","0098f94005dc9c309db1e46ee65d70ce"],["/tags/励志/index.html","ebd843e68531b48f5e17ffc1edff913e"],["/tags/博客问题/index.html","92fc93f00e72f72231ca27edee2ea904"],["/tags/实况足球/index.html","ad1ff41970b5e02b14df328129fec22d"],["/tags/总结/index.html","59dd217ac8ecdcc03f65f87ea3320d13"],["/tags/总结/page/2/index.html","393d448c448a7401eef5d8431a2adada"],["/tags/数据结构/index.html","899008795243f859bb73755ac655859c"],["/tags/竞赛/index.html","8d2c1008e3ce6d77494f10a70e4a9d1b"],["/tags/考试复习/index.html","24541931860f6267b3bc666427b6ad9e"],["/tags/规划/index.html","1a9cb674cde52ad9e0bb56e30c4de2ad"],["/tags/随笔/index.html","0c43af03532a003c8e5e03e5aca04142"],["/tags/随笔/page/2/index.html","9a01ba389ad4609280c62645c7772cd4"]];
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
