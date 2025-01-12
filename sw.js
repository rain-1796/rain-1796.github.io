/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","55ed91fc0fd7cfe950f7325f78f3f9bd"],["/2024/01/06/大二上期末感想/index.html","da8c396bf7091b67e396f8aeb286d06a"],["/2024/01/09/大二上总结/index.html","42af6432df41ac17d9ed575bec0191b1"],["/2024/01/12/大学物理下不理想成绩的反思/index.html","59e3b19d9830b54dd595c82f1b1e9994"],["/2024/01/12/数据结构期末复习/index.html","4b1568d8407ed404a5f93b31c1d83fd2"],["/2024/01/16/红龙贼/index.html","555fa3231b48b205a5ba7b92330fb986"],["/2024/01/17/博客上传的问题得以解决/index.html","4e7c990ed68fe1dac7973cc01ac8cee3"],["/2024/01/18/git-clone问题/index.html","173cf346a09d9fa0a5319a25db235943"],["/2024/01/21/1-20总结/index.html","4d6cd6c3fd5c634a811b799d44109734"],["/2024/01/23/C++map新知/index.html","e474b0de495976dab685b6684b9045a1"],["/2024/01/28/HTML笔记/index.html","071feae7bd8892e1b368f88f22b9b032"],["/2024/02/01/科三挂了的感想/index.html","98234c14611311d18fcd80de2aa5809e"],["/2024/02/23/大二下开学前的总结与展望/index.html","f31e63de9eebd0c4c19915fc6613cc13"],["/2024/03/26/MySQL学习笔记/index.html","f67bd32e262b9fbc52474c6502897cfe"],["/2024/03/29/MySQL——34道查询练习题/index.html","e80c5a439f268122b875ff401f377048"],["/2024/04/02/大二下开学一个月后的总结/index.html","62cac53da85e91f6c2f5aba2afa695a2"],["/2024/04/07/前三学期的绩点感想/index.html","1d386180e77c9e2dfc907a1d2e2a4f50"],["/2024/04/27/数据库实验——数据导入遇到的一系列问题/index.html","7e9f44717e33f0b1f686100b14b9985b"],["/2024/05/06/大二下四月总结/index.html","09860334344dc17336543d718f5bee58"],["/2024/05/28/C sharp/index.html","317515f153ba481e5e19a412e857e7b8"],["/2024/05/30/数据库课设报告（图书管理系统）/index.html","f22141bc033af9adc01da8dc9440c20d"],["/2024/05/31/大二下五月总结/index.html","4fc580d3acda5853ab82b00fd5792c50"],["/2024/06/19/大二下六月中总结/index.html","b780794be8a4d896fa833181f52cd4f9"],["/2024/07/11/法国被淘汰后的足球感想/index.html","7b7e25ea9e4fa41e24021d9179b2f1f8"],["/2024/07/13/大二下学期总结/index.html","086ef376dcff4fd235beace137e1f5ff"],["/2024/07/14/实况足球感想/index.html","9df0bb2f2dfc2b8714d21c1c79fbec3f"],["/2024/07/21/Python学习笔记/index.html","50e3c3fe943ff3c7e4ac6516d71d4cc3"],["/2024/09/05/大三上开学感想/index.html","0f6d97228e37f93533ddc08d462f4ad6"],["/2024/09/14/大二学年成绩感想/index.html","5f48f4f765bd94696345f6944e15c1c5"],["/2024/09/15/Next8.2.0主题更新计划/index.html","0a1d55df1758fe1b2792d6b2547930d2"],["/2024/09/18/文字的救赎/index.html","287851527c3e24c41ac962808aa5dffb"],["/2024/09/19/心里话/index.html","ee89aa705574f52e39c84855c1d0b69c"],["/2024/10/02/Mysql无法连接问题/index.html","ecbaa64291fb13b63fa2dcfe3bcf0482"],["/2024/10/07/2024国庆假期总结/index.html","601cb4022b8654bc0418fde2835f62c1"],["/2024/10/07/ROS常用指令/index.html","6b81265e48274c11c532760d9de0f0c5"],["/2024/10/22/Linux基础命令/index.html","4b1d23a4a4e5c12f3000c3c5ee7d8cb5"],["/2024/11/05/十一月初总结/index.html","d50685dcd13db2cb87ccc3c48d742462"],["/2024/11/18/2024十一月月中总结/index.html","4394cfd326f2b9cbd8acaa52c2621447"],["/2024/12/05/2024十二月月初总结/index.html","713b5309dcc24ea51ab9d257dd14e986"],["/2024/12/14/2024十二月中总结/index.html","942d33e578cd552200aeddda26b688b1"],["/2024/12/20/直面内心的反思/index.html","2252a693ef6710fb3a90cdcc6bff7d9d"],["/2024/12/24/通信原理期末重点复习/index.html","9132a1932d67ef44f1933ddbd68def44"],["/2025/01/09/2025-1-9-大三上总结/index.html","cbe3f7dae5ba9e82b5eb75afc1335989"],["/2025/01/12/蓝桥杯C++刷题笔记/index.html","e361b28d7c30534f2fdc0faa9352a39f"],["/about/index.html","d2c1a47386be2b08d2ab8c4afeb7c34d"],["/archives/2024/01/index.html","7d37c640cdb86b10b1396d04f96f9ace"],["/archives/2024/01/page/2/index.html","6daa85d9d411ea12455e76c614554e83"],["/archives/2024/02/index.html","adb7172cb595c92969f294e61f9cd29f"],["/archives/2024/03/index.html","74abe73ab624517627fce675243ec700"],["/archives/2024/04/index.html","42530e111b4577297550c8510fa49f10"],["/archives/2024/05/index.html","ed47af0a97c4cff37ad643b47e5af6af"],["/archives/2024/06/index.html","3572a4a847c0cd54fbc709feb454a11a"],["/archives/2024/07/index.html","d77539339aa9fa8400d20db70e13976a"],["/archives/2024/09/index.html","c5727eec416ae3d3d6a9f702fdbcdd99"],["/archives/2024/10/index.html","30d66f6dc3ffb0df9f56a22ed1cbf71d"],["/archives/2024/11/index.html","86158bae8cbbec8654aa089172b6c158"],["/archives/2024/12/index.html","80a7536371693d035169d2b47e438aca"],["/archives/2024/index.html","4c9ee60f6a7d90f67452d36b46201928"],["/archives/2024/page/2/index.html","28553925dc3a78a05867e0fc550b5259"],["/archives/2024/page/3/index.html","28af7e6ff0fc8c24f78a34ad308eb9d8"],["/archives/2024/page/4/index.html","cf8ae38641b49e6dcbf921fcfccbfe69"],["/archives/2024/page/5/index.html","baf09d437e61be59eb587d488111dd52"],["/archives/2025/01/index.html","d27139d17c9f682955869359a6146643"],["/archives/2025/index.html","2408bb42898fcadf9308eb0dbd725429"],["/archives/index.html","becf5dd5f697007687406d71525145ac"],["/archives/page/2/index.html","fbba6fe7d1c5cf345543d5c82dec4269"],["/archives/page/3/index.html","45754e3d30ae45b265da09eefbc89dca"],["/archives/page/4/index.html","70df1240bb9f2b90d3227172d4a9b1b0"],["/archives/page/5/index.html","fc341d46e6bd96bb65a223e3f64f3476"],["/categories/Plan/index.html","363eb6d0e719abf27362da3f2848dcf4"],["/categories/Problem/index.html","59911cacd5c090db7d5747e8496335a6"],["/categories/index.html","b2ba2dcb1bc33dda87b2b87a22529112"],["/categories/人生感悟/index.html","a91cb87b3dad75389b7dc9a7e9d92ef7"],["/categories/人生感悟/page/2/index.html","97291c5afaf2cab648dc8c2e7199de9a"],["/categories/人生感悟/page/3/index.html","229bce28cadf7cf1a48899ad3f136c5e"],["/categories/喜欢的文字/index.html","1ec8d6c6f3d262829b1c869f48bb0b5a"],["/categories/游戏/index.html","7d3c7c0c9ce9f07e7e218bc8d60d7920"],["/categories/编程学习/index.html","0e16632461babd0103b5cedd097e5f84"],["/categories/编程学习/page/2/index.html","386456932717645eb2e1c8af64f04a25"],["/categories/通信原理/index.html","036d29922b7bc841f8283c30ab15e0e3"],["/categories/面对失败/index.html","656361f39df426ae2420444afbcc66c7"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","2757c2473cfe5b1cedb2a1c09204f760"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/index.html","cc4d8b206a7f2eb906fb4a7572843f05"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","23a46a52969cfad551522545179e5393"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/page/2/index.html","fb0f2fc79496fa353652a2d011da9213"],["/page/3/index.html","2386a53eb5a5b83f8c4a439a230704fc"],["/page/4/index.html","fe979278deb71e4b1afb407da02dc5d8"],["/page/5/index.html","b7ba8ae07ca2b6bf577ed82ce3a4273b"],["/resources/index.html","49083342e3a5bc8e3e1bbf8eed6bcc3c"],["/sw-register.js","ecdfbfb602ca39d6532c8d2bc6eed1b3"],["/tags/C/index.html","bb67011a7dc7f6f1618d8393efd56af6"],["/tags/HTML/index.html","0b88412ff660c7c3d2d95fdcf1890807"],["/tags/Linux/index.html","81ffad1dce1c06ae7bda6aabae08340c"],["/tags/MySQL/index.html","4dc31fa0405c157e257ab5a2f0b9d359"],["/tags/Python/index.html","ae1e5046cea58b57dbefe652d846f6b7"],["/tags/index.html","9ed639d11b098c2edcaf8191e5bb9470"],["/tags/励志/index.html","605982866d541bcdf271605140b83702"],["/tags/博客问题/index.html","b2ec2ee3625c4eb31f9d386259ebf199"],["/tags/实况足球/index.html","210db68eebe152b385a6938a93ba47b9"],["/tags/总结/index.html","c9ddc4a0119fd8babad24866b30999f0"],["/tags/总结/page/2/index.html","a0912e1f2414394353e171d19331ed00"],["/tags/数据结构/index.html","403e6a94a512c441a73d2439337b3897"],["/tags/炉石传说/index.html","5157bfbeeb72dd55fa6387c5f2cab77d"],["/tags/竞赛/index.html","c0b06583c749badaefdda0177a2b88de"],["/tags/考试复习/index.html","33834e5e5b1f3a012b6cb87ac4b3ca6b"],["/tags/随笔/index.html","2792d7abbef00334bec0868642b97855"],["/tags/随笔/page/2/index.html","8bfde76ff8ff452a04484756bfe49879"]];
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
