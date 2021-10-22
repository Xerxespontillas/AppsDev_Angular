import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
isShown=false;

job= new FormGroup({
  company: new FormControl('',{
    validators: [Validators.required]
  }),
  location:new FormControl('',{
  validators: [Validators.required]
}),
  jobTitle:new FormControl('',{
  validators: [Validators.required]
  }),
  experience:new FormControl('',{
  validators: [Validators.required]
  }),
  salary:new FormControl('',{
  validators: [Validators.required,Validators.maxLength(5)]
})
})

onSubmit(){
  console.log(this.job.controls.company.value);
  console.log(this.job.controls.location.value);
  console.log(this.job.controls.jobTitle.value);
  console.log(this.job.controls.experience.value);
  console.log(this.job.controls.salary.value);
}
show(){
  this.isShown=!this.isShown;
}

  constructor() { }

  ngOnInit(): void {
  }

  get company(){
    return this.job.controls.company;
  }
  get location(){
    return this.job.controls.location;
  }
  get jobTitle(){
    return this.job.controls.jobTitle;
  }
  get experience(){
    return this.job.controls.experience;
  }
  get salary(){
    return this.job.controls.salary;
  }
  get valid(){
    return this.job.controls;
  }
}
