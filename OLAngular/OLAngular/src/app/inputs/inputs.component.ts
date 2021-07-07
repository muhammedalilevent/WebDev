import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
// export class InputsComponent implements OnInit {
//   value1 = new FormControl('');
//   constructor() { }

//   ngOnInit() {
//   }


// }
export class InputsComponent implements OnInit {
  @Output() inputs : EventEmitter<any>=new EventEmitter()
  @Output () clicked : EventEmitter<any> = new EventEmitter()
   inputForm= new FormGroup({
    x : new FormControl(''),
    y : new FormControl(''),
  });

  constructor() { }

  onSubmit(){
    console.log(this.inputForm.value.x);
    console.log(this.inputForm.value.y);
    this.inputs.emit({
      input1: this.inputForm.value.x,
      input2: this.inputForm.value.y
    });
    this.clicked.emit();

  }
  ngOnInit() {
  }



}
