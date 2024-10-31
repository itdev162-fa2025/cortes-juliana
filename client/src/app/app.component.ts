import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    MatCardModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  posts: any;

  constructor (private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get('http://localhost:5108/api/posts').subscribe({
      next: (response) => this.posts = response,
      error: (e) => console.error(e),
      complete: () => console.log('complete')
    })  
  }
}
