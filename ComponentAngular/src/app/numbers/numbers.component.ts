import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
 title= "Numbers";
   num1: any;
   num2: any;
   @Output()  NUM1 = new EventEmitter <number>();
   @Output()  NUM2 = new EventEmitter <number>();

getFirst(value : any){
this.num1=value;
this.NUM1.emit(this.num1);
}
getSecond(value : any){
  this.num2=value;
  this.NUM2.emit(this.num2);
  }

   constructor() { }
  ngOnInit(): void {
  }
}
