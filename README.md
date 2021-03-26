# CPNT 262 Assignment 4 - Answer Key
1. Create HTML Endpoints
    1. Install `ejs`
    2. Set `view engine`
    3. Move HTML pages -> `views/pages`
        - rename `.html` -> `.ejs`
    4. Create partials -> `views/partials`
    5. Include partials into pages.
    6. Create `app.get()` handlers for each view.
    7. Move routes from `server.js` -> `routes/index`
        - Move handlers to `routes`
        - Add middleware in `server.js`
2. Create JSON
    1. Move image array from `client.js` -> `data/images.js` -> Export module with `module.exports`.
    2. In `server.js` load images module.
    3. Create `app.get()` handler for `/api/v0/images`.
    4. Move route from `server.js` -> `routes/api-v0.js`
        - Move handlers to `routes`
        - Add middleware in `server.js`
3. Refactor for `fetch()`
    1. Delete image array from `client.js` if necessary.
    2. Create `fetch()` request -> `/api/v0/images`.
    3. Move `.forEach()` loop -> `fetch()` request.