import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-project',
  templateUrl: './second-project.component.html',
  styleUrls: ['./second-project.component.scss']
})
export class SecondProjectComponent implements OnInit {

  ngOnInit(): void {

    this.logMovies();

  }

    //Get Method
    async logMovies() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const movies = await response.json();
      console.log(movies);
    }
}
