import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() task : any;

  constructor() { }

  ngOnInit() {
  }

}
