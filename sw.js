/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","ca767039c658ce08b7f72c1fd25a2e1b"],["/2024/01/06/阶段性总结/大二上期末感想/index.html","d1dafa732b2a92cd989a3a01e3ec6c37"],["/2024/01/09/阶段性总结/大二上总结/index.html","bd059787c6c3d5da335fa943661d09ac"],["/2024/01/12/学习笔记/数据结构期末复习/index.html","997fdf5109a90fc4ceac6b3c452965de"],["/2024/01/12/感悟与展望/大学物理下不理想成绩的反思/index.html","beffb2968dd7260b76d9094c0c8bade0"],["/2024/01/17/遇到的bug/博客上传的问题得以解决/index.html","1b6b99739784daedd0ffc79e91771fc8"],["/2024/01/18/遇到的bug/git-clone问题/index.html","bc64949d817c7cc7199c16cafb371702"],["/2024/01/21/阶段性总结/1-20总结/index.html","a1bc15fe0da2721436402ce61cc20b78"],["/2024/01/23/学习笔记/C++map新知/index.html","c4c5f5407f4648e432579053623f83a4"],["/2024/01/28/学习笔记/HTML笔记/index.html","008437eec9d9723f846703730e1fbc1f"],["/2024/02/01/感悟与展望/科三挂了的感想/index.html","9acf3978bbe09f8f53cf5e02f074e060"],["/2024/02/23/阶段性总结/大二下开学前的总结与展望/index.html","0c71f3cc715917092c22b464c882267f"],["/2024/03/26/学习笔记/MySQL学习笔记/index.html","6f48fc5d3e10f9379ce3db2ce796961b"],["/2024/03/29/学习笔记/MySQL——34道查询练习题/index.html","bedf0695037c700e4cdc155a3c009428"],["/2024/04/02/阶段性总结/大二下开学一个月后的总结/index.html","608e267838c2205a59164b0948f349be"],["/2024/04/07/阶段性总结/前三学期的绩点感想/index.html","3980a70f5e29cee0e999ca0f4b861965"],["/2024/04/27/遇到的bug/数据库实验——数据导入遇到的一系列问题/index.html","01354f15d5b3e72fb94b7cdded22eeb3"],["/2024/05/06/阶段性总结/大二下四月总结/index.html","7d8728c82b6b44af2a781c650a22acbf"],["/2024/05/28/学习笔记/C sharp/index.html","01f2abfd80a6bcb0991843861a3edef9"],["/2024/05/31/阶段性总结/大二下五月总结/index.html","f930ae62fecc1bc2691f2f011fde50ba"],["/2024/06/19/阶段性总结/大二下六月中总结/index.html","dc3d4d7a10d69260f73facb15bac9b62"],["/2024/07/11/感悟与展望/法国被淘汰后的足球感想/index.html","71d1124d3e0e710732946af37e1bb286"],["/2024/07/13/阶段性总结/大二下学期总结/index.html","cfc280a2a365f21190e7feaf8cd7f32c"],["/2024/07/14/感悟与展望/实况足球感想/index.html","3ae11bd75aa803d4ea85a8714a1004e1"],["/2024/07/21/学习笔记/Python学习笔记/index.html","3854f0798fafb1737a0485bf903f99fc"],["/2024/09/05/阶段性总结/大三上开学感想/index.html","fc7cda2ffc5f0d8698e0bff65538fc44"],["/2024/09/14/阶段性总结/大二学年成绩感想/index.html","0e3a5959357cc69fffc9297f49b04aca"],["/2024/09/15/Next8.2.0主题更新计划/index.html","cc391da2b848e0ee267d247d99ed71a1"],["/2024/09/18/鸡汤文字/文字的救赎/index.html","29b9b3503375bc31e91b47d30050bb56"],["/2024/09/19/感悟与展望/心里话/index.html","9a12aa5adb622b7bea4e20545dfa6542"],["/2024/10/02/遇到的bug/Mysql无法连接问题/index.html","bfb6729d525c8f801c0659e6c8b9cba7"],["/2024/10/07/学习笔记/ROS常用指令/index.html","63ef24f507044d14e2d6b045aa89fe05"],["/2024/10/07/阶段性总结/2024国庆假期总结/index.html","ddf121d5fa5025697c8902d8803f41ed"],["/2024/10/22/学习笔记/Linux基础命令/index.html","f85bb699c1b627c83c6af26ce07942dc"],["/2024/11/05/阶段性总结/十一月初总结/index.html","b928d8407459938650b462dc08e52315"],["/2024/11/18/阶段性总结/2024十一月月中总结/index.html","a1935161e96f83df0411de0b38aa8169"],["/2024/12/05/阶段性总结/2024十二月月初总结/index.html","af43231b6b5f8fc32cddbfa184bced9b"],["/2024/12/14/阶段性总结/2024十二月中总结/index.html","68683268adeb3dd2099ff27afd5a5d7d"],["/2024/12/20/感悟与展望/直面内心的反思/index.html","091c2a596fbe5daa6bcd39e244ddc4c0"],["/2024/12/24/学习笔记/通信原理期末重点复习/index.html","9faa2d74c34d2b306cb3ad5358fd3b98"],["/2025/01/09/感悟与展望/对于实况足球的反思/index.html","5cab0f59df565242f480a2b48a065fb4"],["/2025/01/09/阶段性总结/2025-1-9-大三上总结/index.html","1146eede58ec1af27aca54b35a288e9a"],["/2025/01/12/学习笔记/蓝桥杯C++刷题笔记/index.html","16fdba540528722393239ed5aa78a044"],["/2025/02/24/阶段性总结/大三下整体规划/index.html","2f0ca61d3365285fb243475114a334fa"],["/about/index.html","9ef6007ef89635a78ad641c203c697b4"],["/archives/2024/01/index.html","db5b37a58aa8484ba0da9d7bec8d7674"],["/archives/2024/02/index.html","16d1d128bb5ae02b8e61f91e28ac5925"],["/archives/2024/03/index.html","e3b4c9144825b694283fd1aa8fa6138a"],["/archives/2024/04/index.html","99cbde70d112cd74ad83404481dedd74"],["/archives/2024/05/index.html","e4590c85a4994d79e7b803dd4488e397"],["/archives/2024/06/index.html","b731edfe6b95a218c30c8bd590f24570"],["/archives/2024/07/index.html","2f52b43b4a51dbda5c344b39e052bf11"],["/archives/2024/09/index.html","11f9d79935204bb45cc8ef9bb6800a77"],["/archives/2024/10/index.html","c16a5d8b9a9bd09e0e63ddd6ac8f98d1"],["/archives/2024/11/index.html","a83c98e7a3f5e0b08b6fcf6ef4b83fe2"],["/archives/2024/12/index.html","65aae06d04efb981a81e873142a78c42"],["/archives/2024/index.html","317114bc84da3b7402af4ee75d54c096"],["/archives/2024/page/2/index.html","057e554debf528fc637975c81a210cdf"],["/archives/2024/page/3/index.html","945d5b0cdcb87f55b8ff2117a4364633"],["/archives/2024/page/4/index.html","83c51dc96266598198205650a2a4bc96"],["/archives/2025/01/index.html","bc936f535ce3739e1cce00dccc0a1f49"],["/archives/2025/02/index.html","2de10794aa3f1b784d8b29e2afe003d9"],["/archives/2025/index.html","72f93be6e33aafa39cf3efffcbd790e8"],["/archives/index.html","1372b4f74141aca2f393205dfd63d91f"],["/archives/page/2/index.html","0da9ade7075d26c38e919e5be4c550cb"],["/archives/page/3/index.html","6bc6c2207b56eabfcc67cb62fce7cfbc"],["/archives/page/4/index.html","02666dfa8ea6da728530f704b6d35faf"],["/archives/page/5/index.html","987505c5b79477e6984cf93662ad7f8c"],["/categories/Plan/index.html","78f65f447c3f34896201adad6694eb55"],["/categories/Problem/index.html","2ba64312c1dc7492b41bd514ee636b21"],["/categories/index.html","54255d9d4b4b7ec9d95864cc77b31fe6"],["/categories/人生感悟/index.html","b284dbe83f3534a7236880196a514863"],["/categories/人生感悟/page/2/index.html","7e525007da530dbe17c8bddc1ad468bb"],["/categories/人生感悟/page/3/index.html","2c652c425f3fb55481065547e23328eb"],["/categories/喜欢的文字/index.html","3699b818b1647a6c5de19e21d914793e"],["/categories/游戏/index.html","db041555b0d6525c6d7923a4692f77c5"],["/categories/编程学习/index.html","137132f5d6045cb29cde24d400a1ab72"],["/categories/编程学习/page/2/index.html","f5eaf610bdfa5990fa2f5426ebee40f0"],["/categories/通信原理/index.html","e8af1fb806c0234f962a7d526948108f"],["/categories/面对失败/index.html","fee0c6256fe2f2945c0fee7898b7e17f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","5e7d1a449e6c9bcd15d1adea41ec0d10"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","73c66873f7517da1b326dd4a7dd6f2cf"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/exif.js","9c486db86e7ceeb1ec2c0f36518f5603"],["/lib/fireworks.js","e7e4d9972a4c7ada5122077088b970be"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","259b9364b04a13ef4f021a03e7326010"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/page/2/index.html","d5b90a36c2840c7f03210b26134281b1"],["/page/3/index.html","dbe05f64cd7e0ace226802e425c26ae4"],["/page/4/index.html","9299610e97bd20c2caf9006c42b7dd92"],["/page/5/index.html","460ab9e82e971f7a914e1ceecbc15509"],["/resources/index.html","abb638852bc52a3ccccc7efc4e2a72cc"],["/sw-register.js","dccf94c285943b73e239f2ea8f31bad0"],["/tags/C/index.html","dd6da7081fe03adc88aaa352467b0fdb"],["/tags/HTML/index.html","82377f68f9895d5fbe0a191a59b856a5"],["/tags/Linux/index.html","cef6ab692384dc75df5ac5753c75ecc6"],["/tags/MySQL/index.html","983319fb35c4ef3a9fcd203b6edd7425"],["/tags/Python/index.html","7c2cd1a92213ddbb533ef0a4e62f6ceb"],["/tags/index.html","ea940a274af655ee36690cbadb5f95ca"],["/tags/励志/index.html","41a0c32ca94b3fb1f8ec91a9d91fe44b"],["/tags/博客问题/index.html","a3597bfefcc4869c79758de69d8ef615"],["/tags/实况足球/index.html","663a034e58d2b5fc80d210485c364ac5"],["/tags/总结/index.html","b9edfaf1b17bd77341fc84a4b5047dda"],["/tags/总结/page/2/index.html","5b3a688e7d2b79ed20b2007a66117089"],["/tags/数据结构/index.html","8a1d0f43b425d72c2b959a2dc0d12a24"],["/tags/竞赛/index.html","fa105d902368fef69e7df3c29b6ed8f8"],["/tags/考试复习/index.html","9ded5901b302dc0309c2cbe4550a8dc9"],["/tags/规划/index.html","012098c9fdedd24810b581a812987e22"],["/tags/随笔/index.html","b29969ff6f4f98d167da7865c1f11278"],["/tags/随笔/page/2/index.html","5974c34fc13bbc5ecf1871325aaa5608"]];
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
