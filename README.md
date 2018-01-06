### Reproduce ol-geocoder ES6/Webpack bug

Issue: https://github.com/jonataswalker/ol-geocoder/issues/152

This repro is based on the Webpack instructions linked in the OpenLayers docs, which are [here](https://gist.github.com/tschaub/79025aef325cd2837364400a105405b8).

From that starting point I:
- Removed UglifyJS because it was causing [this issue](https://github.com/webpack/webpack/issues/2972)
- Added ol-geocoder
- Pointed Webpack to use `ol-geocoder/dist/ol-geocoder-debug.js` when `import Geocoder from 'ol-geocoder';` is used

See the problematic code in main.js. The problem happens on the last line:

```js
map.addControl(geocoder);
```

Not on Geocoder initialization.

### To run

Clone the project

```
cd ol-geocoder-152
npm install
npm run build
open index.html
```

Then observe the JavaScript error:
```
Uncaught TypeError: Cannot read property 'appendChild' of undefined
```

Let me know if there's any way I can help. I'm curious if [having ol-geocoder use OpenLayers the recommended way](https://github.com/jonataswalker/ol-geocoder/issues/152#issuecomment-355702668) would solve the issue.
