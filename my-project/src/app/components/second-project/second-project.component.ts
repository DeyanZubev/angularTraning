import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-project',
  templateUrl: './second-project.component.html',
  styleUrls: ['./second-project.component.scss']
})
export class SecondProjectComponent implements OnInit {

  ngOnInit(): void {

    // this.logMovies();
    this.logMyAnimeList();

        // examples for Closures
    // const a = this.outerFunction('Hi');
    // const b = a('innerParam');
    // b('doubleInnerparam');
    //  this.clickHandler(12);
    // console.log(sizePx());

  }

    //Get Method
    async logMovies() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const movies = await response.json();
      console.log(movies);
    }

    async logMyAnimeList() {
      const responce = await fetch("https://api.myanimelist.net/v2");
      const anime = await responce.json();
      console.log(anime);
    }

      // Closures
  outerFunction(outerParam: any){
    return (innerParam: any) => {
      return (doubleInnerParam: any) => {
        console.log(outerParam);
        console.log(innerParam);
        console.log(doubleInnerParam);
      }
    }
  }

  clickHandler(size: Number) {
    return console.log(`${size}px`)
  }
}
