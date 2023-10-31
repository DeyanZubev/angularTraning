import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

//   • id
// • name
// • status(ACTIVE/DISABLED)
// • totalSessions
// • totalBets
// • totalWins
constructor(){}
gamePortfolio: any[] = [
  {
    id: 'numberOne1',
    name: 'Deyan',
    status: 'Active',
    totalSessions: 1,
    totalbets: 1,
    totalWins: 1
  },
  {
    id: 'numberOne2',
    name: 'John',
    status: 'Disable',
    totalSessions: 3,
    totalbets: 5,
    totalWins: 4
  }
]


ngOnInit():void {

}

}
