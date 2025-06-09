/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","cff6bd09a7f70bcdfc22ba33dbc0aa39"],["/2024/01/06/阶段性总结/大二上期末感想/index.html","0cf5c9dd955a71720086a48fb036b95d"],["/2024/01/09/阶段性总结/大二上总结/index.html","45428c4a2763639c9f8697b264f61655"],["/2024/01/12/学习笔记/数据结构期末复习/index.html","a6e1f1c8a22c8b211c4af39a121d4f9b"],["/2024/01/12/感悟与展望/大学物理下不理想成绩的反思/index.html","0aac9bb2154a65e109c265d2edfc0593"],["/2024/01/17/遇到的bug/博客上传的问题得以解决/index.html","85d07c6266a267420d97c229f5abd95e"],["/2024/01/18/遇到的bug/git-clone问题/index.html","ee1eec2311de0d4a13efc0e6bd5757bd"],["/2024/01/21/阶段性总结/1-20总结/index.html","0040d385e1298c8eab66471e8149bf0c"],["/2024/01/23/学习笔记/C++map新知/index.html","895757b880329d1feb97cab5f6234069"],["/2024/02/01/感悟与展望/科三挂了的感想/index.html","2f85b2a5b1de302c740319ef2d6a55a0"],["/2024/02/23/阶段性总结/大二下开学前的总结与展望/index.html","afe92db9bc5b819dae4dd47087a53f99"],["/2024/03/26/学习笔记/MySQL学习笔记/index.html","3615b7a5a542eb87e546b597e91649c3"],["/2024/03/29/学习笔记/MySQL——34道查询练习题/index.html","acb57f5c5bf9238fe98a7a6c8d85be53"],["/2024/04/02/阶段性总结/大二下开学一个月后的总结/index.html","21e935baa00566c6cf688318cc97e436"],["/2024/04/07/阶段性总结/前三学期的绩点感想/index.html","0a39df1c1ee3423b927d7287807eda29"],["/2024/04/27/遇到的bug/数据库实验——数据导入遇到的一系列问题/index.html","85ad5e28e6dc0ab3b247a2485d6955dc"],["/2024/05/06/阶段性总结/大二下四月总结/index.html","0745d5b20885addab95c50e6c461319c"],["/2024/05/28/学习笔记/C sharp/index.html","032487270ca505dad711cba6ed95c62a"],["/2024/05/31/阶段性总结/大二下五月总结/index.html","d019830bd1305da51e5233ad7e889263"],["/2024/06/19/阶段性总结/大二下六月中总结/index.html","4e553554c3a073e8d03b123b9c521faf"],["/2024/07/11/感悟与展望/法国被淘汰后的足球感想/index.html","71c787a1506b42c33b3f4d342f11ff5c"],["/2024/07/13/阶段性总结/大二下学期总结/index.html","2f3a58c50dea13620de772f3e968054c"],["/2024/09/05/阶段性总结/大三上开学感想/index.html","072a128616fa75a6fddb9e0ac5d7188a"],["/2024/09/14/阶段性总结/大二学年成绩感想/index.html","10ed553cb727de87316be9e11b8c1243"],["/2024/09/15/Next8.2.0主题更新计划/index.html","6d61b0d80c94426ff02e6950d43cfcf9"],["/2024/09/18/鸡汤文字/文字的救赎/index.html","2b2c0e35825a295d5c043e70a0140970"],["/2024/09/19/感悟与展望/心里话/index.html","a98efbd286000f7fec40393fcc1d0a50"],["/2024/10/02/遇到的bug/Mysql无法连接问题/index.html","5d6cb5695701c1850bed0795ddffdc48"],["/2024/10/07/学习笔记/ROS常用指令/index.html","de9109d723a308079891bda00ca4080a"],["/2024/10/07/阶段性总结/2024国庆假期总结/index.html","a8281673eac0d88372f88f4b30e95da3"],["/2024/11/05/阶段性总结/十一月初总结/index.html","dc45078ab9c563b3fd24955e0752086f"],["/2024/11/18/阶段性总结/2024十一月月中总结/index.html","988fccc4b6223a59bd343c872bf07d9a"],["/2024/12/05/阶段性总结/2024十二月月初总结/index.html","2f2f0167f948c64db2c0c7453c906b2a"],["/2024/12/14/阶段性总结/2024十二月中总结/index.html","60f16f21bae1d243a1b2235232082453"],["/2024/12/20/感悟与展望/直面内心的反思/index.html","4c88ff60a450982ea8b22664393bbfb1"],["/2024/12/24/学习笔记/通信原理期末重点复习/index.html","9a87fc3030da0b6685023108e8333495"],["/2025/01/09/阶段性总结/2025-1-9-大三上总结/index.html","2bb6410cd63ea65d748188ea71bd1586"],["/2025/01/12/学习笔记/蓝桥杯C++刷题笔记/index.html","03171fad874d09d1b759a16748b29fff"],["/2025/02/24/阶段性总结/大三下整体规划/index.html","83d79a35cfb6cce85d8c3f9f3e77a59e"],["/2025/04/08/感悟与展望/对于恐惧的思考/index.html","4f0d6e66a68c7bdb1b841a4c302a48ef"],["/2025/04/12/感悟与展望/蓝桥杯参赛有感/index.html","cb6ec0ff4129861d3fdad659e7acc535"],["/2025/04/15/感悟与展望/身体健康最重要/index.html","f5ff33513585495d7af784229e5fa366"],["/2025/05/13/感悟与展望/大三下的迷茫时刻/index.html","7c6e6db8e4abf9b48adc14aaee1580cd"],["/about/index.html","0b46ad6ffe3191b24bf0f3c63ae81d24"],["/archives/2024/01/index.html","0149aa382a58498faa08dc40a0156855"],["/archives/2024/02/index.html","a7c9df8bb9e478b4023985a307d62c8a"],["/archives/2024/03/index.html","84b0bc358cb3ee81682a6c897fe24d91"],["/archives/2024/04/index.html","34eaea7aee2590e10e8875167a0c6052"],["/archives/2024/05/index.html","6e5588e88f2066f56875a360290a47a6"],["/archives/2024/06/index.html","78062174f1d9e6c3ca70048179de2b6e"],["/archives/2024/07/index.html","9105c2b2c80e66971fbc48f81e070af2"],["/archives/2024/09/index.html","6f78937370d9600cb1073458e464bfef"],["/archives/2024/10/index.html","0d5e68ccd71cc650cc9e8ea09ea75724"],["/archives/2024/11/index.html","48c6615c83db0b200a5713fa9abfc732"],["/archives/2024/12/index.html","cb4fa33d8e59bfed0bdbb3dfc085fdb7"],["/archives/2024/index.html","5e9867bda88cb7dd6897037583e3d734"],["/archives/2024/page/2/index.html","faa3a4b3a97749f974927ac6f2ec0a0e"],["/archives/2024/page/3/index.html","cdb43658e06433ff654249bc239d939f"],["/archives/2024/page/4/index.html","434d524293ffc311a81f425ab3f2a7b0"],["/archives/2025/01/index.html","f213f764a4d76f458d40b1ef2caa7a47"],["/archives/2025/02/index.html","77acfbd9a724011ce775be576a2ebbf6"],["/archives/2025/04/index.html","bda9978d2a300f0387084ee3b108a241"],["/archives/2025/05/index.html","f56ddbcbacf18c7806e84d98e7a0737c"],["/archives/2025/index.html","e4f1096a66af86418bad2aa81a83220b"],["/archives/index.html","bf9281c69191ac501cfade7b35c8a4dc"],["/archives/page/2/index.html","cb17930c22bbc7968bfe14c055fd4ede"],["/archives/page/3/index.html","5731ac24de5d808b306c5df734ff9554"],["/archives/page/4/index.html","cf1d62fbe1e662b22a82219177d0be99"],["/archives/page/5/index.html","bf88a5ea59c4717170b0d03c1ff095cf"],["/categories/Plan/index.html","8ae555be1bac4874399546da836c022c"],["/categories/Problem/index.html","a8e32936fbcf0879be2f6fc7d06d399a"],["/categories/index.html","71df2708842433e4e8d032b31abc6005"],["/categories/人生感悟/index.html","94fe995bfda95c508ccd0d2e327070f3"],["/categories/人生感悟/page/2/index.html","3f4bc583fe9e3dac8b3fb198ab68fc1c"],["/categories/人生感悟/page/3/index.html","c9f933a37adeffec183d10e410dc4673"],["/categories/喜欢的文字/index.html","ade3a21ee875efd488a3b5d281dede23"],["/categories/编程学习/index.html","6ce5c69863e5a70321dbdb523b298a2b"],["/categories/通信原理/index.html","60e9577a2c8e9f3f7d20c427c36427b4"],["/categories/面对失败/index.html","9ec079cb50c56a97a3e5ffca100b1aa5"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","6b89c4515c72fd74f3ad4f1273a8c42c"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","3cfdbce007da754d5f5c675068eaf654"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","5415a1d5779570d906c50ebbf22e2065"],["/js/third-party/search/local-search.js","62bc47c146380a09dc4cb3508203a9ca"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","d17a4c3b8054634ac732e135175afde0"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/exif.js","9c486db86e7ceeb1ec2c0f36518f5603"],["/lib/fireworks.js","e7e4d9972a4c7ada5122077088b970be"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","c88151e21599c4512d4a3f5eb43221d0"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/page/2/index.html","c09714f48c4396dd883217d7379f89f4"],["/page/3/index.html","6b9b8c6536d87193bcf323a92496aecb"],["/page/4/index.html","dd16f9bb23580afbde5422066814d0d2"],["/page/5/index.html","932c7984159fc69a649b22aa955dc61d"],["/resources/index.html","f942eb81e7c8d009016db42a889def69"],["/sw-register.js","e120dcc8dbb3a3394b6e75cfe955e2c0"],["/tags/C/index.html","4fc029e42f9418518f546c17b7e7eaf7"],["/tags/Linux/index.html","2cf143853ed9e8cb6488668deaf0dc84"],["/tags/MySQL/index.html","69b56828679e9ffc46d2694ca6409f18"],["/tags/index.html","8b3004d5143e8ea0d4646b81eac9c96a"],["/tags/励志/index.html","2543c7f99a64071686488e5c7e8b8e48"],["/tags/博客问题/index.html","75c3cf274c8b0739c7d713a203307d4d"],["/tags/总结/index.html","ca3a25c8caf6068ba44f7b6efe709f0b"],["/tags/总结/page/2/index.html","62cea9bcfae381edaa48e723d522540c"],["/tags/数据结构/index.html","f43d303a550a5a13dd6f5af9b7b37ab2"],["/tags/竞赛/index.html","cd6f562a749363836c5e5e4c420fd5d5"],["/tags/考试复习/index.html","35e541c9672b1fafc09c780d3611d5aa"],["/tags/规划/index.html","7988dbb9ab7e2e003f50f9ab67f06940"],["/tags/随笔/index.html","0e976b637e082ef9f8e4cd7dc2d400ba"],["/tags/随笔/page/2/index.html","5ef5649d194d25c8dda9ba0b9ac67071"]];
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
