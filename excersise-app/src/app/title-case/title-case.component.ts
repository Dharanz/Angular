import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titleCase',
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.css']
})
export class TitleCaseComponent implements OnInit {

  titleText;

  constructor() { }

  ngOnInit() {
  }

}
