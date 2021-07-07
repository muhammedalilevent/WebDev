import { Component, Input, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import VectorSource from 'ol/source/Vector';

@Component({
  selector: 'app-map-holder',
  templateUrl: './map-holder.component.html',
  styleUrls: ['./map-holder.component.css']
})
export class MapHolderComponent implements OnInit {
  map: any;
  @Input()  values;
  @Input() set onSubmit(value){
    console.log("Buraya Girildi"+value)
    this.addDot();
  }


  constructor() { }

  ngOnInit(){
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([0, 0]),
        zoom: 5
      })
    });
  }

  addDot(){
    console.log("Tetiklendim");
    const layer= new VectorLayer();
    let source = new VectorSource();
    const feature =new Feature ();
    let dots =olProj.fromLonLat([this.values.input1,this.values.input2])
    const geomNew = new Point(dots);
    layer.setSource(source);
    feature.setGeometry(geomNew);
    source.addFeature(feature);
    this.map.addLayer(layer);





  }

}
