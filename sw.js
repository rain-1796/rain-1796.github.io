/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","9f9684702fd79d97818703999ec10c53"],["/2024/01/06/大二上期末感想/index.html","e23fc6ea6121e1a65728e9b4ae36c49c"],["/2024/01/09/大二上总结/index.html","c39cdf06d6df61704ca5b0c3f1ad76f7"],["/2024/01/12/大学物理下不理想成绩的反思/index.html","50a65ea21644e9426f0bd39ad6ee4d3d"],["/2024/01/12/数据结构期末复习/index.html","adc13d097f67595fb96f0eebca335443"],["/2024/01/16/红龙贼/index.html","a0b0e724f13fc717b7039c56bb8e5362"],["/2024/01/17/博客上传的问题得以解决/index.html","b0073f01d43107a888bd92e0a6c27e6d"],["/2024/01/18/git-clone问题/index.html","bd8c36f18d010bdf11bcbacf336cf8ba"],["/2024/01/21/1-20总结/index.html","afe730be987f79fa755003652d9a7b9e"],["/2024/01/23/C++map新知/index.html","8e05b59ed40060351f9ae031056f1df4"],["/2024/01/28/HTML笔记/index.html","b71555e2ab3b5cf78f8b84e6ce37236f"],["/2024/02/01/科三挂了的感想/index.html","b51e2a372d48842990f2bf58ec8b2efe"],["/2024/02/23/大二下开学前的总结与展望/index.html","4b5765ae50180fe0ff6adb9b06dd3321"],["/2024/03/26/MySQL学习笔记/index.html","951cf8a54ef6c9720d5234ca3dd912d0"],["/2024/03/29/MySQL——34道查询练习题/index.html","6bcad400ebb7044425b02bbdd64d3ed2"],["/2024/04/02/大二下开学一个月后的总结/index.html","540bda5c333c52187a77dc31261c7fe1"],["/2024/04/07/前三学期的绩点感想/index.html","3d1ceb29c2be8fd07c47d07ee0eab43c"],["/2024/04/27/数据库实验——数据导入遇到的一系列问题/index.html","c3010c0caa72357685a537c050409be8"],["/2024/05/06/大二下四月总结/index.html","c3eee0f7f5201a6d8aaca76de287a1be"],["/2024/05/28/C sharp/index.html","4a521687a350a08116cddd27e7bb3e74"],["/2024/05/30/数据库课设报告（图书管理系统）/index.html","ea10795f06bf8a06d4e7bee9f9c41f4d"],["/2024/05/31/大二下五月总结/index.html","fdd07d092bce02674bce474694abea8f"],["/2024/06/19/大二下六月中总结/index.html","73e35c3fb2716d38d6c6df3bd6198362"],["/2024/07/11/法国被淘汰后的足球感想/index.html","1b2d4321ff8d71485ecbac8abb0bccb7"],["/2024/07/13/大二下学期总结/index.html","fc673e0a1029542e7211315bed886e52"],["/2024/07/14/实况足球感想/index.html","d4e7a3db9bbcff25e06c053ad953f15e"],["/2024/07/21/Python学习笔记/index.html","f32e8817eed2bc6e5a230634dfecd102"],["/2024/09/05/大三上开学感想/index.html","699e3280de38a1ae8dc2fb773f4210b3"],["/2024/09/14/大二学年成绩感想/index.html","14a2776f11d00037de7254eac2ed6a0e"],["/2024/09/15/Next8.2.0主题更新计划/index.html","aac2d73216d0ac5ef342eb47a104532d"],["/2024/09/18/文字的救赎/index.html","5e3693e65802a943d47f67b24c1ad596"],["/2024/09/19/心里话/index.html","38fc7058a622d5056a07405e68b4b8e8"],["/2024/10/02/Mysql无法连接问题/index.html","53e49fbfcb7f6571ebbd37566ac0519c"],["/2024/10/07/2024国庆假期总结/index.html","241fb340ff5e81e0fb10876a7be1513c"],["/2024/10/07/ROS常用指令/index.html","1e1656830e06d697746ab281daa69fe2"],["/2024/10/22/Linux基础命令/index.html","72f9a3bda369fdbdb3279796e95cab69"],["/2024/11/05/十一月初总结/index.html","d0aae92921d5a6fc722ba42ee7f015a6"],["/2024/11/18/2024十一月月中总结/index.html","5735ac8078a95a7a28c3514a4a8a861c"],["/2024/12/05/2024十二月月初总结/index.html","b666a3a8903966fde67ed2131e8dd9d3"],["/2024/12/14/2024十二月中总结/index.html","1d096973c574f622032a042e82bd573b"],["/2024/12/20/直面内心的反思/index.html","8327160a66d12c2eb2dcf2d8f5b42e29"],["/2024/12/24/通信原理期末重点复习/index.html","4c05a74122a8bef19294d19f50b81ed2"],["/2025/01/09/2025-1-9-大三上总结/index.html","07f482f54eb18d9ef4b5e0a27994e0b2"],["/2025/01/12/蓝桥杯C++刷题笔记/index.html","d419c9a1e161c1db33f45bbd59887204"],["/about/index.html","f7c906c93697256a27c1aca35c484d1a"],["/archives/2024/01/index.html","c11d2ec56a690acf6072dc3273bed5c4"],["/archives/2024/01/page/2/index.html","619e9f6f8352feb9cda8906d0aefa7e8"],["/archives/2024/02/index.html","6723f96ba79e9a82403521117a4b7432"],["/archives/2024/03/index.html","3470ee9a876cecbf91494448d04f6ee8"],["/archives/2024/04/index.html","350a52708367be22b70f08f68dff7c11"],["/archives/2024/05/index.html","69bc88eae0d1f3222152f25d43e8a424"],["/archives/2024/06/index.html","d73f4b9fe9b7450df2e78936c300b304"],["/archives/2024/07/index.html","8abe1b93f655a29ac1d9c1c97b6cd34e"],["/archives/2024/09/index.html","92aaf9989a8b69aac1861123fb5428bb"],["/archives/2024/10/index.html","6b0190262756e20955b019f3938ac544"],["/archives/2024/11/index.html","531455cc28c0a5dd3b872b9410d6f790"],["/archives/2024/12/index.html","888fd6675b862a02111002dbc3091bb4"],["/archives/2024/index.html","8453462af747ddfecf75e616d2bbd24a"],["/archives/2024/page/2/index.html","48ca52d006651f1733f9793325b17bde"],["/archives/2024/page/3/index.html","4cf33ce3d1703f34c507cf3c180bec49"],["/archives/2024/page/4/index.html","d29a02762d2b6026b23a74fcc8320fd9"],["/archives/2024/page/5/index.html","bd80a094ad4dbdf9a421e2340508096f"],["/archives/2025/01/index.html","546a4dc9efec8592449ba378f652e3f1"],["/archives/2025/index.html","bba500d5bc995e1824d84e1ae2cdc774"],["/archives/index.html","adfe119b6c7c596a51e3c4b137a9fcfe"],["/archives/page/2/index.html","1366ef27cd601177e3d7085d299f64c2"],["/archives/page/3/index.html","07e8ebe2bf694fc1e787afe68b1ccb83"],["/archives/page/4/index.html","8d770ed04420f9d3408e51ee104f13b9"],["/archives/page/5/index.html","1876e34303689b8043e742f9802258ab"],["/categories/Plan/index.html","6d01244fa07cbfd49740c49f76951883"],["/categories/Problem/index.html","fe4c2b9e678b2f15c4f5fa0f12488f41"],["/categories/index.html","cd9a61ff6ada80084fa85b1487549bf6"],["/categories/人生感悟/index.html","59ba842e0c7dd6b9c71f6172786a8d78"],["/categories/人生感悟/page/2/index.html","f50c4ed18a9f6d0377fb26d92057c730"],["/categories/人生感悟/page/3/index.html","e4f38998a13f99003e4adb95dd2dbf82"],["/categories/喜欢的文字/index.html","7af8a4f46b5f0c505f4466a0e63e9221"],["/categories/游戏/index.html","65f9ad030d0faa321d8de0b1c18a74b1"],["/categories/编程学习/index.html","4b0ab6a24309ef465d58c052724e77cd"],["/categories/编程学习/page/2/index.html","55fcef5d5ed601494bd4791b00f8b2ca"],["/categories/通信原理/index.html","0308a57bed72e715ebe3b8167be43805"],["/categories/面对失败/index.html","8059f312565ea43779a1344519365609"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","73b6f7e16ab6e0c8ff9831f5da62313c"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","6cfac3bb15425529450761e891525c36"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","17262059964478e02d4f724bbfb1ccf4"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/page/2/index.html","0be678dbe6226db610e387d2bd90fecd"],["/page/3/index.html","4ca69bfb5a874e50b4f479084a3633db"],["/page/4/index.html","038527fe89aa24375cc7c54f48457f25"],["/page/5/index.html","f8eec3f1dd09794dd30d0bb3606cd2eb"],["/resources/index.html","d88415eb7228a53e70c3ada82b1e21bb"],["/sw-register.js","74a83ba07f2180f32e52ef939cddd40c"],["/tags/C/index.html","e3fc023b93de2c3a26dc315dbeff0b36"],["/tags/HTML/index.html","3e73c62ac58ddd317ead7d96cf73b0a9"],["/tags/Linux/index.html","e5c0829f18f7643dcc966cb12617c673"],["/tags/MySQL/index.html","5bd737156897785b9b9267779e517fec"],["/tags/Python/index.html","c631e3897ed0f6214ddceba8fbedcd39"],["/tags/index.html","df0ccb0c4e017c29bb947bf16bf52a63"],["/tags/励志/index.html","3b5a7332bdcddab358e80800a3acf9c0"],["/tags/博客问题/index.html","4082e7c80ee7b3fd6149d7c201ceb0f0"],["/tags/实况足球/index.html","2fcb57632aa3e8895e4dd035d4ec82a3"],["/tags/总结/index.html","b9841fcb48359aaefe57a6b765bff8d1"],["/tags/总结/page/2/index.html","1349d4807a02aa4013efbafe2f782560"],["/tags/数据结构/index.html","f7e7bf82d14ac3d6a630dd70ac5d8314"],["/tags/炉石传说/index.html","2532cb50c94cd6eb7dc22aaceb6186a1"],["/tags/竞赛/index.html","440a757c0b39906ca7f918294cf58cb9"],["/tags/考试复习/index.html","07ce53b16eb1f342bf6d737b41d4daaa"],["/tags/随笔/index.html","a491a3c9cc9ebfff08c5cc7d25d1924b"],["/tags/随笔/page/2/index.html","6d08ca5f898396e321b9b92355ad28db"]];
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
