import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our',
  templateUrl: './our.component.html',
  styleUrls: ['./our.component.scss']
})
export class OurComponent implements OnInit {
  title = "test"

  gridColumns = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
