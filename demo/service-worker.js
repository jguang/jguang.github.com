/*this.oninstall = function(e) {
    // Create a cache of resources.
    var resources = new Cache();
    var visited = new Cache();
    // Fetch them.
    e.waitUntil(resources.add(
        "/index.html",
        "/fallback.html",
        "/css/base.css",
        "/js/app.js",
        "/img/logo.png"
    ).then(function() {
        // Add caches to the global caches.
        return Promise.all([
            caches.set("v1", resources),
            caches.set("visited", visited)
        ]);
    }));
    
};*/
 
/*this.onfetch = function(e) {
    console.log(event.request);
    e.respondWith(
        // Check to see if request is found in cache
        caches.match(e.request).catch(function() {
            // It's not? Prime the cache and return the response.
            return caches.get("visited").then(function(visited) {
                return fetch(e.request).then(function(response) {
                    visited.put(e.request, response);
                    // Don't bother waiting, respond already.
                    return response;
                });
            });
        }).catch(function() {
            // Connection is down? Simply fallback to a pre-cached page.
            return caches.match("/fallback.html");
        });
    );
};*/
self.onfetch = function(event) {
  console.log('got a request');
  var salutation = 'Hello, ';
  var whom = decodeURIComponent(event.request.url.match(/\/([^/]*)$/)[1]);
  var energy_level = (whom == 'Cleveland')
      ? '!!!' // take it up to 11
      : '!';
  var version = '\n\n(Version 1)';

  var body = new Blob([salutation, whom, energy_level, version]);

  event.respondWith(new Response(body));
};