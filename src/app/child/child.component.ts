import { Component } from '@angular/core';
import { EventEmitter, Output, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  //create object of event class
  @Output() public dataEvent = new EventEmitter();

  inputText = '';

  //Action listener for button
  public SendEvent()
  {
    //Send the event to parent
    this.dataEvent.emit("Hello from child");
  }
}
