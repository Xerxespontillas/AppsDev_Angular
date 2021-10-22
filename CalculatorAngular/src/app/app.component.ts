import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator-Angular';
  num1=0;
  num2=0;
  answer=0;
  change1=false;
  
getFirst(value : any){
  const val= parseInt(value);
  this.num1=val;
  console.log(val);
  this.change1=false;
}
getSecond(value: any){
  const val= parseInt(value);
  this.num2=val;
  console.log(val);
  this.change1=false;
}

onClickAdd(){
this.answer=this.num1 + this.num2;

}
onClickSubtract(){
  this.answer=this.num1-this.num2;
  
}
onClickMultiply(){
  this.answer=this.num1*this.num2;
  
}
  onClickDivision(){
    this.answer=this.num1/this.num2;
    
  }
  
}
