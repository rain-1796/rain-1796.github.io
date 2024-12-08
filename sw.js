/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","dbab67967550cc955d4bd091c1159b3c"],["/2024/01/06/大二上期末感想/index.html","babf434e198331a20fb8e2df3e296266"],["/2024/01/09/大二上总结/index.html","3953283205bb8dd046e79e9ff5e9284b"],["/2024/01/12/大学物理下不理想成绩的反思/index.html","c8558f5a612acd552a9a760b93857f86"],["/2024/01/12/数据结构期末复习/index.html","a3e373ded83b31d6ac9c638c0a4ead53"],["/2024/01/16/红龙贼/index.html","b82427f58b664186d3689bf660a6056f"],["/2024/01/17/博客上传的问题得以解决/index.html","d324a2712f027d990ec38529c74be3db"],["/2024/01/18/git-clone问题/index.html","44dc30227de7d569a6133d72de026110"],["/2024/01/21/1-20总结/index.html","d4fa46de6a9fbb47c40fae3f3267c01b"],["/2024/01/23/C++map新知/index.html","72798f3dd45ae2bd1ddb426f2ac5184a"],["/2024/01/28/HTML笔记/index.html","769fe42bc745193d502ff0c0448cb0b9"],["/2024/02/01/科三挂了的感想/index.html","a681161f55c653f3edceb3e9a3db2b6b"],["/2024/02/23/大二下开学前的总结与展望/index.html","3cb4f4ea1dfdffbc9411e315e9a55454"],["/2024/03/26/MySQL学习笔记/index.html","4ad485060820ca317b12e00144d7e2bd"],["/2024/03/29/MySQL——34道查询练习题/index.html","67ad89f87d09edb081f405291745f544"],["/2024/04/02/大二下开学一个月后的总结/index.html","aa8886ed57a6bb908b54dee9abc6c8a6"],["/2024/04/07/前三学期的绩点感想/index.html","6d98e92f25ee097e3c7dd3bbcaed7b58"],["/2024/04/27/数据库实验——数据导入遇到的一系列问题/index.html","6c7b0101b50171168649318de2ad224d"],["/2024/05/06/大二下四月总结/index.html","70395b7ce726ac5cee4b112a2abc5dee"],["/2024/05/28/C sharp/index.html","f46bd66b5e89a2762e38f0edd52af808"],["/2024/05/30/数据库课设报告（图书管理系统）/index.html","92e07da411c972c234719c2c09aec51b"],["/2024/05/31/大二下五月总结/index.html","bdda94cfc5a820f00b11dfbed1e9254f"],["/2024/06/19/大二下六月中总结/index.html","3f37e03747222d024b05deefc4d9a14d"],["/2024/07/11/法国被淘汰后的足球感想/index.html","342043e1381a77b502bfac2bea4e6385"],["/2024/07/13/大二下学期总结/index.html","c684094767bd3ee23bffff5e8fc4890d"],["/2024/07/14/实况足球感想/index.html","6dc6b82c720d33732463509e8e437b4f"],["/2024/07/21/Python学习笔记/index.html","8ab5a8eceb4cbd51b27acbc4babbc97d"],["/2024/09/05/大三上开学感想/index.html","347b3d7c3fbbe78696f5eecabe449cb7"],["/2024/09/14/大二学年成绩感想/index.html","366f1388a8d9a1da6cf5f5b6691af68b"],["/2024/09/15/Next8.2.0主题更新计划/index.html","6776ee70e9b6f359fc05030f4b2919a7"],["/2024/09/18/文字的救赎/index.html","f5e6826c804fa6debba85f840ed9ec47"],["/2024/09/19/心里话/index.html","208467c254351e0205779200a3a950b2"],["/2024/10/02/Mysql无法连接问题/index.html","0a09f824843f184e7db7d671f6fec566"],["/2024/10/07/2024国庆假期总结/index.html","b8a97b52d42747acc4c920808daa207d"],["/2024/10/07/ROS常用指令/index.html","b29d2ecbcdf5a169910a0df953c21c7f"],["/2024/10/22/Linux基础命令/index.html","7ac0d96f0f7b5598e296f66e1e10dc2f"],["/2024/11/05/十一月初总结/index.html","5fe3c762e6112810c149570fea437c06"],["/2024/11/18/2024十一月月中总结/index.html","5644413e7bf8a3cc440cb1c489e47913"],["/2024/12/05/2024十二月月初总结/index.html","f9aa0df93fa7a213ea3479d20a4b7dc4"],["/about/index.html","b414f4406aea44b8a3cb3cfcd3f4f6ad"],["/archives/2024/01/index.html","8591cd646ea6cbeb62b300f687b6cd10"],["/archives/2024/01/page/2/index.html","9aa13b1e7bd9c43ab08496f70b46e379"],["/archives/2024/02/index.html","bf3f7c985cc3d37737d7ab73716d76e5"],["/archives/2024/03/index.html","927a87fbb3391b0bc3fad081d8067c53"],["/archives/2024/04/index.html","867a950ae3334a8744095e59435b3b18"],["/archives/2024/05/index.html","85255a74e0ba53c1ba9a91eed9cd166b"],["/archives/2024/06/index.html","10c58894d876dc10fac4a4db83a6b35c"],["/archives/2024/07/index.html","3cc952eb0f0093dfaeae1deabfb0edec"],["/archives/2024/09/index.html","a31a09a9fc3ea6ad477f80d8c532e78a"],["/archives/2024/10/index.html","b9f8b4aa6f108cda8002c7a8ffd828f8"],["/archives/2024/11/index.html","04bf120026d491e7d7d02158825f775f"],["/archives/2024/12/index.html","b556466a9110d98fdd513ab8f0472aca"],["/archives/2024/index.html","baef25d5d2353daba19eac73ad2993e4"],["/archives/2024/page/2/index.html","376f446e21cb201d15d36ac6fec58597"],["/archives/2024/page/3/index.html","3799b16a634bdd1b9d83e1e5b95c595a"],["/archives/2024/page/4/index.html","9f83c56832c7eb2adfd006ea62ebb805"],["/archives/index.html","4f8afe8f9a41af7f11c59bb5f60253b4"],["/archives/page/2/index.html","721612c8e133bcdd7e9251258707f453"],["/archives/page/3/index.html","781ca1c89dab34f12c9a91826b0476d3"],["/archives/page/4/index.html","6cfba95037fc203afdd1f4be57d616bb"],["/categories/Plan/index.html","f1239ae5fbf04cd77024ba799f205f1d"],["/categories/Problem/index.html","7cbfba79c7ea77ae22bcc5579aff7fae"],["/categories/index.html","a5746f0d1cd8a9508dd4de5579217af2"],["/categories/人生感悟/index.html","a706b4ccaece35db759fdedfb0813479"],["/categories/人生感悟/page/2/index.html","08667591c68aa24c28db39d6e3123f89"],["/categories/喜欢的文字/index.html","3e8d61d326f7fb3cdaa39eb1d265a11b"],["/categories/游戏/index.html","c6ddfb3974afbdafb03459de0b15861a"],["/categories/编程学习/index.html","0986fe4d44498036e612990a04a33e0e"],["/categories/编程学习/page/2/index.html","feadbdd024c855b07d8dca93bc029858"],["/categories/面对失败/index.html","1b1a9f80456c69ddda17b788e4e14e9c"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","4ac28cd3f9860191cdbc559eb64d03a9"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","0166717c4c470a122e437eff1cd5829b"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/fireworks.js","921767fcb974670cc585a848f5f63172"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-ribbon/README.html","768f67e1911494c58fc32d022642e480"],["/lib/canvas-ribbon/canvas-ribbon.js","952c131e3099dbf7aad0c350355fea0a"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","3f3db6f29ae85af26ecb796004e8c7b6"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","162964d0314dbe46a4b67e57136abab0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["/page/2/index.html","9cb9660ac0fbeeaed3e9c6eb839677d9"],["/page/3/index.html","00eed1b845977c90fc35a9cb6a28c630"],["/page/4/index.html","6ac8df0d53b0c11ff0a42c02cf4789f6"],["/resources/index.html","ef70b96846e7582639730b571343753f"],["/sw-register.js","f4f7a04f437f7182346b265abf7cc648"],["/tags/C/index.html","afa5d82dabe30ab5e15b935e5ce23d4e"],["/tags/HTML/index.html","e84c7920fd2be707f3a20eeb18d84f28"],["/tags/Linux/index.html","e32ea9ed9255fa6444141d742e8840d7"],["/tags/MySQL/index.html","f9b9c63c17c2600cabbd947fd24367f0"],["/tags/Python/index.html","097baf53e7ab36a8418605f0d09fd664"],["/tags/index.html","f0c079c1103d23d436d6a11403c3997b"],["/tags/励志/index.html","dbb658b51bd5e5d5c6e07ed443bff108"],["/tags/博客问题/index.html","a745ad9a931b494bd5e80770f043aa41"],["/tags/实况足球/index.html","289de96978d361a503be466dde3d2199"],["/tags/总结/index.html","e9b77babcd9267f7eede2bcf6bd5292a"],["/tags/总结/page/2/index.html","a7e4359b69956a69f9940605510eb1de"],["/tags/数据结构/index.html","f3662216fb16c0eceaa02780952bda62"],["/tags/炉石传说/index.html","164eef11a101085e51661c2403e86e70"],["/tags/随笔/index.html","d40d3d3ce5c44d948131c89d30b06219"]];
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
