import { Input, Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() public myChild;

  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey I am from the child, treat me well');
  }

}
