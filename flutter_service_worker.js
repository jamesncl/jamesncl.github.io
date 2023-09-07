'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1ca7222f6d43d01ca2457eeb0768d27c",
"assets/AssetManifest.json": "3fc7bce6f2f1241c64f6c5e979cbc1e5",
"assets/assets/images/android.png": "09e2909c70cc46303aa3a40ab7376304",
"assets/assets/images/apple.png": "c50b818c331e8e0e64c944eb731d71b4",
"assets/assets/images/azure.png": "86ca32a3362f568d3db2aea52ee99ac3",
"assets/assets/images/cedarsnursery.png": "4377b0e89a15f582667754bb35a3e787",
"assets/assets/images/embedded.png": "8158c1c2ec44323105c72c324a41cf74",
"assets/assets/images/gavurin.png": "89d0efa9041de44f8acdadd1d74043c7",
"assets/assets/images/hive.png": "1d45a18d053c4ca2d29cdc1de3ff65e4",
"assets/assets/images/illustration_cedarsnursery.png": "a03e52860a60ae7f78581c00cb6dcf60",
"assets/assets/images/illustration_chronic_insights.png": "0aa960009c7b570f8eba7897c195e161",
"assets/assets/images/illustration_flutterembedunity.png": "49ec8673a3f6c85fb7ec7cea9f54e7b2",
"assets/assets/images/illustration_knovoscope.png": "adb73009d9595c51214bb3e785a444da",
"assets/assets/images/illustration_symptomwatch.jpg": "b048570923f26e613f6b22f30ec999c9",
"assets/assets/images/illustration_wsn.gif": "699234e121026546ce267895a9af2cbe",
"assets/assets/images/knovolution.png": "9aa1a3761e0cda13e40774fa00c9d3c6",
"assets/assets/images/mbed.png": "121fb02f7ff9c4d1efed5be6ef6b9404",
"assets/assets/images/openstack.png": "d043a726cdbb1634eabcec96c3783400",
"assets/assets/images/tableau.png": "31a179ebf52e29aada3de8e847644423",
"assets/assets/images/thumbnail_cedarsnursery.png": "c62fa8e8ca582be77cd720ff2fea4fec",
"assets/assets/images/thumbnail_chronicinsights.png": "97b6a0b0b63a876bce5fba59452af888",
"assets/assets/images/thumbnail_flutterembedunity.png": "8c8a36a4bdf3f3052c63ee740dc45b08",
"assets/assets/images/thumbnail_knovolution.png": "97316fc7eb8ee342116ad0e4f8f3865a",
"assets/assets/images/thumbnail_symptomwatch.png": "afb8e1dded1e6d9d1c6216bd18ab6d0e",
"assets/assets/images/thumbnail_wsn.png": "990eefe577112868f01b14e98fc4d1a9",
"assets/assets/images/unity_dark.png": "77ca64d1dcb3fcd86308947eba50d56c",
"assets/assets/images/unity_light.png": "c2b7ef8425de9ba1d547bb3fd18abf0f",
"assets/assets/images/vagrant.png": "8800af5e478df101eaba20cd359ac024",
"assets/assets/images/web.png": "d4b24bbcaa6aea8ae8d175e030f482db",
"assets/assets/images/wix.png": "214086febf143706d6a3297958b17d7d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "0aeca91917db8a51f18ee46a58d1a390",
"assets/NOTICES": "f3fd1185e61b6b2d35f36cd6b6c779ed",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "1c4bc2b4397dd85f3b8089d09baaa46c",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "aef7f64993188c93689765e74dd6d703",
"icons/Icon-512.png": "6acbadfcbbbb4d0c6130e9c917e017c6",
"icons/Icon-maskable-192.png": "abc23704bb99b980c355053e2b36b4e8",
"icons/Icon-maskable-512.png": "9a8d34eed9a34e253752a85296b4490b",
"icons/loading.png": "0afc232eda2bbcc02471a406ce9a4f41",
"index.html": "8ee78aba2ba00135d13d430f35221057",
"/": "8ee78aba2ba00135d13d430f35221057",
"main.dart.js": "afe307010dedcfa012414ae51b65793f",
"manifest.json": "ff4493ca5729822f04868032a3ce42c4",
"rive/headlines.riv": "36716ea1497aacc28f52824f151cfdd5",
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
