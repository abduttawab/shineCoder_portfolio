import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customheader',
  templateUrl: './customheader.component.html',
  styleUrls: ['./customheader.component.css']
})
export class CustomHeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}