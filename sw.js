/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","92f20cc527d05de4c620af1eee69770d"],["/2024/01/06/大二上期末感想/index.html","7fb747f216d14b4fd07866f0f3217ea5"],["/2024/01/09/大二上总结/index.html","9035b51965adbad2f3b457e58ea5a8ce"],["/2024/01/12/大学物理下不理想成绩的反思/index.html","7b15f401e4fb4a17b73f5da03b981f7b"],["/2024/01/12/数据结构期末复习/index.html","2bbd5e8d03cefaa8e07fcb25554a09f8"],["/2024/01/16/红龙贼/index.html","302f92ebf198d8a29ad6eaeaf4a31aba"],["/2024/01/17/博客上传的问题得以解决/index.html","724fafed738a33f81ffeb99488f84612"],["/2024/01/18/git-clone问题/index.html","8cda777bbb9bdff59a0ee8d006c28e77"],["/2024/01/21/1-20总结/index.html","874fdfba1fdcaa34b578faf5fc5509a0"],["/2024/01/23/C++map新知/index.html","89176713021aac73967f7370d32627ef"],["/2024/01/28/HTML笔记/index.html","eb40d8a1f5be3a13e138862b999930ad"],["/2024/02/01/科三挂了的感想/index.html","22be1e4fe5483e3472091ecb324b8dc9"],["/2024/02/23/大二下开学前的总结与展望/index.html","2c8e2d337dcf4373f9e1e646013c105f"],["/2024/03/26/MySQL学习笔记/index.html","f368de56b3c69ed5bf6b86c6fb9e8ece"],["/2024/03/29/MySQL——34道查询练习题/index.html","f32a8a9de60b91b981ec285145fe7399"],["/2024/04/02/大二下开学一个月后的总结/index.html","b617c392fb17e2f2354f6a5a07c0903f"],["/2024/04/07/前三学期的绩点感想/index.html","5b08b381b5fd631c94f5eed65d4846b2"],["/2024/04/27/数据库实验——数据导入遇到的一系列问题/index.html","768546040cb47a6ae0b611cb790d1b7f"],["/2024/05/06/大二下四月总结/index.html","249fcfb66f17b5590ce161e8b50de3aa"],["/2024/05/28/C sharp/index.html","356f18a7216d3ae20edac3c892992de4"],["/2024/05/30/数据库课设报告（图书管理系统）/index.html","605aef1b04ef05275c483e1975ca771f"],["/2024/05/31/大二下五月总结/index.html","d13c5bedb928c9a9983a7b990ad15280"],["/2024/06/19/大二下六月中总结/index.html","14c6e9a8a3c1d35aa936c43af4277b39"],["/2024/07/11/法国被淘汰后的足球感想/index.html","3dc0f00a7a1a87bc7a30f19ee62f64a5"],["/2024/07/13/大二下学期总结/index.html","b4ec7d7ef738ff1e9117e25bea92f515"],["/2024/07/14/实况足球感想/index.html","579af7ea692a3db76fff90f8e37de13a"],["/2024/07/21/Python学习笔记/index.html","0f20de3a7c36e2c5913b44580e4c7874"],["/2024/09/05/大三上开学感想/index.html","dd8cdab874705ecc6e9d6432948d76a1"],["/2024/09/14/大二学年成绩感想/index.html","ddc4f3dd77234449a429c99ccc0050ca"],["/2024/09/15/Next8.2.0主题更新计划/index.html","2a986dd3ec5bf5199f3deb786e2abacd"],["/2024/09/18/文字的救赎/index.html","a81ddc7fc08abf1f52c4796f8530ea1e"],["/2024/09/19/心里话/index.html","7f3b990168ac9d22cb1daeb8f38de832"],["/2024/10/02/Mysql无法连接问题/index.html","1ca29092ac4599bd9aa822acb4f232c3"],["/2024/10/07/2024国庆假期总结/index.html","9788d116570e7ce75d62460f8eb852c0"],["/2024/10/07/ROS常用指令/index.html","0c2a62c22a517dfb2130764e099aad0a"],["/2024/10/22/Linux基础命令/index.html","71a88880fda88a4f6c16a7873eda8f43"],["/2024/11/05/十一月初总结/index.html","ae42f64f1fcbd8f71b1a632610dafeb8"],["/2024/11/18/2024十一月月中总结/index.html","9966f4b1cd59792ed26d1b7eafdc82d3"],["/2024/12/05/2024十二月月初总结/index.html","dd799007d997acdfa70f81c19a41d2b2"],["/2024/12/14/2024十二月中总结/index.html","45907a5c8aae382e5875bb46e07feec9"],["/2024/12/20/直面内心的反思/index.html","0399b9d3f48df693b0548a18405546fa"],["/2024/12/24/通信原理期末重点复习/index.html","eb315f681efe40716a8ac209f43a4f29"],["/2025/01/09/2025-1-9-大三上总结/index.html","8a03925cb40e98e7a4f4d1bbcf392f67"],["/2025/01/12/蓝桥杯C++刷题笔记/index.html","9a93110301d315142345ae1058edb66f"],["/about/index.html","9ef6007ef89635a78ad641c203c697b4"],["/archives/2024/01/index.html","3cdc45f6e866faa9b6bb62301e787f4d"],["/archives/2024/01/page/2/index.html","d93147e8bc6e0a724b5bda6c39bfef62"],["/archives/2024/02/index.html","14bec550e8432daa0749e08fefc75d16"],["/archives/2024/03/index.html","f8b2598e78475ef673f0d3e3d272d7e9"],["/archives/2024/04/index.html","f831164d89b9a1812d0e33d7fcebf2f8"],["/archives/2024/05/index.html","74108970bdfb6f5919495a1a0bc53fb5"],["/archives/2024/06/index.html","21119a221c0975c74e5d23fbbbea48d5"],["/archives/2024/07/index.html","968dfe30298789b28fb5d38734c06807"],["/archives/2024/09/index.html","9d8cb690c0b8f9cfc23a16dc7892aa57"],["/archives/2024/10/index.html","0619d18817cab8f7156c6495651adf3b"],["/archives/2024/11/index.html","3e62422bd5572c69fe319e79bdc9b335"],["/archives/2024/12/index.html","a45d3eafb801ddf562f1c46f07bb8f93"],["/archives/2024/index.html","087c90019e0de2b85d4e941742735b87"],["/archives/2024/page/2/index.html","12fae915b7cfec686497f1629261f3ac"],["/archives/2024/page/3/index.html","ab91599fec97e200c9f320235357665c"],["/archives/2024/page/4/index.html","85d24fd31e580bfa6b96da6c4e1676c1"],["/archives/2024/page/5/index.html","b4e9b674172dbb1b0686c5e20f626ce5"],["/archives/2025/01/index.html","ac0d436a38f7d8fc2bfe212967a4afd1"],["/archives/2025/index.html","ba89769cea82bef5573cf241d510c56b"],["/archives/index.html","170777ac9ee00db40abd006f85af0ce2"],["/archives/page/2/index.html","957019f04acf63b7ecfca98ea0072c24"],["/archives/page/3/index.html","e6ce0f11c5eabc5223c4ac6e98dba197"],["/archives/page/4/index.html","5f71453e0678eb1739fae7fc13ade1d7"],["/archives/page/5/index.html","79460fb1ae52ec13d7c9e874e8976aa5"],["/categories/Plan/index.html","548ab197aee925912247a8fe4c4a025a"],["/categories/Problem/index.html","b9a361fc1d381c5e78c9146eb0b60501"],["/categories/index.html","2f35296ca102be199989c676c59b7912"],["/categories/人生感悟/index.html","3e711f815e4d2333faf5a4fcb1892d26"],["/categories/人生感悟/page/2/index.html","75a7525ff47d9177ca95b197857b402f"],["/categories/人生感悟/page/3/index.html","d29f82c8b26e9f7db9dddb3c2b59f106"],["/categories/喜欢的文字/index.html","10d6a205f19650797f0bc03f9fc044cb"],["/categories/游戏/index.html","853a229ec448062f6a4043e12bdb2a68"],["/categories/编程学习/index.html","ea615f546a9dd9f00c555ce7a821e082"],["/categories/编程学习/page/2/index.html","8009220ecc0be64a86426c0be4c20cd9"],["/categories/通信原理/index.html","82823dcb34fe6f0e18597de7d3e223db"],["/categories/面对失败/index.html","705d4749975b79debf6851a639c40511"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","36cb5adf51a1b5aeb48d08b7d71ee5b8"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","ea97cad491fd6db725d270c3135dc17e"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/exif.js","9c486db86e7ceeb1ec2c0f36518f5603"],["/lib/fireworks.js","e7e4d9972a4c7ada5122077088b970be"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","259b9364b04a13ef4f021a03e7326010"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/page/2/index.html","64ae33a18186b6eec31623ef58de30db"],["/page/3/index.html","cb2d0ee9eb9b1b7f0c2a9c380f56b23c"],["/page/4/index.html","2228dedb5f449ed8041f473b46bfa664"],["/page/5/index.html","6b462a3e1a5913f28df4cb666f4096b5"],["/resources/index.html","abb638852bc52a3ccccc7efc4e2a72cc"],["/sw-register.js","354b7b4b7b26cb85ee5930b090abefae"],["/tags/C/index.html","516b26efa5a67bbc54ad6d1dbac374ed"],["/tags/HTML/index.html","390283c5e5058b5008e4c4769645940a"],["/tags/Linux/index.html","9ef13d13702c3992d35741a5ab0b8e9d"],["/tags/MySQL/index.html","e2046f3994464fb24525204009cf5a17"],["/tags/Python/index.html","352b7cacd0dfc0d68871b96cf2ddc293"],["/tags/index.html","5b3ae6586cbe51830744a5ec4d2bac0a"],["/tags/励志/index.html","3a62d0b1d8e083425628658ada4a9e4b"],["/tags/博客问题/index.html","cfac919dfd1eba08fe8de70bdd206f55"],["/tags/实况足球/index.html","51bbbaf90ad09d153cf266713d92d3d4"],["/tags/总结/index.html","86c7c5759e0cfe599ba2efa4779ef430"],["/tags/总结/page/2/index.html","ee16a6dc1e481a13123b4dc87e198e55"],["/tags/数据结构/index.html","bffb2033560f0453fc1a88b745865099"],["/tags/炉石传说/index.html","49df6e1276306fda902e23678c250a39"],["/tags/竞赛/index.html","10c758645a04b0fefa767eff4033c6f5"],["/tags/考试复习/index.html","8c980958b44ff4de27a0157f1e8feb1a"],["/tags/随笔/index.html","11e340c71bd413e1fa641be4806b42b3"],["/tags/随笔/page/2/index.html","0f862d9dc9bf84975bb14a95c1e4414e"]];
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
