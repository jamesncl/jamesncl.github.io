'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fe8b032800ca4b974aa99688f3a5c61f",
"assets/AssetManifest.json": "9275ce15e383f340bd3c32d45a666ab4",
"assets/assets/images/akzo.png": "8b15d5bae24e1adcdb5f6027f1a1ea11",
"assets/assets/images/android.png": "09e2909c70cc46303aa3a40ab7376304",
"assets/assets/images/apple.png": "c50b818c331e8e0e64c944eb731d71b4",
"assets/assets/images/azure.png": "86ca32a3362f568d3db2aea52ee99ac3",
"assets/assets/images/barbour_dark.png": "708063b505704d034ebd17bd9ccc0bc6",
"assets/assets/images/barbour_light.png": "ecd964471db7ca87fbd90c53d97d1ceb",
"assets/assets/images/bash.png": "115117bd1fcd6937a70b2fd12c370215",
"assets/assets/images/bellway_dark.png": "f6ad8b28a8b0080922148aad3eb6839a",
"assets/assets/images/bellway_light.png": "426e087c1a49ca3857d25983d0c445d9",
"assets/assets/images/c.png": "3ff542af2b06e0d887b4817d30700f4e",
"assets/assets/images/cedarsnursery.png": "4377b0e89a15f582667754bb35a3e787",
"assets/assets/images/cPlusPlus.png": "f1e51b97414064e2a0f772525da578cf",
"assets/assets/images/cSharp.png": "5995bf53855947371ad8ec650565dd23",
"assets/assets/images/css.png": "b8f0970d7ade89e9324038e45ddab329",
"assets/assets/images/dart.png": "1ebdcfa84cb0d7821b55e8421a16180f",
"assets/assets/images/datatron.png": "23f1f4660faf59fa1ed9bb4cafebfedd",
"assets/assets/images/dotnet.png": "fa4e2d1b422c48a2235d954ffcdfebae",
"assets/assets/images/embedded.png": "8158c1c2ec44323105c72c324a41cf74",
"assets/assets/images/g4s_dark.png": "23362b69480d13fcf84ae04bcf051700",
"assets/assets/images/g4s_light.png": "64366d66c0dc7b7c816dad76d84b052f",
"assets/assets/images/gavurin.png": "89d0efa9041de44f8acdadd1d74043c7",
"assets/assets/images/hive.png": "1d45a18d053c4ca2d29cdc1de3ff65e4",
"assets/assets/images/html.png": "ebb2a80228f3bbe96005de5f9db4e61c",
"assets/assets/images/illustration_cedarsnursery.png": "c62fa8e8ca582be77cd720ff2fea4fec",
"assets/assets/images/illustration_chronic_insights.gif": "80e47861a168bcab27cf63c690fa6dd2",
"assets/assets/images/illustration_flutterembedunity.gif": "d9e3a66f264cb8a21678b51db7804bc5",
"assets/assets/images/illustration_knovoscope.gif": "a6dcdc5a07c3b7996562c843225b060a",
"assets/assets/images/illustration_symptomwatch.jpg": "b048570923f26e613f6b22f30ec999c9",
"assets/assets/images/illustration_wsn.gif": "699234e121026546ce267895a9af2cbe",
"assets/assets/images/java.png": "bd7e11707b4c00bc86d2c2a0a9168b7c",
"assets/assets/images/javascript.png": "93f09f080cf0993761908cacb9d8662c",
"assets/assets/images/JavaSE.png": "4d8c173f2b358cc9fb848f4a7339a167",
"assets/assets/images/knovolution.png": "9aa1a3761e0cda13e40774fa00c9d3c6",
"assets/assets/images/kotlin.png": "6f0f1bee5d5a90f72afa16d71b67506f",
"assets/assets/images/mbed.png": "121fb02f7ff9c4d1efed5be6ef6b9404",
"assets/assets/images/mysql.png": "6d327146d0cc9b3c7379a43e152be8ee",
"assets/assets/images/nea2f.png": "c328c21bd6c90f908bab3571cb597bce",
"assets/assets/images/newcastleUniversity.pdn": "14cd5701a0b4d0f1c77fca1fdd1fecf1",
"assets/assets/images/newcastleUniversity.png": "9ce513a46b8ad9258271bf1e73e4b93e",
"assets/assets/images/nexus.png": "64b01ca956b5cbc9d80751e9446ce528",
"assets/assets/images/northumbria_dark.png": "40e4437501b1ed0a9b182e8ffdc68a17",
"assets/assets/images/northumbria_light.png": "3789e44d4e7cce05c07d900de3f4b768",
"assets/assets/images/nufc.png": "ae65c7c05496450ac7e4dadf6501a745",
"assets/assets/images/office365.png": "eb5677adb5c3d455cb7f197151c27fb0",
"assets/assets/images/openstack.png": "d043a726cdbb1634eabcec96c3783400",
"assets/assets/images/powershell.png": "226650983cef49e509392b2301bde51d",
"assets/assets/images/python.png": "0cf4f080b5285e9950d039f5642758c1",
"assets/assets/images/qlikview.png": "6ef1441223eebde17399c5ad0cf94884",
"assets/assets/images/ramsdens.png": "429f16e6c00b3b027f63c91808b666a1",
"assets/assets/images/ringtons.png": "b238ed5bad6eccd8d94b91ee650d8d99",
"assets/assets/images/sharepoint.png": "c90e81fb31fc14e5587d745f331ca670",
"assets/assets/images/sql.png": "013a6b19647e42672e5b9d946731ffd2",
"assets/assets/images/sqlserver.png": "8cf6c85c2d015b8de143b3f8c6573586",
"assets/assets/images/swift.png": "ec92835d9eccc0fa7a243e122eb09207",
"assets/assets/images/tableau.png": "31a179ebf52e29aada3de8e847644423",
"assets/assets/images/thumbnail_chronicinsights.png": "3d26c092e34c1041c05236f85e210c28",
"assets/assets/images/thumbnail_flutterembedunity.png": "8c8a36a4bdf3f3052c63ee740dc45b08",
"assets/assets/images/thumbnail_knovolution.png": "a75b9b014036f9dbd19aeb043ffb7835",
"assets/assets/images/thumbnail_profile.png": "995d0261bf5a561f4db6efd2141bc1c8",
"assets/assets/images/thumbnail_symptomwatch.png": "afb8e1dded1e6d9d1c6216bd18ab6d0e",
"assets/assets/images/thumbnail_wsn.png": "990eefe577112868f01b14e98fc4d1a9",
"assets/assets/images/tyneAndWearFRS.png": "89ca71b412bba6681a5f99ea2bef936e",
"assets/assets/images/ultra.png": "d0191d8a85c2495f7a1ebf6e64f80450",
"assets/assets/images/unity_dark.png": "77ca64d1dcb3fcd86308947eba50d56c",
"assets/assets/images/unity_light.png": "c2b7ef8425de9ba1d547bb3fd18abf0f",
"assets/assets/images/vagrant.png": "8800af5e478df101eaba20cd359ac024",
"assets/assets/images/web.png": "d4b24bbcaa6aea8ae8d175e030f482db",
"assets/assets/images/wellstream.png": "6d5d71dc1f53e1b555ed01c2732bfd28",
"assets/assets/images/wix.png": "214086febf143706d6a3297958b17d7d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "86d4f5f2dccbf97bd380f9a27e1911dc",
"assets/NOTICES": "f3fd1185e61b6b2d35f36cd6b6c779ed",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "aef7f64993188c93689765e74dd6d703",
"icons/Icon-512.png": "6acbadfcbbbb4d0c6130e9c917e017c6",
"icons/Icon-maskable-192.png": "abc23704bb99b980c355053e2b36b4e8",
"icons/Icon-maskable-512.png": "9a8d34eed9a34e253752a85296b4490b",
"icons/loading.png": "0afc232eda2bbcc02471a406ce9a4f41",
"index.html": "a2ba0f284076c99bb112e0678591d265",
"/": "a2ba0f284076c99bb112e0678591d265",
"main.dart.js": "cba428369056d32d56e4b86a25cefed6",
"manifest.json": "ff4493ca5729822f04868032a3ce42c4",
"rive/headlines.riv": "8ebb0bf912ff3c36e58e661cbe2c403a",
"version.json": "a26005e92a6381740a8b1e7adac04f5a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
