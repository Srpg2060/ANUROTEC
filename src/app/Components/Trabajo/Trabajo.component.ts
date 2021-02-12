import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-Trabajo',
  templateUrl: './Trabajo.component.html',
  styleUrls: ['./Trabajo.component.scss']
})
export class TrabajoComponent implements OnInit {
  public route: String;

  constructor( location: Location, private router: Router) {
    router.events.subscribe((val) => {
      this.route = location.path();
    });
  }

  ngOnInit() {
  }

}
