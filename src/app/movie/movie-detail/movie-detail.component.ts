import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  user?: { id: string; };
  
  constructor(private route:ActivatedRoute) { }
  

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id']
    }
  }



}
