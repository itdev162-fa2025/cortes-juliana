import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'client';
weatherForecast: any;

  constructor (private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get('http://localhost:5108/weatherforecast').subscribe({
      next:(response) => this.weatherForecast = response,
      error:(e) => console.error(e),
      complete: () =>console.log('complete')
    });
  }
}
