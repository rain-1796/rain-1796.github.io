/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","31d27e5afee70c9de3c5b2faf4ae7a17"],["/2024/01/06/大二上期末感想/index.html","1460750d4b803960304b53c3a1ae1d02"],["/2024/01/09/大二上总结/index.html","d6b93688ad7db977f0300e5c6d926e5f"],["/2024/01/12/大学物理下不理想成绩的反思/index.html","70263b00790eaf227c52b81d5f1929d9"],["/2024/01/12/数据结构期末复习/index.html","402b997a238995d40a3f8e229baaa020"],["/2024/01/16/红龙贼/index.html","afd5cb1ae6108a4f86b8c6a8b2ee67ec"],["/2024/01/17/博客上传的问题得以解决/index.html","d996a427e7e2c61752bbc13d159a014f"],["/2024/01/18/git-clone问题/index.html","76e67ca05263b76abc4ae49b05097293"],["/2024/01/21/1-20总结/index.html","355fbfe543d547e46f5e46fde7046500"],["/2024/01/23/C++map新知/index.html","1edb97274b937bf2831f29adf71a7908"],["/2024/01/28/HTML笔记/index.html","dd9e854eefa94fffcd0ccddd068fbb9e"],["/2024/02/01/科三挂了的感想/index.html","39f0f8ab7393efc49703c61b9753f128"],["/2024/02/23/大二下开学前的总结与展望/index.html","f322c6b4d3e36aa0c8e476bbe8435f7a"],["/2024/03/26/MySQL学习笔记/index.html","4a4fa33104d554a9a9d06f979bb3eed4"],["/2024/03/29/MySQL——34道查询练习题/index.html","fde0698e7d0c27786bc87c05d9d9495c"],["/2024/04/02/大二下开学一个月后的总结/index.html","9b6ad9a3e3c6eedd5afb9772d4d38872"],["/2024/04/07/前三学期的绩点感想/index.html","75ecffb85df874c00b74d33e2219e1de"],["/2024/04/27/数据库实验——数据导入遇到的一系列问题/index.html","f28039326e575911743ebf849034ceaf"],["/2024/05/06/大二下四月总结/index.html","a00a75b149a3bdef88c15b5d29facf00"],["/2024/05/28/C sharp/index.html","41de8a4c4911bc9e2f66552ef5204702"],["/2024/05/30/数据库课设报告（图书管理系统）/index.html","d6c1eda71bff34ec90835b331a533e3d"],["/2024/05/31/大二下五月总结/index.html","19fa0721dbbf29d82b5ceb90d88606cd"],["/2024/06/19/大二下六月中总结/index.html","8abc767bbb58ae83fdcaba2400fdc720"],["/2024/07/11/法国被淘汰后的足球感想/index.html","9c3116bb2bfe829b10535ac799c5db00"],["/2024/07/13/大二下学期总结/index.html","708ad9a97fbaaa67c63d090fdd309ee2"],["/2024/07/14/实况足球感想/index.html","39a5f56378227093a154e502aeec0933"],["/2024/07/21/Python学习笔记/index.html","7a1bf5a6f6af51cbdefa5c239e1da129"],["/2024/09/05/大三上开学感想/index.html","cb59caffe612b5bbb8803a33c66ec0fa"],["/2024/09/14/大二学年成绩感想/index.html","6050f0d0e722866bafece9e430f4e26e"],["/2024/09/15/Next8.2.0主题更新计划/index.html","36ae2d9635aeebe81a6d33e5281442b6"],["/2024/09/18/文字的救赎/index.html","2442c96556005b87bf4ad3aa6cff5e61"],["/2024/09/19/心里话/index.html","d22d55669e20587e2b99f9525684b740"],["/2024/10/02/Mysql无法连接问题/index.html","6a1413358d95876519c2783892c11663"],["/2024/10/07/2024国庆假期总结/index.html","2baba4eee35be5a7a37ad430ecf71e89"],["/2024/10/07/ROS常用指令/index.html","28392381d2ffa25a10ed26d19eb96250"],["/2024/10/22/Linux基础命令/index.html","971dd16630a9355f40f80fdeca97ec0c"],["/2024/11/05/十一月初总结/index.html","fbbb66740042fc043a3440ebd28c3889"],["/2024/11/18/2024十一月月中总结/index.html","9b8c4eb93fa3297ca8d86bb4f9aa3a6b"],["/2024/12/05/2024十二月月初总结/index.html","79cfacafbd3e57660c134926d0e854d7"],["/2024/12/14/2024十二月中总结/index.html","61c46919bb85b682ffb418642373b5df"],["/2024/12/20/直面内心的反思/index.html","9e25461c34e1af323e2e988124e7254e"],["/2024/12/24/通信原理期末重点复习/index.html","5fc7601abcaa53ea901e9b7027568686"],["/2025/01/09/2025-1-9-大三上总结/index.html","a68f89409715c6b49eca4114ef63c82f"],["/2025/01/12/蓝桥杯C++刷题笔记/index.html","c8beded6f397d4a275e124c46bb4fa61"],["/about/index.html","dde2c1b145742125b7b6a7f7f725f778"],["/archives/2024/01/index.html","3c21145f9f663e8655ec7dedb30122e9"],["/archives/2024/01/page/2/index.html","2ac49283efe0399d552b389e6c9ff5a0"],["/archives/2024/02/index.html","bd1a5f118d6446b642039c5f14feae68"],["/archives/2024/03/index.html","46cff435986bb6dd996a888bca1d9f7f"],["/archives/2024/04/index.html","a3960ea58296ce178ebd5a93ff2f8687"],["/archives/2024/05/index.html","8802ad0470869a691b0226dd467baf8e"],["/archives/2024/06/index.html","5ea1e464c6b8315a09043933fd96a3da"],["/archives/2024/07/index.html","57b5efb8cb6a66351a1bbfb4930953a6"],["/archives/2024/09/index.html","943c8fc4d20659803da1ca37874863ce"],["/archives/2024/10/index.html","4d4d770de7b2c2fdaa1843beb4a5dc93"],["/archives/2024/11/index.html","16de0cf18bdb804a93916dee27bb2a99"],["/archives/2024/12/index.html","281a997517fd68d8a2193208d93b2da1"],["/archives/2024/index.html","20f8d295cbaa56d06125762408d98ed5"],["/archives/2024/page/2/index.html","67b1b622a8131216e97dd1bb3b6254ef"],["/archives/2024/page/3/index.html","c23724f6cdef48e411bedc27a9c29641"],["/archives/2024/page/4/index.html","b470e065577d9242f671fb3a104b6a65"],["/archives/2024/page/5/index.html","cf861310465526b48aeabd2984ced35e"],["/archives/2025/01/index.html","281e774c7fe3ae86c63283dafb35d31c"],["/archives/2025/index.html","faf52792e1be2313258cb73474107c97"],["/archives/index.html","64420a2f5ffc72326bc1a2f9c48ec750"],["/archives/page/2/index.html","230ad64008aae61fac9ddb3cae35c945"],["/archives/page/3/index.html","fb244c5f7530166c949cb28eaa2930c4"],["/archives/page/4/index.html","c1eec4a267273778e32370e143c64295"],["/archives/page/5/index.html","2db93c7594f0ed00055e26ab08eff93b"],["/categories/Plan/index.html","00ab799fafea9a779ab356ed86f070bc"],["/categories/Problem/index.html","6cbe45271bbcf76d0c3634a9bdf3abe2"],["/categories/index.html","bb7d85a6f119f108612571ece20ca879"],["/categories/人生感悟/index.html","2ad571e30af6ab1c63ff98d90f20a705"],["/categories/人生感悟/page/2/index.html","bdf2b84eef4bae9bbb1d515656de29a5"],["/categories/人生感悟/page/3/index.html","afeba31811312dcd439223c6e1fb4084"],["/categories/喜欢的文字/index.html","a5c5a590a90fd1fb3422638510f9db14"],["/categories/游戏/index.html","741bf1b9bdb815dd153a1e91e87220b2"],["/categories/编程学习/index.html","1d2bc68fc0d39f2d378a7f966808bd85"],["/categories/编程学习/page/2/index.html","8c7899966c21187d00352431eb8e6943"],["/categories/通信原理/index.html","4b825eb755d71badbf3be98b45c275b2"],["/categories/面对失败/index.html","a08ac5004ac77b7805281a4aa8910731"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","8eb8ae315ae182feecbfe70462e8b3dd"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","670b1282c1f9118f711920bb5314eeea"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/exif.js","9c486db86e7ceeb1ec2c0f36518f5603"],["/lib/fireworks.js","e7e4d9972a4c7ada5122077088b970be"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","bf05924427d4c06340d25a713706891c"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/page/2/index.html","4c305607189bd1b8bdf6993c1b72634c"],["/page/3/index.html","4bbaf8657e1dca0db9b119b5277bb5c5"],["/page/4/index.html","297f0cd07b8f89387bc82e215c27294a"],["/page/5/index.html","067edc6547ab1e591f6afa54e9a51a98"],["/resources/index.html","8d7d123be8fcfe2fceb6af2230d8000a"],["/sw-register.js","f2fc5d3aaafb5c910e24ff595cee9956"],["/tags/C/index.html","f259dc05572948371ed35cedd32b4d95"],["/tags/HTML/index.html","2ce64f7243ee6dc42afa537fe97d513c"],["/tags/Linux/index.html","1d6245113967007823ec783783672ab5"],["/tags/MySQL/index.html","f8f5a705e30984e46d77029fd406f283"],["/tags/Python/index.html","28b88fcf6ea4a84f3828e8f4b74a6dd1"],["/tags/index.html","e9728129dd5e2a764e1a12e68104b16c"],["/tags/励志/index.html","c7ac21031d697dc418a5a38e0505fb64"],["/tags/博客问题/index.html","a993b75354f5dce522fe85175220497d"],["/tags/实况足球/index.html","ab6250a6e5727a7a3e7b6f669c515cc8"],["/tags/总结/index.html","f9746f88e519125bf55a6d76cac9b0d7"],["/tags/总结/page/2/index.html","f9dea4bbd3dad145a9b404d189e70258"],["/tags/数据结构/index.html","9c690a69ab0319a107fa7c50a3596800"],["/tags/炉石传说/index.html","83bae8500e335e9a96c2705e5e54075b"],["/tags/竞赛/index.html","b2f29fdf522fce3f0e59fff6d1fd3215"],["/tags/考试复习/index.html","7ba3820320c07eaa235d2cffbd4b1bcf"],["/tags/随笔/index.html","4a32314ac3f29474d88ff241770d9037"],["/tags/随笔/page/2/index.html","70849331a18dc2c95a6bcb9613f873d9"]];
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
