// menu-data.js
// Loads the live menu from menu.json (managed via /admin/) instead of a
// hardcoded array. Deliberately synchronous so `menuItems` is ready
// immediately, exactly like before — render.js, tabs.js, search.js and
// main.js all keep working completely unchanged.

var menuItems = [];

(function loadMenuData() {
  try {
    var xhr = new XMLHttpRequest();
    // Relative to index.html — menu.json lives at the repo root, right next to it.
    // "?v=" busts any HTTP caching so edits show up on next page load, not next cache expiry.
    xhr.open('GET', 'menu.json?v=' + Date.now(), false); // false = synchronous
    xhr.send(null);
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      menuItems = Array.isArray(data.items) ? data.items : [];
    } else {
      console.error('menu.json failed to load, status:', xhr.status);
    }
  } catch (err) {
    console.error('menu.json failed to load:', err);
  }
})();
