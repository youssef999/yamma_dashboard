'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "027e95a1b18b627b3ae93c258105be83",
"version.json": "cd1b6044ea702d06effec217f72823a8",
"index.html": "affd5828d7a48638827f6a84dcc7b47f",
"/": "affd5828d7a48638827f6a84dcc7b47f",
"main.dart.js": "08153ecd2ed85ff6e579b636ac04ec69",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "db5404c67669f195a6b73b7bcfc020d7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8327dcbf48af6875876ee3f4e6a500f1",
".git/config": "50dcccbda9ac1c9d47165ef8c57f240a",
".git/objects/95/9385c9ef203f7957792cfb0d666f4c981c345c": "dca64bb6390a6dddcc1c57f20204efa9",
".git/objects/57/28ed9b1eafd554afe3fdf6ce41700a5a24f9b8": "9279e2e551e5a93e2bd78c0faa06a175",
".git/objects/57/20db482eb667e2ce754c8889b559051047aab6": "85c7572d11e0043286b04aa4950e539e",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/33/4c68fcf0fb9fe8c767d02782ff346c60a268a7": "2e9427a322a126d19a48f56f337439ef",
".git/objects/05/b8fc9bbc36bfee4a180c357aedadc9f59ed9f2": "101c9afc39b4162677de1480b5c3e24e",
".git/objects/9c/05c750260bbb7c24306183efe316df7b5eae9d": "a55dd2f7f453b467d95ba8c0b59e91ba",
".git/objects/b5/35b112e7fed543a2c18af161505f7f2d1dd3ad": "39ab1663ffb129111d4c282864b8b115",
".git/objects/d9/4f80b9ce842a162e729a04aaf2276ebe735c38": "9fd9eb5832cda51745769078b58b4706",
".git/objects/d9/301bd54cef5336710c6c322d3424af7d052d62": "a5724601463332ff45b65c927edec266",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/95a0fc0a23bed26237912a335161192ac02b3c": "0bb92aa12555a050eae5318177622980",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/e92871f420d2256cc29877086bfef1d24d6f3e": "ca31a5091f0d20876ae669bf33229a50",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/a5813355bd0cfb8c6739467be14dd8e5e5c368": "ad017cae377a4396a6ac2364dfa16d81",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/7757817f5464aa0c6aac24d96945542525042f": "20440bf91c2bcce7c2e6cba310dc7dbe",
".git/objects/ed/df15ae273a68cc527424493416d8a4bc36d18b": "2d6550340a83879c7568f43fb9f43762",
".git/objects/87/90a23b0ac84c5744af2061708e2086b51fe996": "ce50f396abeef366c15d330c0434ce3e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/9c63b28c71b50c7b0578a89dd69762f35cf619": "aea792d963649773b95b316c96341216",
".git/objects/26/9a588972ebd875a3f4fe6f38ca924eed2bb36e": "2d79b0ef93c2f2164640c48ece5e4a63",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/81/213c8ae9e998760fdbb65a4f17505b5caab6a3": "8d66140980992b122c3807403446c3ff",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/09/113088ef9e638273e675c04cb141b35df7e571": "49847cf44999a7bc7178581ac029f9fd",
".git/objects/3a/8ecd5470f1f1a3280695d431335153fe9dc77e": "384460e03c6a09a397125256fcd06573",
".git/objects/53/a2273b730bcf1cc05bc2f421323580ec6ade67": "dac33c423e9690a311a5fd4370d799a2",
".git/objects/06/4f19785e1655fc18809287877aae839b0bb186": "dfcd11acb98cff8e4d532aa6ee112a81",
".git/objects/39/430379110627fc5659546cdd75b01a9454bbb1": "d2560c3a4a5922545f2d32f249cfbc1c",
".git/objects/55/dde0a62c0e4ab7c7944be69aab9a6fec041dc1": "450288668f8b5e4ea7653a6df7036415",
".git/objects/97/be6197360e9eaed5c0ccff58adce81b86b6f6c": "dc051e11a9f25e775707b6f23accd709",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/aa/058b034a4fe9f602ccd139165f55edaf75f029": "10a8eaef41f857a218a663f816730a02",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/9fd68a4f1ed65ff0bf15adc05a187e048c1ea8": "a69122329c4c0b3df256fe0349875d7f",
".git/objects/a6/175f2c7043210afa40d9f686a07538be1a17e5": "1a20cc9cff73efc4ef37aa82bfd237a9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/e1/7ccb1c34e1455bf615294dc0509afa05983386": "74294090e31c4b5f6ab96a70dd123c91",
".git/objects/f9/6b647ff8ee1e96e3f1bba067bfc5b477ad8f82": "0598ecbbf9d824c7a4d005e8f2ac4e8b",
".git/objects/ff/aa00415a3090b63407470cdc4201a3b702d121": "12c7d0fc2bff79803c9711368313fd0b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/06fc58e606ca121fdf78ca7045e68241a25dc4": "7936cd9d498320f6ff6e5dd9b78741ed",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/d1b7917b5101df3b39c0c45da638acd11042fa": "83af30bdf9750dc95d10a13ad7ff46d9",
".git/objects/8c/8e7070f3ad2e12aeb311a65216f5004d33697e": "9c34d7a0bafceab419e72bba8ef29466",
".git/objects/85/4369b004312814f2ebbce590d128d0c73ea6da": "e4f941668155bae2775e816a378c5316",
".git/objects/82/09f77036655d8ecf486cdd18a05782e2e620e2": "9b6cad28330df1623ec7051c0aaa1b13",
".git/objects/7f/d9fae0806aa9dd4cae88b7a54176ff64205afd": "314d7fe0c467a955aa5bac84e0e0fa61",
".git/objects/7a/54cf65683d7a0c2913eef4dd08c3ba7972209a": "6bcd40f294aca306b3b085b00ec64898",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2013d5cd1f046a1e539cb9e90a4be302",
".git/logs/refs/heads/master": "2013d5cd1f046a1e539cb9e90a4be302",
".git/logs/refs/remotes/origin/HEAD": "90c058583a372f762d080040513d205d",
".git/logs/refs/remotes/origin/master": "66dc232ccce24b3cf17fd5f342de8d99",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "d87bba1a4ca11a449692feb571f6b5bc",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "391bae5b58e36486cc2046ceae926a17",
".git/index": "335c81d1e49b07aae285c6efbd7a2d1f",
".git/COMMIT_EDITMSG": "bf072e9119077b4e76437a93986787ef",
".git/FETCH_HEAD": "43821a97a9e6a5e163ed9d87fa205061",
"assets/AssetManifest.json": "491f300584ee76691ac1f791d93d4b8e",
"assets/NOTICES": "6404bd3d135915b877d608de5d1a505d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "1f17fcf8fa0f6e563df96725fec3c72e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bda69b2d94259a62c8374769b8373c49",
"assets/fonts/MaterialIcons-Regular.otf": "fc2b13da6427e3198047155b87813023",
"assets/assets/logo.png": "db5404c67669f195a6b73b7bcfc020d7",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
