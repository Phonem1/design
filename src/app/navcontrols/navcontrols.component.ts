import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navcontrols',
  templateUrl: './navcontrols.component.html',
  styleUrls: ['./navcontrols.component.css']
})
export class NavcontrolsComponent implements OnInit {

  constructor() { console.log("construc navcontrols");}

  ngOnInit() {
    console.log("NavControl is started");
  }

}
