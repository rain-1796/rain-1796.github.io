/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","57cbcbddb872ece765abae4ce97cb08a"],["/2024/01/06/阶段性总结/大二上期末感想/index.html","b32bb217b69cc6534367d1fcb6a84437"],["/2024/01/09/阶段性总结/大二上总结/index.html","4b3772e2121ee45aa3abbb0e03929631"],["/2024/01/12/学习笔记/数据结构期末复习/index.html","4094c078c8022e9b9d0827aeaf27077d"],["/2024/01/12/感悟与展望/大学物理下不理想成绩的反思/index.html","a1cf4143c08511bbe4005b1eab69afff"],["/2024/01/17/遇到的bug/博客上传的问题得以解决/index.html","9e82bc274bbca2dcb3ddc278bb948533"],["/2024/01/18/遇到的bug/git-clone问题/index.html","abe78ae93d461ddd22e8aeed814631e3"],["/2024/01/21/阶段性总结/1-20总结/index.html","7013646ef6f3a9c653fd26ca30893759"],["/2024/01/23/学习笔记/C++map新知/index.html","04954236bfea23a7cfa5d7e898c8ca8f"],["/2024/01/28/学习笔记/HTML笔记/index.html","6e5461be12c4a86a93a6471d184c9f32"],["/2024/02/01/感悟与展望/科三挂了的感想/index.html","fd34b68e8d713486ffbe9cdc4f04eb36"],["/2024/02/23/阶段性总结/大二下开学前的总结与展望/index.html","b6d7848a76258896069776ec3674bd70"],["/2024/03/26/学习笔记/MySQL学习笔记/index.html","c47e4a9840363eaabee6ef349cfac3cc"],["/2024/03/29/学习笔记/MySQL——34道查询练习题/index.html","25d1fec7c674423b2a7f7e2d7b57b532"],["/2024/04/02/阶段性总结/大二下开学一个月后的总结/index.html","e1c6e8c7a49830b23703d9616f8d7795"],["/2024/04/07/阶段性总结/前三学期的绩点感想/index.html","27574dba33bf0a6c2dc51bec71bd4801"],["/2024/04/27/遇到的bug/数据库实验——数据导入遇到的一系列问题/index.html","55a6a48b8b73638cec9b3bb5609e62a0"],["/2024/05/06/阶段性总结/大二下四月总结/index.html","5f28ef77e7433cdd7ebbe1c3e75956d0"],["/2024/05/28/学习笔记/C sharp/index.html","2af0c82fcd459eced55209652baae346"],["/2024/05/31/阶段性总结/大二下五月总结/index.html","294499556606284e9cbde59c2e0fc637"],["/2024/06/19/阶段性总结/大二下六月中总结/index.html","7c19114d6f3c23437e56e1b63520f9e4"],["/2024/07/11/感悟与展望/法国被淘汰后的足球感想/index.html","858851895879ae01b871f07629b23f9c"],["/2024/07/13/阶段性总结/大二下学期总结/index.html","fee8a7e2afd1b6ef14c526490282787f"],["/2024/07/14/感悟与展望/实况足球感想/index.html","6b491310ccb1341c5435bfa639c12e47"],["/2024/07/21/学习笔记/Python学习笔记/index.html","b916e3fed4126f451122dfdca7b8c869"],["/2024/09/05/阶段性总结/大三上开学感想/index.html","c71c73423ed2f5b9dc9e55c5d41aa307"],["/2024/09/14/阶段性总结/大二学年成绩感想/index.html","67883f8f5a1e694fcc527f5e0149fdc8"],["/2024/09/15/Next8.2.0主题更新计划/index.html","e747fd4819272a67b93e9efb8328d016"],["/2024/09/18/鸡汤文字/文字的救赎/index.html","2fad97367abd110e01a9d6445949e2a9"],["/2024/09/19/感悟与展望/心里话/index.html","e0db21bb4411bf274d8262a81dcdece0"],["/2024/10/02/遇到的bug/Mysql无法连接问题/index.html","dcaa39b81b96304c95cda44d48e2ecf4"],["/2024/10/07/学习笔记/ROS常用指令/index.html","477c5677752c15a5d16608fdd93ddc1b"],["/2024/10/07/阶段性总结/2024国庆假期总结/index.html","741f69d24d929f182935b6a294b8d4e5"],["/2024/10/22/学习笔记/Linux基础命令/index.html","7f269a7adccd188f97b9a300ce35899f"],["/2024/11/05/阶段性总结/十一月初总结/index.html","638d67189102aeccc0e632bbac027a32"],["/2024/11/18/阶段性总结/2024十一月月中总结/index.html","2ee71d9176d224a422f103a7f759aba0"],["/2024/12/05/阶段性总结/2024十二月月初总结/index.html","7d851297b8dec05bf1ff7b2755485ec1"],["/2024/12/14/阶段性总结/2024十二月中总结/index.html","4227c5a94c4b623b0bbf314cf01e7b18"],["/2024/12/20/感悟与展望/直面内心的反思/index.html","6d9ecf25b87b213e7d15289b4a6801a7"],["/2024/12/24/学习笔记/通信原理期末重点复习/index.html","ff79db78a16c2de3ebc3d18a8be5ab49"],["/2025/01/09/感悟与展望/对于实况足球的反思/index.html","9af8bb9ab1fcd2769e3f53a36eecacad"],["/2025/01/09/阶段性总结/2025-1-9-大三上总结/index.html","7ed756f340ccacba4bf54a08f72d1fd6"],["/2025/01/12/学习笔记/蓝桥杯C++刷题笔记/index.html","c75ee8490972ac2f96fbf4bf1f29c988"],["/2025/02/24/阶段性总结/大三下整体规划/index.html","09fb8c22c4c6f53fab5b5f62a0a093a2"],["/2025/03/21/感悟与展望/实况足球二十张高光券白光有感/index.html","85739a397b5968c855be8a1924a60191"],["/2025/04/08/感悟与展望/对于恐惧的思考/index.html","7772b85aa6304f8d6e2ff68cb1c599c5"],["/2025/04/12/感悟与展望/蓝桥杯参赛有感/index.html","2f23198a9c28a77ca854fe358235460f"],["/2025/04/15/感悟与展望/身体健康最重要/index.html","c88858cdf07cd2d44ea28c35a71a9542"],["/2025/05/13/感悟与展望/大三下的迷茫时刻/index.html","9b008f568b801547348018acb9772b3c"],["/about/index.html","2131ec90d627c71b93f80e648881fb2a"],["/archives/2024/01/index.html","b2fcfe4fba7bfa6e0b3abe44be620a82"],["/archives/2024/02/index.html","cbb807a45404435c0c4f757e969b5879"],["/archives/2024/03/index.html","9f6699238ac6e4228ecdac34632910c3"],["/archives/2024/04/index.html","bab6f1191eab3ab81a39951df5c9bea7"],["/archives/2024/05/index.html","3b6c4468599af7e2cbeed5d9110922c3"],["/archives/2024/06/index.html","ec8b9a0890b35c63881989224946b486"],["/archives/2024/07/index.html","a727def3c2c95ce5f7f9f223d33d8f38"],["/archives/2024/09/index.html","d0edd599e7513961d2e3b4037a37da55"],["/archives/2024/10/index.html","01dd52286c404c372a12f6c5b8e7715b"],["/archives/2024/11/index.html","885f51f42f5174e81914a292e3349a8b"],["/archives/2024/12/index.html","3f601407436253d82f87e8555692ae9a"],["/archives/2024/index.html","f6fc023458087b863265bf49c48d23a6"],["/archives/2024/page/2/index.html","3bb95c334c4d9104382135431c6c553a"],["/archives/2024/page/3/index.html","71a471b93dc0125193d6ba41ed6535f0"],["/archives/2024/page/4/index.html","f54e472fe771e99caa72278f85545629"],["/archives/2025/01/index.html","e4fe7032a8c238c20599d2d924efc2ee"],["/archives/2025/02/index.html","7cace85490b7962626fc0f96a623410f"],["/archives/2025/03/index.html","853b9641a299d60c97a5fc62879c37b5"],["/archives/2025/04/index.html","4e65db6741e3339163aca56c045bcb40"],["/archives/2025/05/index.html","325b1f202999c835ba68d189b2bae1c5"],["/archives/2025/index.html","e09db56072b8c674df68c7879c77cb5c"],["/archives/index.html","ad8995b9e0da0cad7644c86186934f20"],["/archives/page/2/index.html","7504a2f0c1bb3a38b8edcbde961be627"],["/archives/page/3/index.html","44150e023bc454e10ceddc69d2f7bc0e"],["/archives/page/4/index.html","8acc65bc4ac66b8f4b26850f891dc4bb"],["/archives/page/5/index.html","5a089027dcaaa448e6d41c96c6dd3909"],["/categories/Plan/index.html","d043825526c20c07106894f89f90bdb4"],["/categories/Problem/index.html","75a152f9b1ab4b23c11262e377ba8e5b"],["/categories/index.html","dd24ba8aa70a2dd390d0290d0ffc56c9"],["/categories/人生感悟/index.html","422e1fd7509ba9753d3e757bd9110d6a"],["/categories/人生感悟/page/2/index.html","221f6a8d91aaf58a071ebeba27e63324"],["/categories/人生感悟/page/3/index.html","e33fe3c4cc3f0b406cc261c19b2bf736"],["/categories/喜欢的文字/index.html","4a584b7489d4927fe84c507414749843"],["/categories/游戏/index.html","f10f7ec81820299f2bb59d6a18b70010"],["/categories/编程学习/index.html","cb30d10f2b8e09fd6ae9067888803166"],["/categories/编程学习/page/2/index.html","931d1a654a624b39d5274d43a31cfd94"],["/categories/通信原理/index.html","7ba8df4107738c821b9125bc98d5dfc8"],["/categories/面对失败/index.html","25cac7470f062ce0eafade55effbf235"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","5797652d037e994ff3d220db19fcdc2c"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","32ea5345af4c8028d2d587350ede562a"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/exif.js","9c486db86e7ceeb1ec2c0f36518f5603"],["/lib/fireworks.js","e7e4d9972a4c7ada5122077088b970be"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","5e552cc03cb4c71033956dc2f1211ad5"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/page/2/index.html","a8ae06c838aa8a6862875e843439d34d"],["/page/3/index.html","ecadf2bc1f78c31e6dcfe809b2419f89"],["/page/4/index.html","929ae15cbe6cdc5c418707670a3dea83"],["/page/5/index.html","0e0229fc0a22d493ffe8fa148e6ad4dd"],["/resources/index.html","1410309ea51bdc22be747f5adde1d577"],["/sw-register.js","4fc522b4051b271ef3ef9a3798a78c89"],["/tags/C/index.html","db6b2ca64a4dcf0dc7ff6724b51e4553"],["/tags/HTML/index.html","c5af0fb52331de97f7f05bf865e62623"],["/tags/Linux/index.html","eaa1ce857d82048866e5fa0951fb9c0c"],["/tags/MySQL/index.html","11f5cb0c55ea47773986df5bfca1eca9"],["/tags/Python/index.html","d21d3d5e044371b42e0c18376746d495"],["/tags/index.html","e6106e47272269f8bcc62e3c78252461"],["/tags/励志/index.html","a671d5bf5fd5d5852361a741ee7d4a32"],["/tags/博客问题/index.html","91092c5c058b99977effe1bac9228590"],["/tags/实况足球/index.html","ee17bf55b3e28baf148cefa019449104"],["/tags/总结/index.html","72cb9a194c2a647f4399e96207ece2b0"],["/tags/总结/page/2/index.html","d8f98c6049c0f4a9e49e6991cb414042"],["/tags/数据结构/index.html","4eef0fa4e4e006b0942670da5c2f54c7"],["/tags/竞赛/index.html","4db19162bc8cd85da56e7a48747bce6f"],["/tags/考试复习/index.html","dc9c9279192e37fdabf69c7171719960"],["/tags/规划/index.html","652ea1bfb1210e0ce6107214eeb62f44"],["/tags/随笔/index.html","ebcdfe60e922d074d9ba5c80998ab02d"],["/tags/随笔/page/2/index.html","e658594016842b53b191ea40032a194e"]];
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
