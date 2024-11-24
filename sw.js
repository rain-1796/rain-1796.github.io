/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","de4f162a7d09c150d92778116a11a095"],["/2024/01/06/大二上期末感想/index.html","ca4c267df1ec304ad1fe1064959d219e"],["/2024/01/09/大二上总结/index.html","f3d502a2cf2ef844be7cd17fa6f52a4a"],["/2024/01/12/大学物理下不理想成绩的反思/index.html","d014210b7c2fcc966e208b2e7aeaf9e8"],["/2024/01/12/数据结构期末复习/index.html","aae0c9911014f39bcb679865bef4bc93"],["/2024/01/16/红龙贼/index.html","c493a61f0d59a21b7334e59a197e0571"],["/2024/01/17/博客上传的问题得以解决/index.html","c11f04bf9be979e656f3b63281689548"],["/2024/01/18/git-clone问题/index.html","9726034aa7657bbddf5288ef2a3a6032"],["/2024/01/21/1-20总结/index.html","d94a4046ea9478f0835543e4587bddef"],["/2024/01/23/C++map新知/index.html","6a8d916fae906d95599ca11e472248be"],["/2024/01/28/HTML笔记/index.html","26931c41ca4b0260ca4239585c6f64bc"],["/2024/02/01/科三挂了的感想/index.html","c15e65e28bdacf72262ffbddd0594590"],["/2024/02/23/大二下开学前的总结与展望/index.html","30e49be8f0546dbc3ffbb77e9accbc56"],["/2024/03/26/MySQL学习笔记/index.html","220b8a081821360542edff831521639c"],["/2024/03/29/MySQL——34道查询练习题/index.html","46d1a45c131fd53e9780fd65e8f6e11a"],["/2024/04/02/大二下开学一个月后的总结/index.html","a5dff523c443b133a9a4e3bcfdd599e6"],["/2024/04/07/前三学期的绩点感想/index.html","554b33070cdd3903df38393635bfaff2"],["/2024/04/27/数据库实验——数据导入遇到的一系列问题/index.html","8150aea3aece91d6e4e5f40755ba9f0a"],["/2024/05/06/大二下四月总结/index.html","726c826628eaf1b24260c3bae585417f"],["/2024/05/28/C sharp/index.html","19ef6f285ae1063a5ef3fe4502117743"],["/2024/05/30/数据库课设报告（图书管理系统）/index.html","c07809f207d4696f0aa3cae633520b18"],["/2024/05/31/大二下五月总结/index.html","33aa0af20b506907f5b34d635730b2a3"],["/2024/06/19/大二下六月中总结/index.html","4f660ffac236dca034853cbb12bb3c45"],["/2024/07/11/法国被淘汰后的足球感想/index.html","0e6d2b0cb8c9eb2de93f65088d8da691"],["/2024/07/13/大二下学期总结/index.html","8ae937026009b489d44d8639b95a4c96"],["/2024/07/14/实况足球感想/index.html","b721934bd5631e5ea841f2d0776649a1"],["/2024/07/21/Python学习笔记/index.html","f9cd843e1fd7a9cdc768d8f2a1cdecbc"],["/2024/09/05/大三上开学感想/index.html","ec4abc7cae6d74e99c8e8e97f2c02cc6"],["/2024/09/14/大二学年成绩感想/index.html","8dc7a50e6bc198c4b478ad654ee35a1a"],["/2024/09/15/Next8.2.0主题更新计划/index.html","fe73bd189f2383a7fbd268cc1e26aa1c"],["/2024/09/18/文字的救赎/index.html","699e260a4debf08448b5949e7c3375e3"],["/2024/09/19/心里话/index.html","2c950ae38b9b8a6c19104061591dd1a6"],["/2024/10/02/Mysql无法连接问题/index.html","2a158b9d82d8ed45f95f449d76517a9d"],["/2024/10/07/2024国庆假期总结/index.html","24c98e1b5bda92e5a4d49c3f4497e14b"],["/2024/10/07/ROS常用指令/index.html","f2129bdc800f84ec009a331af66bebb6"],["/2024/10/22/Linux基础命令/index.html","3a09d90bd07e97ffc7d34e330f58f48a"],["/2024/11/05/十一月初总结/index.html","eb3aa473575c7e730c1166ae6b4806fb"],["/2024/11/18/2024十一月月中总结/index.html","c60fe5bc892615f81abdffbcb5de3ffa"],["/about/index.html","93ee4fdf7fdf677e5c560d32e1fe8286"],["/archives/2024/01/index.html","823d5eaf6e711244a96c7b3989e93ffa"],["/archives/2024/01/page/2/index.html","bdae4574382d250a145cef7b3a8d6022"],["/archives/2024/02/index.html","99cabc4b13da097896663b80b0d0fb8e"],["/archives/2024/03/index.html","d013009ef085cf331b6c5b3dfcb45a9d"],["/archives/2024/04/index.html","0180c4df789acd6e6f78dca45ed7b997"],["/archives/2024/05/index.html","f76b7d9f811a667f02fec364bb91d14b"],["/archives/2024/06/index.html","20b59c950da42b62079018ccb6b7870b"],["/archives/2024/07/index.html","4ab58387d9f8f8c842452df95b58bfed"],["/archives/2024/09/index.html","c4db6cc17d7052336eae2b3088b765ca"],["/archives/2024/10/index.html","cfae7c765ca005137524aa176c432840"],["/archives/2024/11/index.html","35937d7d649154abaf5902457136ba45"],["/archives/2024/index.html","cda2162abb93565304b071ec923eb864"],["/archives/2024/page/2/index.html","ee199f47e1b16958dd5f0245ee58a939"],["/archives/2024/page/3/index.html","34f390da1d1b4f8cf84f3dcb2bdf1678"],["/archives/2024/page/4/index.html","18c9b4cbd1c4e10e15b99227f61bcbf3"],["/archives/index.html","9f9cd48950f413c4214ff00cb8fb2da7"],["/archives/page/2/index.html","fe408d6c14aab217bf122a20da60c963"],["/archives/page/3/index.html","9509bee1280342508f265c1b78e8622c"],["/archives/page/4/index.html","e3c24b77bfea43371ce2b6f5e7168b0a"],["/categories/Plan/index.html","d26e14fffdc5088183d11817705e1323"],["/categories/Problem/index.html","50635f8d7f3161310cecdf352abaf642"],["/categories/index.html","0cde5451b6d0978c9cb756cb5af590b2"],["/categories/人生感悟/index.html","dadfc2497e39923509446dc29d18b031"],["/categories/人生感悟/page/2/index.html","3ad0face91ebe1b5e7357e70e8cd60d0"],["/categories/喜欢的文字/index.html","e08d0d6214be5e4c170ff52c74acf146"],["/categories/游戏/index.html","066ad8ec553778d82733c2b4797d898d"],["/categories/编程学习/index.html","7cb3bf9bd2342d8d4cbcb111c459ee80"],["/categories/编程学习/page/2/index.html","65410e8d68e3ed4b81dc3df0f6f3f79a"],["/categories/面对失败/index.html","da3d1f199f1749054f6903d3a8cfc2eb"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","6c3661e014b418e091d5fb2fc81eb6db"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","16bb762f08dc7fee909df95ae527c3d0"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/fireworks.js","921767fcb974670cc585a848f5f63172"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-ribbon/README.html","768f67e1911494c58fc32d022642e480"],["/lib/canvas-ribbon/canvas-ribbon.js","952c131e3099dbf7aad0c350355fea0a"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","5a38aef343c738b9eb47ee46eea06609"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","162964d0314dbe46a4b67e57136abab0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["/page/2/index.html","b1d5b663c496b679115b739cc3e76181"],["/page/3/index.html","e9e81c9ed6c46d2cd817f119816480fb"],["/page/4/index.html","3851019795dce053bcd36f9a28fdc7fb"],["/resources/index.html","75a50b893fb81a86117419dc00bac9da"],["/sw-register.js","8624e5b7caa2d6d56ba1185be8d0d919"],["/tags/C/index.html","0725b8ada42a53628f1e198b8b6c0685"],["/tags/HTML/index.html","b1c4ce6e1ded683db95880ba9d0a7941"],["/tags/Linux/index.html","89e98482297e1e53315340c6e42f6d9f"],["/tags/MySQL/index.html","0c7bacefd7e790d8eead6c00c5f320a5"],["/tags/Python/index.html","77898237bd46aee8888a66391d61b826"],["/tags/index.html","b2f9dd2ed677ab0419e840615ee9c311"],["/tags/励志/index.html","5af09618d49f7e459146e8fd08151439"],["/tags/博客问题/index.html","f470db6757fd4b8abd49ad83db963f15"],["/tags/实况足球/index.html","1050139204523d549e5794e3925096c2"],["/tags/总结/index.html","bd5066c74d6d2fb35f433af16766915d"],["/tags/总结/page/2/index.html","ece17621d54a4ecbc1f67f51c708912c"],["/tags/数据结构/index.html","94f14a94b00e60b82b698ca5c9b0f35e"],["/tags/炉石传说/index.html","362e43865d1fb6ac45417e1456855cf0"],["/tags/随笔/index.html","2f610811b5ea22fe17ab56757992fe5f"]];
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
