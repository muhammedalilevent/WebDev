var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([0,0]),
    zoom: 1
  })
});

const layer = new ol.layer.Vector({  })

const source = new ol.source.Vector()
layer.setSource(source);

const feature = new ol.Feature();

const geom = new ol.geom.Point([3207078.7865,5022516.1613])


feature.setGeometry(geom);

source.addFeature(feature);


map.addLayer(layer)

let submitButton = document.getElementById('submit')

submitButton.addEventListener("click",addDot)

 function addDot( ) {
  console.log("fons çağırıldı")
  let X = document.getElementById('point1').value
  let Y = document.getElementById('point2').value
  let convertedXY = ol.proj.fromLonLat([X,Y])
  const geomNew = new ol.geom.Point(convertedXY)
  let featureAdd = new ol.Feature();
  featureAdd.setGeometry(geomNew);
  source.addFeature(featureAdd);
  document.getElementById('point1').value='';
  document.getElementById('point2').value='';
  console.log(X, Y + " basıldı")
  



}
//3807078.7865   4222516.1613