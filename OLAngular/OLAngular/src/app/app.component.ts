import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   values : any;
   onSubmit : any;

  comingInputs(values){
    console.log("Gelen Birinci Değer"+values.input1+"Gelen 2. Değer"+values.input2);
    this.values = values

  }
  clicked(){
    console.log("app.component clicked içi : values değerleri"+this.values)
    this.onSubmit = this.values;
  }
}


