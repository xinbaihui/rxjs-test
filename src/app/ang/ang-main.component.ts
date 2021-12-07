import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ang-main',
  templateUrl: './ang-main.component.html',
  styleUrls: ['./ang-main.component.scss']
})
export class AngMainComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  ngContentClick() {
    this.router.navigate(['ng-content'], { relativeTo: this.route })
  }
}
