import { Component, OnInit, Input, DoCheck} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit,DoCheck {

  @Input() resOperation:any
  @Input() resNum1:any;
  @Input() resNum2:any;
 change=true;

  answer:any;
  sum(){
    this.answer= this.resNum1+this.resNum2;
    return this.answer;
  }
  min(){
    if(this.resNum1<this.resNum2)
    {
      this.answer= this.resNum2-this.resNum1;
    }
    else {
      this.answer= this.resNum1-this.resNum2;
    }
    return this.answer;

  }
  mul(){
    this.answer= this.resNum1*this.resNum2;
    return this.answer;
  }
  div(){
    this.answer= this.resNum1/this.resNum2;
    if (this.answer==NaN)
    {return 0;}
    else 
    {return this.answer;}
  }
  ngDoCheck(){
    if(this.resOperation=='Addition'){
      this.sum();this.change=true;
    }
    else if (this.resOperation=='Subtraction'){
      this.min();this.change=true;
    }
    else if (this.resOperation=='Multiplication'){
      this.mul();this.change=true;
    }
    else {
        this.div();this.change=true;
    }
    this.change=false;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
