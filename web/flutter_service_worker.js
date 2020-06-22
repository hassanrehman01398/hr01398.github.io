'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "48d6319dfc03ac9e888c3988378f4c25",
"assets/assets/about.html": "27e619a5b7385addcf2b1698d56f69b3",
"assets/assets/avatar.jpg": "bebd4fa9cbcf6c252b4636773c6f07d5",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/hassan.jpg": "0fcdb26ff51c74da3280b8a24f196870",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/works/alert.gif": "4aea5c434627f5875723324895d23a04",
"assets/assets/works/alert.png": "a09d285fa91670fe648561fb8b9326f1",
"assets/assets/works/bhaihazir.gif": "1e1cbadaae2e81dd6e2d648664a3aee6",
"assets/assets/works/booking_icon.jpg": "835944d11266c9067aec72aae0f71c59",
"assets/assets/works/cocoapay.png": "1a116679a577ef4af05f6e3c7f6f23be",
"assets/assets/works/dog.gif": "b4eb9e8490911b2aefb959a8ba5c6553",
"assets/assets/works/facelyt.png": "9c21f203fc4d3a9ca53455c525b63f94",
"assets/assets/works/fitness.gif": "3d4e1ec2cb2d73767f5438927c65e32e",
"assets/assets/works/fitpals.jpg": "6ce72eaeeaaf646d4af77afa7be14a51",
"assets/assets/works/hairapp.gif": "62fa4e231ebdb86805ba75b36ac5efc0",
"assets/assets/works/hairbooking.gif": "f5646dab4ef6001a75f3f0bd3d97bee2",
"assets/assets/works/hairbooking_icon.png": "f515221a9ca358e7264ec5b004b2177e",
"assets/assets/works/icon.jpg": "5149f18d0f8cfbe9e520eb1bef4a977f",
"assets/assets/works/icon.png": "f2181b000325f248c7b1cd531ccb4ba1",
"assets/assets/works/icon1.png": "df77b26975b0417370df890373410c38",
"assets/assets/works/kharedi_now.png": "d0c478d3e7e33419a8f48b34bf1207e3",
"assets/assets/works/kocart.gif": "e8db05694e3d4f44640adaab644027f8",
"assets/assets/works/kocart_icon.png": "c3d455dc4f8205499825b9855d069dc0",
"assets/assets/works/logo.PNG": "918ced503d077943a52fa118133de394",
"assets/assets/works/machliwala.gif": "312515342467a9a839f62d169dedec58",
"assets/assets/works/messio.png": "827f062f04c16a164d9d7e9d13f24916",
"assets/assets/works/musicapp.gif": "2916c490c99a87433e0d41a386e3dda8",
"assets/assets/works/mydealer.png": "14f62eb3413897290d2b2a248dcd8931",
"assets/assets/works/mynewcar.png": "a856c91717e8817762660e95e591a10f",
"assets/assets/works/playdatedog.png": "86e18f19de9cb69c9be1ded89b93a398",
"assets/assets/works/railenq.png": "7982d54f1972d96a8f10a389ad354db2",
"assets/assets/works/rajasthan_tourism.png": "d7e838f9f73511fc7038a05b60859356",
"assets/assets/works/savaari_consumer.png": "480950a09ee167d32cdabea4b45b676f",
"assets/assets/works/savaari_partner.png": "05e90af963f924eeac54490a5a2dcd38",
"assets/assets/works/stattion.png": "3e39fc6c1f96b3201cb661452edc6d7f",
"assets/assets/works/stream.gif": "6f66569f8a4a3d61bdcae41471d710b3",
"assets/assets/works/trivz.png": "4fc7b4922689e1508fdbd35a9b1785ee",
"assets/assets/works/truelancer.png": "1126f584894fa84c5c052ec625ebf54e",
"assets/assets/works/vdrone.png": "f9817772bfa75c8d65c62810d83be284",
"assets/assets/works/wheelie_repairs.png": "cd0c2be230c6e7b9cb6224da0726d7ca",
"assets/FontManifest.json": "2c5369b5d9759836c4cb6d65c0d52550",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "51af156b90295306a3e67ce1ea72d7c8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_beautiful_popup/img/bg/authentication.png": "f35a4b18ce208c1a061b5b8e37f5c831",
"assets/packages/flutter_beautiful_popup/img/bg/camera.png": "91b3327967e4e02747721a5f0d2fee9f",
"assets/packages/flutter_beautiful_popup/img/bg/coin.png": "cabd80db0d1f5aff7e881cb4267e2468",
"assets/packages/flutter_beautiful_popup/img/bg/fail.png": "8cc3ffefbf01c756932d25b62e6031ba",
"assets/packages/flutter_beautiful_popup/img/bg/geolocation.png": "60467d11beb395f49687f6767093eeca",
"assets/packages/flutter_beautiful_popup/img/bg/gift.png": "9a75d6e641acc3d583c8a175d188a101",
"assets/packages/flutter_beautiful_popup/img/bg/notification.png": "b59cdd09d90f87673ddab1e97ec3e1cf",
"assets/packages/flutter_beautiful_popup/img/bg/red_packet.png": "3b9fb0d40d45c496eb6fdac6095c442e",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_blue.png": "d25afc3a9c26c2cbdd3f7d11e09958be",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_green.png": "a6a384e73842482c3ab7424f78358cec",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_orange.png": "19fd0b66488935b9ec95b58a604c4f4e",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_orange_2.png": "18b4c81e68a42ae97f7ade84cd6a893a",
"assets/packages/flutter_beautiful_popup/img/bg/success.png": "a7bf30ab41d44b9c52512b3cb5d813f3",
"assets/packages/flutter_beautiful_popup/img/bg/term.png": "b926bcb493dd4f2149ddc1e6332aa978",
"assets/packages/flutter_beautiful_popup/img/bg/thumb.png": "5b4693a8b6ff65d3dc619415e2bee11e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "08b4928b693da356f96ef8fcd5adc167",
"/": "08b4928b693da356f96ef8fcd5adc167",
"main.dart.js": "2e4ab00c807a22bfd6fba294fbabb5ce",
"manifest.json": "1b390430942747950bdadfced2e7a42c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"/",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(CORE);
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
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

