'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9f295e191d1254c7b8f83b82e5295cf0",
".git/config": "c0c85e90c9e93bda1b994c0476c89720",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c210974cb881404d106f2dc0fc143060",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8cab2012aa391d405f56739ecc9c93ea",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dd88bfb96626011ade83d2d2497a1952",
".git/logs/refs/heads/main": "dd88bfb96626011ade83d2d2497a1952",
".git/logs/refs/remotes/origin/HEAD": "19e1ebcd737752dc7b33287db049548d",
".git/logs/refs/remotes/origin/main": "58abba9a21befe46f26a1182fb35efc4",
".git/objects/03/4ffdf2b80fb45a1d9a502117a1326970112308": "ed7f131b399d423c687562fe6e5a23c4",
".git/objects/03/b8eac194eaf9805fb5d1cb958d39b9f4dad177": "b0dbded6d369bb605e7d37f449bc0c3a",
".git/objects/03/f0cac5cf1dac335cd4620742371a5521714cb4": "59718556141382896fba5b8a35826600",
".git/objects/05/7346550cb3fd1299c078afccbf1053ff60d143": "c6a772320f902bb6ed51d53a2e52f224",
".git/objects/0a/edb6ff95eac563ee1c3c2af6dbcfe9a51bfc38": "2104aae1d9aa0ccf3a26a0df63de075f",
".git/objects/0e/8fdcd7c713ea9e5215a3a77d6b588eb5c8b673": "cc4eec0f82d8c77d899d473f59cb6e5f",
".git/objects/0f/6696b01cdd05debad89953cc497ed510efac07": "a090fd440f7fcb5f38bcfe03ec57cee2",
".git/objects/11/f2678f9c52ab5fdc19aa966a0cd0a3e44842fc": "f31546703d1da71defa8a244b50a9d23",
".git/objects/19/392b5a38ceb11d92d4228c3f1c6d93e6808824": "983d3f98da02c055c0286f2f35817e69",
".git/objects/1a/6581b43b393b8b7ce7354a13702ceb6f59ac70": "b8a4408133d12903033621bf1a676879",
".git/objects/1c/f3a04d89e311390df1b7fc9f9c73a58a4dfe7b": "1dba2fb0fbb7e8e8b66a6b8497f440bf",
".git/objects/1d/a356e8cc8fa0df6456c684dcd593a391d693a7": "00b412b45e91c6810490af1b455fec43",
".git/objects/1f/5b973208d5006b317511d1454a93cd1e4e66d0": "f676dfd615ac2daea259db77d9643fac",
".git/objects/1f/bda35f807b671a143105c62ef1d11ecf775b57": "9947fdf9e8ce37581c8bd962bee7d70d",
".git/objects/21/0dac5898deb3c50028147b87cb5a6089f358ab": "8e9e36e11ccdc65b1571f1628996f082",
".git/objects/24/ad5b7f8d2f1496db11f48ba52f6bc80185bb03": "975d980874a04a9f29836e4f06f5e446",
".git/objects/25/eabc1df568d61a2a4e1ac52e767aa364232dbe": "30d8b33301b07b95fb186bbebd362f0f",
".git/objects/30/fea8d0e306df85a0c43c1cd9184282fc55bf8a": "83d99a48060221a3855f5bcf8195eb07",
".git/objects/32/86f64447c1f1986f67fee2145de3189108a36b": "eb5e1b8f9ecc8dc00fa042a5383c04f2",
".git/objects/38/78af5f25b3701e34e870fa9fdbd34c290284dc": "3c4a977946d29b2302ad89aeacf059f6",
".git/objects/38/f5f5058b385f4708c3df2a68d5cc6ab2e3eda7": "b86ea96db62eb2d299ff9727fbb21565",
".git/objects/3b/5a82fdf14b2dd7831c292797d61231d16a9476": "cdb956bb1a0f6fad2d8b194c3755bed8",
".git/objects/3b/97b57c188bae5a07f1c45aa883b590bb5a6a57": "cd84289891a3777bad817200ac9fb87c",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/955ba9602ea86ab442e04c49b9c215574d6ed5": "989ad0b46afbf9f2e001c83fcb15902c",
".git/objects/42/2c9cd01c79e938c8a6091e4dcae67d03ce7695": "a6694629f8309dd8698a592e0eddb45f",
".git/objects/4c/602ef54de2e4eb254eda97316b3bbf09dc128c": "8363dd563c6ea2b703986e342b85bc7c",
".git/objects/4e/2582740c37bf350cb683196456d0cad32c0eb2": "dba7840b12accc002800db5cce9fc035",
".git/objects/4e/5cab3a7a724063cc8a8e90852d1b1bb53f5ef7": "540ad5ae23fc50ceec4efb94cecf2a6f",
".git/objects/4e/9e3cb4262d09795b186bd98cec805c80bbac06": "58bfed7e5ffc5d1ae53003fb9883bd6d",
".git/objects/50/b67bc3175f041b31c338de290bfe076effa663": "ed22a61760cf106be255f689b7ac886f",
".git/objects/54/6f4a1cc04376cc164807ef2f01f54df16becf4": "e3696b8879d278ee942b966fa61ae366",
".git/objects/54/ec1fcc6ec30bb94af6e4b7e140dec704a2d3bf": "b3ad9ec596e3e0324c652ed9b8638ee8",
".git/objects/5a/4b8eeb1cf7809e10fde2f421f72ba0e37d1a0e": "0492940f32264590fc723c85a7b62b4c",
".git/objects/5b/111e96eac30b2ecb81c779fae206b17846ac62": "4c663dfc6e3256e87816d3fd1bf65b3f",
".git/objects/5c/9b536d5874c16db80a0d1a0331d1b3063a2da4": "1d8f097dc93756b508ff52452171784b",
".git/objects/5d/3414cf2a8c80830dc7b2986e46fa812073f448": "d12c21c185cf6bbb4d50add7a1ad3ed4",
".git/objects/5e/14d84f9564f71952adeea8860ee815d9c5dc06": "1b708850ff75d87378a8ae87f5e1b08c",
".git/objects/61/6492700ac7a2075a222982e1896bb7f84f168f": "cddfd999f58854f4f41b441398e7e709",
".git/objects/65/31a9fe3a127d05b2b74b7f04ca1bb7f29460e3": "9dabea5cac9603fc818849604b9f6984",
".git/objects/68/4b13c09317b9cd9d976d96022137c0c628dc84": "e5e894c64bda007d1c1124f4c51a7330",
".git/objects/68/9095c74c7154b46331efc3a348a12668387f00": "a109888b896774cce8c6c2e4bc65b607",
".git/objects/69/fd0bb8fccb1eef619097c7fa83136abbdd42cf": "91824ef702442f1447e6c0bb4337869e",
".git/objects/6b/7d7623733cba3564978f440f280df42a9fadce": "851d69aa22bb2d2d79d462ab5fa4b9f4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/aaef11b74bd9c8fd1448da878eaed77faa90b5": "94647920212a9e97ad46a9b2fd35e6a2",
".git/objects/8a/933730fa0dc09fa29dde7ad89080c337e69812": "dd34f53db501eb99b9f7a175db13957e",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/0f67ce4fa638d7715777c5bf5f9395a3bcfdb5": "66358cf2a9a0b8b5e4f06114998bcd18",
".git/objects/8e/ce3f58c077d41bed39c976d4311d4a964462f9": "f51aba772a382454cdd0bc771fd6d118",
".git/objects/93/7e32474dddf0e6819fecabcee68e0fc990f78d": "a00e39bcb156c748fad57ee38494b85b",
".git/objects/94/ab2bb405aa5903b4767d6b8527b8ed6c7c3c76": "1241a37f36ac71b4ae5d401b6163aa81",
".git/objects/97/bdafbe3bfa57c54ac3aca391b37d45ed095749": "67cb027b27e2fe7483a0f18768fc6f8c",
".git/objects/99/d324a932e4c8ff75131f78d355c4a0accc039a": "517a49578d09f2087f8e3ba243ca24eb",
".git/objects/9b/f3175d30124dda7c5b0e600e17b0749394af2d": "c0d87beebd8de2a0fbace318dc9c9439",
".git/objects/9f/347644f82f1e2b5a7603a1aea8570e9b714647": "a476ccd1e6e10ef1361391defa2c4c8b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/41ae362118d2706dd4bb718fe6eb00477fd1ba": "8869183a373c7540b496d2a04d53a96a",
".git/objects/a2/5b7d03ed56b029161b204afdba25ccf522d13a": "cf47b7c7dda5efe894cdbc84c1e01917",
".git/objects/a2/7c94baef12d0761bac9ef3e3e7e4fb36665a7c": "7d545261379e41fb424510e0acd7f480",
".git/objects/a2/ab9d791d91ded514359646e5e14d0c91d09423": "c3b8ce71681db4c9729be2d286df37d3",
".git/objects/a6/8ebbc0c1579e519610268001d00f602c88ef35": "f899f74ccac8a2d768406314f00a3ab1",
".git/objects/a8/b02d1991c786d0e5fa256ce3a07553296202a7": "67c47b0380c1b851196bf798a99adc02",
".git/objects/a9/44c323a42b383d7eed5638a9954615a1f94492": "b019d5ef75f9222c487fb54eb2e59669",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/ada04c98824a8c9ce1510c85acb7c02c13f393": "32af9c245b90f853110c17c9511a10e9",
".git/objects/af/059af3cfdb4502a2e3e1c821de62dee55c1a09": "ed3a4d008dc93a6a38677fd4aab8f4df",
".git/objects/b6/61136deac965ffebadd34223ec8183a68320df": "1f3013ae9456ec8b9c75cb886ad5ee85",
".git/objects/b8/90fccdb0abb89ca1df13476da17e4bdd60b8a8": "900cf2130822351d44e7e8aa28f1d234",
".git/objects/bc/18d24e18de390ee996e52d759fa335c15a1a6c": "062ee016111b39ef735756532858939c",
".git/objects/bf/f89498ba0ad869805bec3d018a77e76e49c3ee": "1b5ca37251b4e6632f6e95e71cb77676",
".git/objects/c0/31105e09a6b7327fdfbcee70c34b27d3e4d323": "4b87d140d60c7ec73fc6c72a4d2b9279",
".git/objects/c6/3475561fc5f0600bd9bdd5c985b26d3d358ef8": "9645b5096fbf23f2fbcd716412971656",
".git/objects/ca/25fd577d44c9b72047dd676b7cf03ba60e6dbd": "f61088b0f66cfc1a37e12c8c08dc6518",
".git/objects/cb/1bd8261627de0f4a0b731b84a708649892c7e6": "b1288ad37cdc98092627110778f7eee3",
".git/objects/cb/73557ce055fcf27fa1e5d690d55c6d01d86778": "9ccab6b02ae52aa8ac8fc3d2af120a32",
".git/objects/cb/a0eb43b2faf960a34a0a94a202b53af6e7ca20": "c3a18242bff659b5614d8a50a04f2242",
".git/objects/cc/1e703128e09f642f50c4403511ad3aeb4761be": "41b38204b62430aae40bae6cf13cd96e",
".git/objects/cd/c6c85b7d7f4a49c879c13c98144273061be91b": "e860e401afe71cf2166849e26d2d6f85",
".git/objects/ce/c2442f0bb0f20e4607661dc31bfd849f876bfe": "c193f80dee11b590b2e42d78f3ef8d65",
".git/objects/d5/42a4086b931ee75aa82a19056f38c3a92f1404": "de0c7498d975d65d15c35210a727e8df",
".git/objects/de/380cb8d91454a864ac343b71a445452ef46d01": "4b41b0967185444d2144748c9c4461cc",
".git/objects/df/58f0c8128926667d3b7c528c657a115d8fedd2": "b33b5a5a17174b08d0783f21e1a4347c",
".git/objects/e0/478073419433e11a258c0c707728140339cbca": "2b49b0952f23b2594a3c13e935cf1a17",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/306a622ec75772ff5e97585449f08101c23aeb": "061ca71fd3360a5494c40007c7426fda",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/e7f0680f8f2e83eefff9a1d509fbb80931ee04": "125c273aa82de64982fd90a11dc2a90d",
".git/objects/e8/aaac255fb7fc0167a1c497902ebd47a05d12c9": "cd16d4484b1ae24a7eb2eeb3e99f65ff",
".git/objects/ec/097c7acb90d59d2fd4f84cc95d627856567225": "86b578e6829168d3f63e48a32c13257e",
".git/objects/f0/de5ff100c574ae3fe1c192b74fd1d04b896d76": "49e7b1510a3444f8e33be62e7b46dc0d",
".git/objects/f2/80373406294982046be358318baee3eff23196": "1734c3779e359cadba56db40746c0603",
".git/objects/f3/d4402be278120082b8d12bb42adbcde5e7e091": "0ccca7fd1b6b2f83f7352ade551ce9d9",
".git/objects/f7/6823fa024caa6ad17dc8bd3bd8046c2adc254b": "7f6c54fb3841132193bbdf7755035ea8",
".git/objects/f8/686ca25fd69246bce78112bc75ed2b2a84dd67": "52c0d8c166371529800d06597d7ba793",
".git/objects/f9/0ddf51fb903e8ef30ee933519042da995534ee": "37b02f1412220b12f8d0640e04cfc87e",
".git/objects/pack/pack-e196cd9a747b92f158920a2982f5a5178b098bdf.idx": "c329300a7f2c9554ce804e9bd4ef67c4",
".git/objects/pack/pack-e196cd9a747b92f158920a2982f5a5178b098bdf.pack": "37639c581f6737c9e692e92c5a5502d5",
".git/objects/pack/pack-e196cd9a747b92f158920a2982f5a5178b098bdf.rev": "03aa75acc89e628925e8ae4801d488f8",
".git/packed-refs": "b99a4468ee8dfb70317bd8e336d16717",
".git/refs/heads/main": "08fd5a56e56b1e1e2453bb8be5efbb49",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "08fd5a56e56b1e1e2453bb8be5efbb49",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2ff87ba0e147f172aca4a0d467d139b6",
"assets/NOTICES": "4b1ff89f17b1b759285dfec0ce95af10",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "60fdc5bf9687e1638c0742aa07185365",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b52a30f388b93445e4d6bdf3a97d8b96",
"/": "b52a30f388b93445e4d6bdf3a97d8b96",
"main.dart.js": "bc971bcabc4373981647899d1f4ba665",
"manifest.json": "0ebda5f250f45e2bca251f91a6f43124",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
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
