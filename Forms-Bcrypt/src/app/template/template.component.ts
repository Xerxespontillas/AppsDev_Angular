
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  title='User Profile';
isShown=false;
val={name:'',age:null, mobileNumber:null,email:'' ,password: ''};

hashedpass=[];

 onSubmit(v: NgForm){
    console.log(v.value,v.valid);
    this.val=v.value;
  }
  show(){
    this.isShown=!this.isShown;
  }
  
  constructor() { 
  }
  ngOnInit(): void {
  }
}




