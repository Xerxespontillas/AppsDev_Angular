import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentsCalculator';
  num1:any;
  num2:any;
  operation: any;
  answer: any;

  getFirst(first: any){
    this.num1=parseInt(first);
  }
  getSecond(second: any){
    this.num2=parseInt(second);
  }

getOperation(value:string){
  this.operation=value;
}

}
