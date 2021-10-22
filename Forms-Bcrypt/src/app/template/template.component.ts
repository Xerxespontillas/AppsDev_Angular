
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  title='User Profile';
isShown=false;
val={name:'',age:null, mobileNumber:null,email:'' ,password: ''};

  salt = bcrypt.genSaltSync(10);
  pass = bcrypt.hashSync(this.val.password, this.salt);

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




