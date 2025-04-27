/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","140fd935cfc5aeafbf60e5239e45ee78"],["/2024/01/06/阶段性总结/大二上期末感想/index.html","dc0a57843afa1ad226253cecab8bef35"],["/2024/01/09/阶段性总结/大二上总结/index.html","806290801d3cef48801a810417ba2537"],["/2024/01/12/学习笔记/数据结构期末复习/index.html","45dcc57bbb4fafcd77b2d404299ae3ce"],["/2024/01/12/感悟与展望/大学物理下不理想成绩的反思/index.html","8d4c843bae4ef846a95ebc10afb7035e"],["/2024/01/17/遇到的bug/博客上传的问题得以解决/index.html","03062250fd8d1aa438629e41dc1ba5e0"],["/2024/01/18/遇到的bug/git-clone问题/index.html","61567367ae8f965f16ffaf14de5804d8"],["/2024/01/21/阶段性总结/1-20总结/index.html","171c1e05b92cdf79b2ea978f2b779d3f"],["/2024/01/23/学习笔记/C++map新知/index.html","84d2b000e591622d7572ebde801fe7ec"],["/2024/01/28/学习笔记/HTML笔记/index.html","214066a3a2e2e62dc4e6a3bbef94d7a8"],["/2024/02/01/感悟与展望/科三挂了的感想/index.html","7b34f84d9c7eb2bf9f65e85cd23b2bff"],["/2024/02/23/阶段性总结/大二下开学前的总结与展望/index.html","4b4fe243a96fe1ebd7d642ea7f311e63"],["/2024/03/26/学习笔记/MySQL学习笔记/index.html","45a3af1332d81407525ce854a4b528a6"],["/2024/03/29/学习笔记/MySQL——34道查询练习题/index.html","9cf105d4d556f5303b6e3ad91b7ae055"],["/2024/04/02/阶段性总结/大二下开学一个月后的总结/index.html","a3f35a30595a824ab61653c239187703"],["/2024/04/07/阶段性总结/前三学期的绩点感想/index.html","04e0366f201ae74aecd3df8c100c0b13"],["/2024/04/27/遇到的bug/数据库实验——数据导入遇到的一系列问题/index.html","9ad1ff38721feb7da8843f82cfc775c3"],["/2024/05/06/阶段性总结/大二下四月总结/index.html","b26d69892ac22a27612e313fb67c167d"],["/2024/05/28/学习笔记/C sharp/index.html","92573a60ee268cbd28ce6de9c49fdabc"],["/2024/05/31/阶段性总结/大二下五月总结/index.html","166e46579e1869c5aea9f97e11a32e4e"],["/2024/06/19/阶段性总结/大二下六月中总结/index.html","4c7a8d8582051b0cf4a144e831320e3e"],["/2024/07/11/感悟与展望/法国被淘汰后的足球感想/index.html","4400cb1e7bf59275bf20aa1974b9eeab"],["/2024/07/13/阶段性总结/大二下学期总结/index.html","d89fc930c6f9409cb99efd643582c9c8"],["/2024/07/14/感悟与展望/实况足球感想/index.html","f9b814ab7520b3faf06fe10828ad8433"],["/2024/07/21/学习笔记/Python学习笔记/index.html","afd6433a8f4d65d618e3a97e6aba6e87"],["/2024/09/05/阶段性总结/大三上开学感想/index.html","2553df68e21bec70fa2e895aa281c1e8"],["/2024/09/14/阶段性总结/大二学年成绩感想/index.html","b14602f725beb3e0625ac3537bf77b14"],["/2024/09/15/Next8.2.0主题更新计划/index.html","903d5da0dda9107ac6b72569c89e7328"],["/2024/09/18/鸡汤文字/文字的救赎/index.html","f5b7870463f702cdd784491d6c4062f1"],["/2024/09/19/感悟与展望/心里话/index.html","70e5a12b2a126b5fe74f01985f9e65b8"],["/2024/10/02/遇到的bug/Mysql无法连接问题/index.html","903edaf148386c76d908011a29e1022b"],["/2024/10/07/学习笔记/ROS常用指令/index.html","68db4df20404f7270e5f0086257069e6"],["/2024/10/07/阶段性总结/2024国庆假期总结/index.html","1b26c4ad3b63cdafcdd40dcedd10dadb"],["/2024/10/22/学习笔记/Linux基础命令/index.html","6ebeb07f64072cf3334631a046689da7"],["/2024/11/05/阶段性总结/十一月初总结/index.html","e9a6da843aad922d34b9f88cc51d9797"],["/2024/11/18/阶段性总结/2024十一月月中总结/index.html","5e40f6bab5f6bc8ede27725ad7d21e0f"],["/2024/12/05/阶段性总结/2024十二月月初总结/index.html","9c5e82351e8566c920d2901279e799b4"],["/2024/12/14/阶段性总结/2024十二月中总结/index.html","fcd8ed53b7f841182a6f2c6eb6c6b3df"],["/2024/12/20/感悟与展望/直面内心的反思/index.html","f922b0711ccd3eb3fc0ad8a13396ec97"],["/2024/12/24/学习笔记/通信原理期末重点复习/index.html","62e0279682240ffd248addd0c1eaaf21"],["/2025/01/09/感悟与展望/对于实况足球的反思/index.html","989b0b7efe815585b2838defa78c5220"],["/2025/01/09/阶段性总结/2025-1-9-大三上总结/index.html","5e5439b3b802996dad9b7c11c3cfe19e"],["/2025/01/12/学习笔记/蓝桥杯C++刷题笔记/index.html","987a62dc46f6221776705362d1aa0363"],["/2025/02/24/阶段性总结/大三下整体规划/index.html","c62af694e6ec8a89c2fd7a2e30691e69"],["/2025/03/21/感悟与展望/实况足球二十张高光券白光有感/index.html","10debeace3eb14e16c7bd01ece1de709"],["/2025/04/08/感悟与展望/对于恐惧的思考/index.html","cc962105d982e0797c4f5b64fc1577e2"],["/2025/04/12/感悟与展望/蓝桥杯参赛有感/index.html","8b28ee512e64158d1d7d1463ab2d9c28"],["/2025/04/15/感悟与展望/身体健康最重要/index.html","d57dc69fb56b5e4b84b7f89e8b36a9e8"],["/about/index.html","c2bd3fc89b56a0ba3c5ecaee716a859a"],["/archives/2024/01/index.html","f73c48101f049a160e35f1bc80bc7aa4"],["/archives/2024/02/index.html","54d0d32a7135455cfcc6af614d79919b"],["/archives/2024/03/index.html","99f34e2b2a339457ae649572c435dd30"],["/archives/2024/04/index.html","4aea5daa85e0219473c03215f4456f38"],["/archives/2024/05/index.html","f47ea411a2ff3b60c6ec3e48b37d6312"],["/archives/2024/06/index.html","b4652b18aede7ef3439646524440b335"],["/archives/2024/07/index.html","eebbfa68e841431ca060abb1198dfc2a"],["/archives/2024/09/index.html","1e2abc142e05e3f7c13aca2f9149c33a"],["/archives/2024/10/index.html","f6c0951b53acac33c41f9042669b38e1"],["/archives/2024/11/index.html","f1d163de3eeb60148ff9c76f06477bd6"],["/archives/2024/12/index.html","0a04fa5bdb65f51d57d4a4b89c1cff94"],["/archives/2024/index.html","f460685fc8b1cdb3d292ce4bff0ba356"],["/archives/2024/page/2/index.html","f581dd5f5bc262bc6abef0e91a5a2fc1"],["/archives/2024/page/3/index.html","b6214d2d1a72ffa8e8cb08b760221c73"],["/archives/2024/page/4/index.html","27ce474fd5641670ec017a28ddfc3292"],["/archives/2025/01/index.html","63b9b65b106e1cdfc704ec63c0426dd3"],["/archives/2025/02/index.html","781a9e7c6f0f4b0bd6128a3a523441bc"],["/archives/2025/03/index.html","fde2a7a5a45f9dbf2d0818fbeb1370b2"],["/archives/2025/04/index.html","f2486a7b28a6536dab839f88978ea55b"],["/archives/2025/index.html","fd751afb71a03321318dfd5bc178c78b"],["/archives/index.html","4b5817b07d1e88f1296731f6683c4f73"],["/archives/page/2/index.html","bdd309838a21449fe18c4b2ef1f26ace"],["/archives/page/3/index.html","ef46837c5eb82cc9be7ff7c621708a7b"],["/archives/page/4/index.html","87894952a619c8c31a9e0270ff929534"],["/archives/page/5/index.html","1d59971df35f531a1de779d80ab5a12c"],["/categories/Plan/index.html","461b412e273d422d9bc82b47fe66e8b5"],["/categories/Problem/index.html","c51ed064a4454aaf92ecf3cb6700c833"],["/categories/index.html","1d2fbce6f5fd685de51563bdc101e8b7"],["/categories/人生感悟/index.html","0c17226c4966f2c22e6dad81b4fdee92"],["/categories/人生感悟/page/2/index.html","25392d32fe4aed5f5b07676f96206256"],["/categories/人生感悟/page/3/index.html","b0b0ec2fc731962c855166883bc15080"],["/categories/喜欢的文字/index.html","0d832b05942658834c86e9b911c17a79"],["/categories/游戏/index.html","1ab4314aadfd3840c5668f8503c2e02e"],["/categories/编程学习/index.html","eb6e8ce7e055faa6c00d238ec5577bc2"],["/categories/编程学习/page/2/index.html","659a11e92365807d241edd64ee0efeda"],["/categories/通信原理/index.html","7e6b8d04a0283a9a846196b040cac78f"],["/categories/面对失败/index.html","189fc92c07a81773b9f76740007abdc1"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","5f5e6a4bfb372fe14e47b52824f32391"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","6e95fb3f0a76315b2e4f1a0da983f2df"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/exif.js","9c486db86e7ceeb1ec2c0f36518f5603"],["/lib/fireworks.js","e7e4d9972a4c7ada5122077088b970be"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","babd1380826eae01a130cdea6b6bda70"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/page/2/index.html","81d5c6b91e3ae1c2a3d4338b104b6a52"],["/page/3/index.html","8bc0bbd7629b55dc76a7910a0f166eef"],["/page/4/index.html","128c17f05aa72f311f64995e0a205400"],["/page/5/index.html","89d1e73dee5e0cbf340c305961274fe4"],["/resources/index.html","2011b518bfbf5da2c9fa82aa70277f6f"],["/sw-register.js","39b7ba469d1441b53ed80601f0a0151b"],["/tags/C/index.html","fa144b23c237f2b03e18d2f5624910b8"],["/tags/HTML/index.html","156970cbfc62361b2428cec923ac8b65"],["/tags/Linux/index.html","4473905e6961ab46a36dd234dc7565bb"],["/tags/MySQL/index.html","8c2cf1db870870455f02b862be84bcfc"],["/tags/Python/index.html","f29aab3143d1072cce14da39eba19945"],["/tags/index.html","ce9fffb54bfd936478cec27be2a27279"],["/tags/励志/index.html","2d3928865b9e0668ac05fbe8c5d6f6f5"],["/tags/博客问题/index.html","7924b8f996e2430685bc1d3aeeca2911"],["/tags/实况足球/index.html","7e77c917a9d4f24717e874af397428b2"],["/tags/总结/index.html","8876e981bb601ba445148ddd65372630"],["/tags/总结/page/2/index.html","f496dcc7b34190e50d60447e1292c287"],["/tags/数据结构/index.html","c833513c3e5d9b1acfc30105d4a456de"],["/tags/竞赛/index.html","c4505391b4e4e28282c24f8a4f8dd886"],["/tags/考试复习/index.html","0711a89924aa2ee9bbb886f94d4fa0dc"],["/tags/规划/index.html","59553fd1fc2cc3c1733f782dd8cfc4f3"],["/tags/随笔/index.html","4bf3d73a9505978f9b7b2980703fb6d0"],["/tags/随笔/page/2/index.html","b7129e72219c440c776af1c942e1d7ae"]];
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
