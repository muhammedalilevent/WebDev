

const map = new ol.Map({
    view: new ol.View({
        center: [0, 0],
        zoom: 2
    }),
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    controls: [],
    target: 'js-map'
})
//const layer = new ol.layer.Vector({});
// const layer = new ol.layer.Vector({zIndex:1000})

// const source = new ol.source.Vector()

// layer.setSource(source);

// const feature = new ol.Feature();

// const geom = new ol.geom.Point([3207078.7865,5022516.1613])

// feature.setGeometry(geom);

// source.addFeature(feature);


// map.addLayer(layer)

var points = [
    [78.65, -32.65], [-98.65, 12.65]
];

//Layer Oluşturma
const layer = new ol.layer.Vector({zIndex:1000})

//Kaynak Oluşturma
const source = new ol.source.Vector()

//Kaynağı Set Etme
layer.setSource(source);

//Feature Oluşturma
const feature = new ol.Feature();

//Geom Oluşturma
const geom = new ol.geom.LineString( [
    [78.65, -32.65], [-98.65, 12.65]
])


//Geom'u feature'a set etme
feature.setGeometry(geom);

//Kaynağa Feature'u set etme
source.addFeature(feature);

//Layer'ı Map'e ekleme
map.addLayer(layer)