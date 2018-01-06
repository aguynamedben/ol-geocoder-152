import Geocoder from 'ol-geocoder';

import 'ol/ol.css';
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

// documentation: https://github.com/jonataswalker/ol3-geocoder
const geocoder = new Geocoder('nominatim', {
  provider: 'osm',
  // key: ''
  countrycodes: 'us',
  lang: 'en-US',
  placeholder: 'address, city, or zip code',
  // targetType: 'text-input'
  autoComplete: true,
  limit: 8
});

map.addControl(geocoder);
