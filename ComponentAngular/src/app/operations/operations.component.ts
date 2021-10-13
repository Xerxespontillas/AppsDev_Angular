import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
title="Operation Loaded";
@Output()  newOperationEvent = new EventEmitter <string>();

operation='';

getOperation(value:string){
this.operation=value;
this.newOperationEvent.emit(this.operation);

}
  constructor() { }

  ngOnInit(): void {
  }

}
