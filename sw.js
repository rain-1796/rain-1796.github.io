/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/04/村雨的第一篇博客/index.html","9b66abb289d3a86d75ba278b664f87d0"],["/2024/01/06/大二上期末感想/index.html","b4125e6318c1610f6de96740de8898ac"],["/2024/01/09/大二上总结/index.html","1f5376e10d1bed0f659503d7bd7e2cd6"],["/2024/01/12/大学物理下不理想成绩的反思/index.html","d8017af1bcd734e3bae867e00db7203d"],["/2024/01/12/数据结构期末复习/index.html","f72f6585d33971152469e84f837146b6"],["/2024/01/16/红龙贼/index.html","04154cda28fb525b6384c71af0ed7ab5"],["/2024/01/17/博客上传的问题得以解决/index.html","571be22dc98f568ea5b73fafc687b66a"],["/2024/01/18/git-clone问题/index.html","3141bc1d66f46f8dc5d69cf30f10c34c"],["/2024/01/21/1-20总结/index.html","73d6a5e3e19a12279cf6fba9d171a73e"],["/2024/01/23/C++map新知/index.html","bccedd6ee0399e332c53a5ac4e1c86ab"],["/2024/01/28/HTML笔记/index.html","b9ca7d146e63247af306a856c8918843"],["/2024/02/01/科三挂了的感想/index.html","cae41782ef1ebd787e47bcea1126ada8"],["/2024/02/23/大二下开学前的总结与展望/index.html","e810be37cf64837867adab7cd54f1c4d"],["/2024/03/26/MySQL学习笔记/index.html","c919d978586835fe16a76384d37c9432"],["/2024/03/29/MySQL——34道查询练习题/index.html","fa2d536bd1e1958b656157122d3cfc5c"],["/2024/04/02/大二下开学一个月后的总结/index.html","e88278f42e2db7be75e3e21bbecea089"],["/2024/04/07/前三学期的绩点感想/index.html","271641434509b54b80de4f79689a2307"],["/2024/04/27/数据库实验——数据导入遇到的一系列问题/index.html","f80d5b7cdbadb685a4f0884f5771c47a"],["/2024/05/06/大二下四月总结/index.html","37311a6995d755a0db280c06f337aae9"],["/2024/05/28/C sharp/index.html","e8b22db9129af243fb9569f3990e030b"],["/2024/05/30/数据库课设报告（图书管理系统）/index.html","b31ab29c1cd4e517fbde9f0b8a22ab9c"],["/2024/05/31/大二下五月总结/index.html","cf8731f18905d4c8913222357a45a82c"],["/2024/06/19/大二下六月中总结/index.html","6244f602553b890e2d41c65ce70eb1b3"],["/2024/07/11/法国被淘汰后的足球感想/index.html","269612deefa83dc523c6f3561c3fab8d"],["/2024/07/13/大二下学期总结/index.html","debbcf9b2760089cd9bdc4e78a807bb7"],["/2024/07/14/实况足球感想/index.html","6f67729a1a1878fdf20244f5126c0fd4"],["/2024/07/21/Python学习笔记/index.html","70885fb1047c07fa3a8f05e52fe0abea"],["/2024/09/05/大三上开学感想/index.html","05532ac893cdb4ef9ed31447ab189a7f"],["/2024/09/14/大二学年成绩感想/index.html","abe00578148f55156acbefe3ebb1a83d"],["/2024/09/15/Next8.2.0主题更新计划/index.html","5d4ba99d894dc8821876568bc009d34a"],["/2024/09/18/文字的救赎/index.html","354548017ac4868031a1e9149c2eb23a"],["/2024/09/19/心里话/index.html","41f09e5f36b9f449b343d4a9ca899b3e"],["/2024/10/02/Mysql无法连接问题/index.html","a3c6a4b7c92dd5e2173861484cac7ea2"],["/2024/10/07/2024国庆假期总结/index.html","f7130cc41774cd3523253201baa58c26"],["/2024/10/07/ROS常用指令/index.html","a4b7d3718fe9d7b23f713f51f313b664"],["/2024/10/22/Linux基础命令/index.html","2def4968c62d68105c87d910d73344d2"],["/2024/11/05/十一月初总结/index.html","84c6a6f10ce22a8b11383fa7e1d577f8"],["/about/index.html","24446a9121fbb540b8b96d3725db227d"],["/archives/2024/01/index.html","729c499fd0f21f29adde43c57be87ed3"],["/archives/2024/01/page/2/index.html","7bac8bf24c9ad5c82c6fbc141cdee944"],["/archives/2024/02/index.html","1e7223ec6131113ea7cca113a08c76d5"],["/archives/2024/03/index.html","4f0a8e946691418bf89fb8d08a26f43c"],["/archives/2024/04/index.html","92a5bc148ae43a0895e188f385fecee5"],["/archives/2024/05/index.html","0e10453fc8f3464893959370d9ab1c62"],["/archives/2024/06/index.html","aa47fbf26508fb5c0550207d2482657a"],["/archives/2024/07/index.html","80fbf94111e293d0c814e144894605f1"],["/archives/2024/09/index.html","e60516ac001ac92596f8b75c97fff0fe"],["/archives/2024/10/index.html","4b8900171cee13bf740349522d8a57e8"],["/archives/2024/11/index.html","c3d7c445b6164bad3a985f47b4aa4d1e"],["/archives/2024/index.html","4222ac8313f9ad0ab915d422090c9f43"],["/archives/2024/page/2/index.html","b1cb22ea96202617e2a5aa74f587a27e"],["/archives/2024/page/3/index.html","b89319edf5c56cf4c2fdc54930f7de31"],["/archives/2024/page/4/index.html","67f517b9ce8069215ea6aa98f2b75ab5"],["/archives/index.html","9b7fb82a0ba77c3a706b77523cc550f3"],["/archives/page/2/index.html","a47faa0227657941a695fa071c2f85c4"],["/archives/page/3/index.html","780bd2045f41b2a82f0eec4775c9b63f"],["/archives/page/4/index.html","7dc524bb0330a9797c3c3e62636bc693"],["/categories/Plan/index.html","e1c3c5d06eb386a62255f77b236f33d8"],["/categories/Problem/index.html","9f19a3887169eca701a45f153ee7a928"],["/categories/index.html","955674569b0d2c7861717fb5dda6476e"],["/categories/人生感悟/index.html","3a9982aeecfd08b453bea9992a63ce2b"],["/categories/人生感悟/page/2/index.html","aed0eaec704fef46bba960e983226ab3"],["/categories/喜欢的文字/index.html","6f72ae28c9b020b5ce279f412937560e"],["/categories/游戏/index.html","4afbf96c9ccd09634a21ae84e1f298ee"],["/categories/编程学习/index.html","456ebc3f73bf4485e030cafd25660eec"],["/categories/编程学习/page/2/index.html","85f1b930f056ba8b4c5fbeb4de9f458d"],["/categories/面对失败/index.html","700904aa976474037de54b118cecf54d"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","a8306456e33f8c3b559b5cd66ceaeffd"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","e471fad604b3b5760e31bbaa8d4cb21b"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/web_icon.jpg","38ade1251505902c93055c8ee9627e97"],["/index.html","1086b469409f89fccb0c2b9c95d03243"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/fireworks.js","921767fcb974670cc585a848f5f63172"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-ribbon/README.html","768f67e1911494c58fc32d022642e480"],["/lib/canvas-ribbon/canvas-ribbon.js","952c131e3099dbf7aad0c350355fea0a"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pace/README.html","ae55927fbcb6596020b6958c77b02b83"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","162964d0314dbe46a4b67e57136abab0"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/three/README.html","9d54acb645e4146441c9530a56762d3b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["/page/2/index.html","01dbc8dd82d31d14b631ddec0e2972be"],["/page/3/index.html","817d7a0fc5905835aa0d195e9b1beed8"],["/page/4/index.html","8890d71c26b08474c8669ac031564786"],["/resources/index.html","0d05af6f3caaacbc1518c18cd70f9923"],["/sw-register.js","f2c273f1c63349735471dd733564099b"],["/tags/C/index.html","09d8615c7a1303b8491775df90a918fe"],["/tags/HTML/index.html","8e35424015d971b3b6cb726b8fdd2310"],["/tags/Linux/index.html","d01bb4a23632ad5e4bfadb2d7ef6914f"],["/tags/MySQL/index.html","b812e4d7d4ce0a4f3d144687ca697608"],["/tags/Python/index.html","d4f4080b4fb4a6f01d884bba1aa5cc6b"],["/tags/index.html","0dafa5045b4436d82e510c6a7bd59d81"],["/tags/励志/index.html","c80553e3dabd9084e3a3ead534126792"],["/tags/博客问题/index.html","029de64bc104f67460bad3d9fcf7df50"],["/tags/实况足球/index.html","001458f9984cf92cb2acbcea3b95a86b"],["/tags/总结/index.html","66bcd178acc2f8f5bf0dc81e3d13b5d3"],["/tags/总结/page/2/index.html","4df6382ea7188f80bc04141dd9c01d5e"],["/tags/数据结构/index.html","657e051e1151ffdfeda11138c0b67367"],["/tags/炉石传说/index.html","aa40101429f20884a1e505fc10f0fb32"],["/tags/随笔/index.html","3a8054ca6ca7065602b265bc4a06e06c"]];
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
