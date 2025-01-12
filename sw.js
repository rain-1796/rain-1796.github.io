/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","3304f51ae0a058a46615e5d09c3f0fb6"],["/2024/01/06/大二上期末感想/index.html","2d492af21ca1ae77355c199af74f1659"],["/2024/01/09/大二上总结/index.html","3567b1092e0b0949af2a0f8f041f9a3f"],["/2024/01/12/大学物理下不理想成绩的反思/index.html","79245d12aa3cc003ca95abd10e18c02f"],["/2024/01/12/数据结构期末复习/index.html","95ad10de05659329021cb2efe610f9fc"],["/2024/01/16/红龙贼/index.html","afbcaea6023db8dda59b9063a97fdc6e"],["/2024/01/17/博客上传的问题得以解决/index.html","5e736938b6d421c2c8a2d617abf9e4dc"],["/2024/01/18/git-clone问题/index.html","099a0091e4850448b4a29c41258364cd"],["/2024/01/21/1-20总结/index.html","8589f110118dd47c2162ccd09f1517e5"],["/2024/01/23/C++map新知/index.html","871bd188fae5022aa9f85eb0b38ee390"],["/2024/01/28/HTML笔记/index.html","bd57a451cbe66feee03fd786d87dc1e5"],["/2024/02/01/科三挂了的感想/index.html","3034448cb2747d9d2dd28eb321681800"],["/2024/02/23/大二下开学前的总结与展望/index.html","4b86d5d9a0a9c76e57e7cdb35aec64e2"],["/2024/03/26/MySQL学习笔记/index.html","8f18ff6838882b14b71a618920f1b17c"],["/2024/03/29/MySQL——34道查询练习题/index.html","04a3d9ee9ad6f4590c284b66f00d5efb"],["/2024/04/02/大二下开学一个月后的总结/index.html","821cf3243e887d7d9417b5154d9f9e89"],["/2024/04/07/前三学期的绩点感想/index.html","b564754b26cafe7e9a60601b0d6ea657"],["/2024/04/27/数据库实验——数据导入遇到的一系列问题/index.html","1af78fa47d5b429aaa2df30ff7bc85db"],["/2024/05/06/大二下四月总结/index.html","8b8406e21e3d7214f9405891a09802bf"],["/2024/05/28/C sharp/index.html","37657cf93cfc887050ef3eeda890137c"],["/2024/05/30/数据库课设报告（图书管理系统）/index.html","b454304916b13c3b7dbf1ca71a974e7f"],["/2024/05/31/大二下五月总结/index.html","5f16db2dbebadb84654aa89c6470e50e"],["/2024/06/19/大二下六月中总结/index.html","b2526b7ac7efa5a97b3bfb793f3fa106"],["/2024/07/11/法国被淘汰后的足球感想/index.html","6725641c985717c69d58caf9e7ae9a58"],["/2024/07/13/大二下学期总结/index.html","c3ef6df352b5ab899a536acc3b91cff5"],["/2024/07/14/实况足球感想/index.html","a435c97026f5433cac089d1bf5fe5fbb"],["/2024/07/21/Python学习笔记/index.html","55eea489c947bd386c72c9b40c751a0e"],["/2024/09/05/大三上开学感想/index.html","4a4e92f65719521ca3cf9a80e6e21101"],["/2024/09/14/大二学年成绩感想/index.html","8c513422626d6ba19c8822388d1f5b1c"],["/2024/09/15/Next8.2.0主题更新计划/index.html","d90c25af48db085d00f4143d0748b591"],["/2024/09/18/文字的救赎/index.html","0057b471f2747f281047eabbaf003e15"],["/2024/09/19/心里话/index.html","a5ee3ffa68affa5e52453beef4aa85a9"],["/2024/10/02/Mysql无法连接问题/index.html","e0e6cffd98086bbb98a16f04d63cf378"],["/2024/10/07/2024国庆假期总结/index.html","d3cfc1ce74bc96741291b50fe97fd524"],["/2024/10/07/ROS常用指令/index.html","cbb164320039cef775803df8204c301a"],["/2024/10/22/Linux基础命令/index.html","9ce9b5bf40f296ce09cc0b0ab0027f35"],["/2024/11/05/十一月初总结/index.html","012c2afc4542cb4cdfee14a607e5eaf1"],["/2024/11/18/2024十一月月中总结/index.html","6ca61e76f13753330d5a72e54ad44de1"],["/2024/12/05/2024十二月月初总结/index.html","2b6588e73bf57aca13c294b90365e178"],["/2024/12/14/2024十二月中总结/index.html","62bed96f966f664b4bb871acb70ab5c1"],["/2024/12/20/直面内心的反思/index.html","8760365822d553ee77d1b2983419d696"],["/2024/12/24/通信原理期末重点复习/index.html","6876a4c172297585596b9fd6a75ac13b"],["/2025/01/09/2025-1-9-大三上总结/index.html","3ac92d9a5654a98f9a0b95f2efcac600"],["/2025/01/12/蓝桥杯C++刷题笔记/index.html","dce88372a14a6d2ef56476bf47983aaa"],["/about/index.html","6318e4ec48016e247298b05f3dd1643f"],["/archives/2024/01/index.html","03f079e9facf9de1ef00eebb6608b84c"],["/archives/2024/01/page/2/index.html","0f8b39babf709c29c71055559e1fdf0b"],["/archives/2024/02/index.html","ad2d934eaea99c97ae0cd88f8e204032"],["/archives/2024/03/index.html","5f6b0de1a0f061f558113a296de065ac"],["/archives/2024/04/index.html","b493b58b3e2939d07802cf42963ab54d"],["/archives/2024/05/index.html","a437ad33cc686669e5dfe570414d8fea"],["/archives/2024/06/index.html","a3e803fcda5a713613312a489ab5716f"],["/archives/2024/07/index.html","ad9cda8024ac4fbc2a7d65f1d6e98255"],["/archives/2024/09/index.html","a78540e3f792862f3487a6ca7d742cda"],["/archives/2024/10/index.html","ef8e479780d4dcd99dc8a867edf4ea92"],["/archives/2024/11/index.html","f036ad417dbef56a985ac209e7719584"],["/archives/2024/12/index.html","fa6ddfca4eff1026731e8b9f1e85d1f0"],["/archives/2024/index.html","d679d9909ad29a1082201f2712d641c9"],["/archives/2024/page/2/index.html","af8bfd7cd881cbce5ce840691aea5777"],["/archives/2024/page/3/index.html","ec0d15f5a4b70b1e820a9274c783c964"],["/archives/2024/page/4/index.html","c420944ddd5c400f24a819c6878f516a"],["/archives/2024/page/5/index.html","6766d9af100f824ecdbc3733e3883e26"],["/archives/2025/01/index.html","771bbbe876186d8cd2fcd4340ec15298"],["/archives/2025/index.html","de16de9f65d54f5dc9b93c506370a85b"],["/archives/index.html","a4bd42eea8fbb204366790eb09523c20"],["/archives/page/2/index.html","da957082c0e2b2bda0234349917f58d2"],["/archives/page/3/index.html","d22c3b953437ab9f50e0090a83dd8299"],["/archives/page/4/index.html","9c12f59262a1ffa4eded367fe45419a6"],["/archives/page/5/index.html","bb3a51866ba18f9d652a7457e3646c57"],["/categories/Plan/index.html","e83d2e0ce94acd6590f59cbb9e320b9c"],["/categories/Problem/index.html","d41aa3b77f303635cbbd31d638787876"],["/categories/index.html","37b127a480c19ede2cf80040e62d2dd2"],["/categories/人生感悟/index.html","943ce30553d99484819ccf1a4cd472a8"],["/categories/人生感悟/page/2/index.html","47711ff16f293c69f04ca08ef28dadfb"],["/categories/人生感悟/page/3/index.html","b41f75ded65e3aeeaca5a8559a301f68"],["/categories/喜欢的文字/index.html","ff2801fbb729a34a8bf3a3472f9ecf2f"],["/categories/游戏/index.html","3a793209193716e5ef2436ca24b1871f"],["/categories/编程学习/index.html","4b643e06ebfc9a477306c2c220690bf5"],["/categories/编程学习/page/2/index.html","c0db05786d64fb835f1c823be34e14aa"],["/categories/通信原理/index.html","9d4a85dc9c1c007281e8b015249e4a3b"],["/categories/面对失败/index.html","355096b8821e8a04630c1caedfa48fe8"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","73b6f7e16ab6e0c8ff9831f5da62313c"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","a02585d95af36297f6a570ac3aba1f96"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","ec1fdaf03f8495b74c834663bd829ce2"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/page/2/index.html","82f0a9c3cac2f3780df955e903f42559"],["/page/3/index.html","799243aa4930bd91bd20606f765f91ab"],["/page/4/index.html","5115fa5e04086c41a3bb65d14378d6ec"],["/page/5/index.html","eef09dc0db3162386fa1390f9f20bdef"],["/resources/index.html","2b4b80d0c4a42d39c428ec286ca36ea0"],["/sw-register.js","5a920e7a6e0bd699b63d362e15ecce53"],["/tags/C/index.html","1c3ca141e75460a23ed34e007055a4ef"],["/tags/HTML/index.html","8a425d512aeb79cfda23c546349a7a35"],["/tags/Linux/index.html","11f68a9475ba2412c6684bc9d0664db5"],["/tags/MySQL/index.html","8c5a0a6ac502b119d175a28035ad7aa9"],["/tags/Python/index.html","2d2139c9e7fbaee5bd422e7f1501e3b6"],["/tags/index.html","896ab47ac173a0cfa1a9ef81903dd831"],["/tags/励志/index.html","1b0477f5916ab0f847ca12c696bcc57a"],["/tags/博客问题/index.html","4c9ba0492e5f5815367068043959f493"],["/tags/实况足球/index.html","bc79c0eecc647b66d28ee3a9f8ce7bc7"],["/tags/总结/index.html","a490815347b8c57d908fb4726235b271"],["/tags/总结/page/2/index.html","646eccaf476ca32fe0546e8a832ffb20"],["/tags/数据结构/index.html","dbe463a94ae0430127704fa3380e1b60"],["/tags/炉石传说/index.html","4e24ad5bdbcf868a7a9eb12c391bd7d0"],["/tags/竞赛/index.html","4f248a51aa33832bc4c20bb222dfc078"],["/tags/考试复习/index.html","257a3a3258d136e62ea79c6c655f8f48"],["/tags/随笔/index.html","2226f3df7cdda6fbe292607af419de1c"],["/tags/随笔/page/2/index.html","380577272f4dddc8e780c65f07085f2d"]];
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
