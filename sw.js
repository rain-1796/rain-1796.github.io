/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","6915e88ff35fbe86b960b4811550ddb8"],["/2024/01/06/阶段性总结/大二上期末感想/index.html","a0f993074fb593124cdb4a31b33cecbb"],["/2024/01/09/阶段性总结/大二上总结/index.html","871ff1ab47e5bd6355e5a2852568f60a"],["/2024/01/12/学习笔记/数据结构期末复习/index.html","85563e83d0965e4f6e1c1dc9d4eb0bfb"],["/2024/01/12/感悟与展望/大学物理下不理想成绩的反思/index.html","4d1397d8ff44dd58044a9582381382d7"],["/2024/01/17/遇到的bug/博客上传的问题得以解决/index.html","9011c46a22fc66ec2577a2f341025a42"],["/2024/01/18/遇到的bug/git-clone问题/index.html","22c5bd8289140bbc359e13565ac19b8d"],["/2024/01/21/阶段性总结/1-20总结/index.html","5c2a69c6a1af77f8c8c18658acf705c1"],["/2024/01/23/学习笔记/C++map新知/index.html","756a8b820b14d2c0cd53f7e9559731bd"],["/2024/01/28/学习笔记/HTML笔记/index.html","a02cf022f0aaf5228ecb2451d7f7b000"],["/2024/02/01/感悟与展望/科三挂了的感想/index.html","5b14d0f102e82de98711d1aa06e7f81c"],["/2024/02/23/阶段性总结/大二下开学前的总结与展望/index.html","bbcb55e3508ac26a7576dd3d3779166b"],["/2024/03/26/学习笔记/MySQL学习笔记/index.html","34fd4821fb7710056e060970912c8e9f"],["/2024/03/29/学习笔记/MySQL——34道查询练习题/index.html","b9c6e370fb2d6b987fd4088f3d70e950"],["/2024/04/02/阶段性总结/大二下开学一个月后的总结/index.html","5fa3212b27a30f13d915804e0485075a"],["/2024/04/07/阶段性总结/前三学期的绩点感想/index.html","8582d6808958907f7bfff6ad9aa839fb"],["/2024/04/08/感悟与展望/对于恐惧的思考/index.html","848ed1360e772f711bcbaefd62752a02"],["/2024/04/27/遇到的bug/数据库实验——数据导入遇到的一系列问题/index.html","c74ada18ffab61c3f133228337c7c202"],["/2024/05/06/阶段性总结/大二下四月总结/index.html","481a2b98b094bc2a22022ac3f3bbb851"],["/2024/05/28/学习笔记/C sharp/index.html","31a40f8754736d18ae8936505aab3330"],["/2024/05/31/阶段性总结/大二下五月总结/index.html","6da746af930fc6634aa9f6465276ee7a"],["/2024/06/19/阶段性总结/大二下六月中总结/index.html","1be0de26a3e15df9b2dabd21d2bb730d"],["/2024/07/11/感悟与展望/法国被淘汰后的足球感想/index.html","bf7ab10053caf218e89c2b6a4a9ad85d"],["/2024/07/13/阶段性总结/大二下学期总结/index.html","dc1abc031d77ec375e1aa6c13a42e605"],["/2024/07/14/感悟与展望/实况足球感想/index.html","53a8069733ee915700e8f03029333b71"],["/2024/07/21/学习笔记/Python学习笔记/index.html","e7f433d2325193f25c5042329361470d"],["/2024/09/05/阶段性总结/大三上开学感想/index.html","ed32bac8fc6c9c9d94ec304b19b9952d"],["/2024/09/14/阶段性总结/大二学年成绩感想/index.html","c2586d0d06598ec9d95595679dbf49fc"],["/2024/09/15/Next8.2.0主题更新计划/index.html","d55982083e31da2c9774df12acd4f74d"],["/2024/09/18/鸡汤文字/文字的救赎/index.html","a88b879af3f0f059fc1e843c3d0d02d2"],["/2024/09/19/感悟与展望/心里话/index.html","3296a2d2b1b81496da9c4587a0f8cc7e"],["/2024/10/02/遇到的bug/Mysql无法连接问题/index.html","a71d2da792eb813781beba1f939b341b"],["/2024/10/07/学习笔记/ROS常用指令/index.html","4816f213a6c123e1ce3f05189fa0ee5d"],["/2024/10/07/阶段性总结/2024国庆假期总结/index.html","4b9f082c7de5ba3defd473ee9c49d7d1"],["/2024/10/22/学习笔记/Linux基础命令/index.html","59fadc83727e0f8850cbf731ca3da1ac"],["/2024/11/05/阶段性总结/十一月初总结/index.html","ac49a88e88fc2b1390573516052d6f3d"],["/2024/11/18/阶段性总结/2024十一月月中总结/index.html","9e8a487fed06eeb2eb1a1ad63acc9ebb"],["/2024/12/05/阶段性总结/2024十二月月初总结/index.html","61b0360cb3d32025b6060367f1cdd4a7"],["/2024/12/14/阶段性总结/2024十二月中总结/index.html","364747f1fa598c6a09ddf27225b30909"],["/2024/12/20/感悟与展望/直面内心的反思/index.html","b6c926d968e26e1626d1fbb86a359844"],["/2024/12/24/学习笔记/通信原理期末重点复习/index.html","5d1b47f8ddb371d7bc638c7b7904dbea"],["/2025/01/09/感悟与展望/对于实况足球的反思/index.html","d4df1aba3ea3c470a97359c00100aa5d"],["/2025/01/09/阶段性总结/2025-1-9-大三上总结/index.html","91de3f47b644379ff99482eb454e5f22"],["/2025/01/12/学习笔记/蓝桥杯C++刷题笔记/index.html","31ffd0de2d3dea95e405fdf3e348afb3"],["/2025/02/24/阶段性总结/大三下整体规划/index.html","e4e02aa0c27197657f82799ce35df102"],["/2025/03/21/实况足球二十张高光券白光有感/index.html","c9d8ec9bf8616db25dea20c594fd956b"],["/about/index.html","c0b607a04cc5e68ccdbf9464c97f9b74"],["/archives/2024/01/index.html","e18b2723da32b20a58919ff25febb8a7"],["/archives/2024/02/index.html","6e1d5cd1edae1b926050c936bdd4d7b3"],["/archives/2024/03/index.html","c4c65f0805fb256e1d30d6bcdb12ff19"],["/archives/2024/04/index.html","7e6f05b78929bfe5d62bce02d318af7f"],["/archives/2024/05/index.html","c474f2b9f2a8dc6fc6f91b0ee7143f35"],["/archives/2024/06/index.html","e1e860522e4be43aa5169f9f19cb284b"],["/archives/2024/07/index.html","d50d96983c01935af32493030b2c9852"],["/archives/2024/09/index.html","880ff9e558b35e991768dbd592063c4a"],["/archives/2024/10/index.html","8c1494ffc57f31db49d1e60a2b339e63"],["/archives/2024/11/index.html","08f66d0d1fa0aca1a6fa383fc9dfa7d3"],["/archives/2024/12/index.html","382d200155d063a9ea42ed49b9331b78"],["/archives/2024/index.html","a0d9aa6c0df8d1ee08223f898c33baf5"],["/archives/2024/page/2/index.html","dba86cffc5ae537d0197708e3fbc2d23"],["/archives/2024/page/3/index.html","f775659628ab4229b31d7b907b670cd1"],["/archives/2024/page/4/index.html","b0e9f8801bc1bf31d245c1c4d0f640cc"],["/archives/2024/page/5/index.html","9ac5818431c1a9d5ceec7375fd7c0c10"],["/archives/2025/01/index.html","1eea2668292ddcca93a810ada176a41e"],["/archives/2025/02/index.html","6179a1fd4dca5ae853cb7f3aab955e83"],["/archives/2025/03/index.html","521a79326e91f8b03318495a9d26a482"],["/archives/2025/index.html","cbe845ca6c4d7c3993ce3f51ff9945ac"],["/archives/index.html","09a63b9adbf3d1ee70d9b976e16855e3"],["/archives/page/2/index.html","a4763e32b6c97d14339df4538d30779e"],["/archives/page/3/index.html","c735f8a9567579050582374d91ddf815"],["/archives/page/4/index.html","cccd737402e59d31b187efc743a8d2a0"],["/archives/page/5/index.html","cf7efa706847b5a87d7ff1929af2a4f2"],["/categories/Plan/index.html","4d4901b7ddaa2410ae5dbc7a393aac6b"],["/categories/Problem/index.html","64887e55de14d4f42d15bfecbaff7b63"],["/categories/index.html","ad36bb78a9d32d07ce62310bb19eff75"],["/categories/人生感悟/index.html","d0c1ce914fa080c5c7248f194e46c0a9"],["/categories/人生感悟/page/2/index.html","b61e1e5b92d53f8977329bb141a1d0c4"],["/categories/人生感悟/page/3/index.html","7edf1a7cf2eb5c5a494715322b1b3933"],["/categories/喜欢的文字/index.html","788b8ffe08a8a3bc87c03ea03d7be086"],["/categories/游戏/index.html","c6b83338ecc2c6bb2c195d92e095c074"],["/categories/编程学习/index.html","e076a7c4e0bdd780d4be540e9dc360e3"],["/categories/编程学习/page/2/index.html","9c4395978bdf526e013b7e5dc89e5341"],["/categories/通信原理/index.html","46fa327fe435054dd84489c7105043b8"],["/categories/面对失败/index.html","41b839b05f71e0598dc62c59fe1db9a1"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","01dc2db9cd9d18b3581acb0aba6e1f71"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","f4fa02a168b8eb0ecd65ed6b16058f72"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/exif.js","9c486db86e7ceeb1ec2c0f36518f5603"],["/lib/fireworks.js","e7e4d9972a4c7ada5122077088b970be"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","727fc67ba40d3113e53c20417ec0231f"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/page/2/index.html","171d345669dc5576dc666467fb1c1de9"],["/page/3/index.html","37074ef7dbe8945632e97e6a2536fd3a"],["/page/4/index.html","b83b6503d705e21c0b55833ab29ad1f9"],["/page/5/index.html","f79ee648e032cc532ca4202dbeda2495"],["/resources/index.html","c1a62f27a6bd757270fd6834b4404c29"],["/sw-register.js","ca5d5d570b9d467347e6cab30652bf5e"],["/tags/C/index.html","3fdbfc46e491182a76adaaa051ab73da"],["/tags/HTML/index.html","1315181f5dc574fe60604bbefdfa15d7"],["/tags/Linux/index.html","349ad14701ccb91d6cee62f352112be6"],["/tags/MySQL/index.html","0c9d73d410a6ca3e029c8fafe2b81719"],["/tags/Python/index.html","5ba914062b59ee8e23cac95c7bf7d9ce"],["/tags/index.html","0c25afabe4004a40f2b24d5c0e08342c"],["/tags/励志/index.html","ca3b2f59b9340cdeb339ea004a0adfdc"],["/tags/博客问题/index.html","a0c1c9e958f8faae6a0f0ea9ef663048"],["/tags/实况足球/index.html","781cdb532df66c5383b84227f2c147c0"],["/tags/总结/index.html","687af4c08cf844518f9ce2b19cf5e7d5"],["/tags/总结/page/2/index.html","6626caa9a22c6dab2352dff817cfba20"],["/tags/数据结构/index.html","3d6358fca2d67715f08ced8452228ef2"],["/tags/竞赛/index.html","528440550a5bc917c31c7f0f05f1791b"],["/tags/考试复习/index.html","c65de71b2e50278bb4c5522c0cf8b953"],["/tags/规划/index.html","12a096904928561c129d10acb18a280e"],["/tags/随笔/index.html","973ed15a4f70ab992a0018471aa7284f"],["/tags/随笔/page/2/index.html","acdb25e3a59c87a50a87625d7f43230d"]];
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
