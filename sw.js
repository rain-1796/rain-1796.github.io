/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","bc2c11ccbfbf0d20ee1456adadf9ad2f"],["/2024/01/06/阶段性总结/大二上期末感想/index.html","77a2129c686bc764a2be55df326e0130"],["/2024/01/09/阶段性总结/大二上总结/index.html","2557cfb402c4740b19ab4250f3da6769"],["/2024/01/12/学习笔记/数据结构期末复习/index.html","1d544a7fb6f1ced609a6305a8f660d8e"],["/2024/01/12/感悟与展望/大学物理下不理想成绩的反思/index.html","9a088a70f08e2fd82388a3169c375beb"],["/2024/01/17/遇到的bug/博客上传的问题得以解决/index.html","66131eeb3673dbe68ad7da9fad6a04c3"],["/2024/01/18/遇到的bug/git-clone问题/index.html","e05bfe3f3a55b0f172941400aa1f7bd5"],["/2024/01/21/阶段性总结/1-20总结/index.html","2cb7da4b7f823706ebc6fc3eec37303b"],["/2024/01/23/学习笔记/C++map新知/index.html","283a5547e2df3d6b56150948dd7e8c9d"],["/2024/01/28/学习笔记/HTML笔记/index.html","06ee76db674791bd9f60dabfc4170aa4"],["/2024/02/01/感悟与展望/科三挂了的感想/index.html","1f221bb359ad3b94d12a795a2155374c"],["/2024/02/23/阶段性总结/大二下开学前的总结与展望/index.html","ec37f3c493e701fb38e32f96df9f8456"],["/2024/03/26/学习笔记/MySQL学习笔记/index.html","2b386f139335e492ebd506336aad1562"],["/2024/03/29/学习笔记/MySQL——34道查询练习题/index.html","b70820943e84567892fecda362674e12"],["/2024/04/02/阶段性总结/大二下开学一个月后的总结/index.html","a29630549784c144541e4b779de755c6"],["/2024/04/07/阶段性总结/前三学期的绩点感想/index.html","db59334eb9657d692da83cbe481fbbc7"],["/2024/04/27/遇到的bug/数据库实验——数据导入遇到的一系列问题/index.html","3223d15b8ddf1d2607269c311c861525"],["/2024/05/06/阶段性总结/大二下四月总结/index.html","90cb5a6b9e2281747cd71d3f37cbf913"],["/2024/05/28/学习笔记/C sharp/index.html","735e9afa4d448aa7c3f86250b7c65026"],["/2024/05/31/阶段性总结/大二下五月总结/index.html","c6a1395b9d7063cbe02c00e588293650"],["/2024/06/19/阶段性总结/大二下六月中总结/index.html","7c812dc7c7daf22d6c4ebada23431d49"],["/2024/07/11/感悟与展望/法国被淘汰后的足球感想/index.html","491340f7e6ec27f0ffdcffc96154bbf6"],["/2024/07/13/阶段性总结/大二下学期总结/index.html","f9661c86e01832d2b58deb859f37d8eb"],["/2024/07/14/感悟与展望/实况足球感想/index.html","43ef8b8ec65a6f7092e203ed18cd5f3c"],["/2024/07/21/学习笔记/Python学习笔记/index.html","f09e97ae6a9c6375d0aae4600cf25071"],["/2024/09/05/阶段性总结/大三上开学感想/index.html","8edcd342172b1f7a5eee7173e428f07a"],["/2024/09/14/阶段性总结/大二学年成绩感想/index.html","2f3e71f0015ad61476ce0ece2a4b52c5"],["/2024/09/15/Next8.2.0主题更新计划/index.html","8141e4cffe2027f4eb7b0696cf83364e"],["/2024/09/18/鸡汤文字/文字的救赎/index.html","b28a63497ec976721c3772258d539322"],["/2024/09/19/感悟与展望/心里话/index.html","c81b1724bc1208f33b244fad28c73bcf"],["/2024/10/02/遇到的bug/Mysql无法连接问题/index.html","3996af75217da650c45acdf4409ca67d"],["/2024/10/07/学习笔记/ROS常用指令/index.html","498508d4f15ec22c1304edffeb597783"],["/2024/10/07/阶段性总结/2024国庆假期总结/index.html","453d6e9b0e2cd8d350418398f99a8887"],["/2024/10/22/学习笔记/Linux基础命令/index.html","410416b55f86cb09c5bbfbd796ec1404"],["/2024/11/05/阶段性总结/十一月初总结/index.html","111c9d35e308338e3a36067e9163f532"],["/2024/11/18/阶段性总结/2024十一月月中总结/index.html","ef3f6b5b3151800c34c36d03d99d53d2"],["/2024/12/05/阶段性总结/2024十二月月初总结/index.html","2d6fc6f3a8347fff66eee889fc87bb25"],["/2024/12/14/阶段性总结/2024十二月中总结/index.html","7d948b81e8f526293473ba05890ee3c7"],["/2024/12/20/感悟与展望/直面内心的反思/index.html","d5c0c746b393da261bf9d73883f6300e"],["/2024/12/24/学习笔记/通信原理期末重点复习/index.html","fad4937ecd9ff4c8e3040120d1fd5be3"],["/2025/01/09/感悟与展望/对于实况足球的反思/index.html","b299ecc294fb1090f67466f0435bed17"],["/2025/01/09/阶段性总结/2025-1-9-大三上总结/index.html","f520a856f49684476389fc6f32dbe3cb"],["/2025/01/12/学习笔记/蓝桥杯C++刷题笔记/index.html","88f9c23cbff16a89d64a7532fcc6c70e"],["/2025/02/24/阶段性总结/大三下整体规划/index.html","79b4438df7d871b01b042232f8851084"],["/2025/03/21/实况足球二十张高光券白光有感/index.html","56aa9af87133ef847d56f1cd269d2374"],["/about/index.html","67e8e957b5f2a60c617eabafd56436cb"],["/archives/2024/01/index.html","65ed5135d68d159b36aaaa52bf3c0af9"],["/archives/2024/02/index.html","8ee2bc266e62d60b11b16c3fb7239ae5"],["/archives/2024/03/index.html","75e44cf68cc5dc569e614e52f64c0c38"],["/archives/2024/04/index.html","898cd1517d12aafcb8a2ee4e34463570"],["/archives/2024/05/index.html","182a4af2ca8655a2e168a7f349a90668"],["/archives/2024/06/index.html","4848c57592ac981c171e5793ce305d2b"],["/archives/2024/07/index.html","6b02ea806770acc15fa48b05f348710e"],["/archives/2024/09/index.html","3a216615f516b45bded67334a41b4613"],["/archives/2024/10/index.html","48961c309b408db5a45a6489f1aeff62"],["/archives/2024/11/index.html","969a48124072cc14c8c768a226bdd595"],["/archives/2024/12/index.html","409aa761dd076fc5c1252dd6a440c864"],["/archives/2024/index.html","5da5e605ba9bb1d451bfc376dc3ac171"],["/archives/2024/page/2/index.html","efb382266e4d944032f7801982044be8"],["/archives/2024/page/3/index.html","5afa37615aaa803db1e20b03eebc7c7c"],["/archives/2024/page/4/index.html","210e7a632125380ee8bf67bf692aa45e"],["/archives/2025/01/index.html","0f983704fd69b0be53c361fecc890ced"],["/archives/2025/02/index.html","f55d9f2ecbd3a89d32b1ea398628d5ff"],["/archives/2025/03/index.html","6e96fde9faf8ee7687b9fa842047326b"],["/archives/2025/index.html","c1e1d746c96350802be589b0b973670a"],["/archives/index.html","de9611ed647c9a467f2b66a3b1a1f5d2"],["/archives/page/2/index.html","8153eb1284313c97a74a065625937002"],["/archives/page/3/index.html","07faae962815fd24722440f066f2f81b"],["/archives/page/4/index.html","d9ea74221af7a6e7b91ab8f6045ce9cd"],["/archives/page/5/index.html","7f6fed1ec4e48a79c0bcf1b1e53120aa"],["/categories/Plan/index.html","2c1c3d2083e2008a668b0e04dfd146e1"],["/categories/Problem/index.html","2eaf350df30066d526f934b640c2279e"],["/categories/index.html","ce40d2ff8126755800ddb7601581d0be"],["/categories/人生感悟/index.html","b67097f4191323affe9c77da60637b41"],["/categories/人生感悟/page/2/index.html","9e1a9889fc73f2bb4be54399eae3c973"],["/categories/人生感悟/page/3/index.html","8f91d5ffdd9f6b9d955bb39b5d41839c"],["/categories/喜欢的文字/index.html","3a01914d88ae8350e5c852c5e7adc96b"],["/categories/游戏/index.html","8dd5b2b1fa7d0ea3ac0743eed246b7fc"],["/categories/编程学习/index.html","dc467c4284c290727c16dc397d2ca162"],["/categories/编程学习/page/2/index.html","38fa5e057a2861e7071376102c2618e4"],["/categories/通信原理/index.html","912b72f2f0f449ae35da405f5f6cfca4"],["/categories/面对失败/index.html","7e658b85e94c0fd7437d4b0e199a400c"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","5a4df9fee67ade1aa5e076ef0f74ab29"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","a1f4f98e7350b44d5bbf53f27341ab1f"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/exif.js","9c486db86e7ceeb1ec2c0f36518f5603"],["/lib/fireworks.js","e7e4d9972a4c7ada5122077088b970be"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","87d15ca8ff1121cb70e656e7b1e477b2"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/page/2/index.html","5d417210eda36d758ebb415dcffa401b"],["/page/3/index.html","ef6bce4c4d1e3b748f2a0f0adfa6c3b3"],["/page/4/index.html","d20c1e4d591314be76997a90fba1d70a"],["/page/5/index.html","7659990d3034cf40b55a8002633a7d51"],["/resources/index.html","6e995b3eb9e16497a52b944baadec523"],["/sw-register.js","f3f6ac9a3556161f264437f3ba944ffb"],["/tags/C/index.html","e8804933727f9a7fcfa782f0c3226c5a"],["/tags/HTML/index.html","50fcc028ba78d98a3d1f94f8b57ac237"],["/tags/Linux/index.html","7e90459f229eaaebc8a1e7eb1f9ce24e"],["/tags/MySQL/index.html","98134c59865640a51761cdfe256ac770"],["/tags/Python/index.html","a1ddc3fd20346c24f68f67245a7ea143"],["/tags/index.html","dcae64bc07abce650b1e5c21dab8081b"],["/tags/励志/index.html","8a628cb9ec5cde51cecf87166c8d6f68"],["/tags/博客问题/index.html","4b15e2322e1f7ec3ae3a31a42241c4d5"],["/tags/实况足球/index.html","110466f2b411c4cf0094e8ce53449c2c"],["/tags/总结/index.html","6692f4da128075229bad728105dca42d"],["/tags/总结/page/2/index.html","e298bf6b8ec4868b322a3ba7855ad3ee"],["/tags/数据结构/index.html","5c6f91bc6195e04e5c20f93849c98f5e"],["/tags/竞赛/index.html","054a68933067b8d517214e4265e4de0f"],["/tags/考试复习/index.html","0e276a59b66b130d52970107f225ba9f"],["/tags/规划/index.html","4349a1c2eb90a905e8c2399465bf348a"],["/tags/随笔/index.html","0be50a98bd9461395cb5924ccdd1584b"],["/tags/随笔/page/2/index.html","d6ff87623a47896540c9d7b732e97349"]];
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
