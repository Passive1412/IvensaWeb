import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  title = "test"

  gridColumns = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
