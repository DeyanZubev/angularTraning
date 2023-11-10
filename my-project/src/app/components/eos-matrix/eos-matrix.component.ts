import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, forkJoin, map } from 'rxjs';

type User = {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: any;
  company: any;
};

@Component({
  selector: 'app-eos-matrix',
  templateUrl: './eos-matrix.component.html',
  styleUrls: ['./eos-matrix.component.scss']
})
export class EosMatrixComponent implements OnInit, OnDestroy {
  constructor(
    private http: HttpClient
  ) { }
  private dataSubscription: Subscription[] = [];
  isLoaded: Boolean = false;
  status: Boolean = false;
  mainData: any = {};
  allData: Observable<User>[] = [];
  workUnitsData: any;
  caseInfoData: any;
  personAddressesData: any;
  workUnits: string = '../../../assets/eosMatrixMockData/getWorkUnits.json';
  caseInfo: string = '../../../assets/eosMatrixMockData/getCaseInfo.json';
  personAddresses: string = '../../../assets/eosMatrixMockData/getPersonAddresses.json';

  // firstLevelMenu: any[] = [];
  secondlevelMenu: any[] = [];
  thirdlevelMenu: any[] = [];


  ngOnInit(): void {
    // this.allData = [this.getMockData(this.workUnits),
    //   this.getMockData(this.caseInfo),
    //   this.getMockData(this.personAddresses)];
    this.allData = [
      this.http.get<User>('../../../assets/eosMatrixMockData/getWorkUnits.json'),
      this.http.get<User>('../../../assets/eosMatrixMockData/getCaseInfo.json'),
      this.http.get<User>('../../../assets/eosMatrixMockData/getPersonAddresses.json')];
    //   forkJoin({
    //     workUnitsData: this.http.get('../../../assets/eosMatrixMockData/getWorkUnits.json'),
    //     caseInfoData: this.http.get('../../../assets/eosMatrixMockData/getCaseInfo.json'),
    //     personAddressesData: this.http.get('../../../assets/eosMatrixMockData/getPersonAddresses.json')
    // }).subscribe(
    //     ({ workUnitsData, caseInfoData, personAddressesData }) => {
    //         this.workUnitsData = workUnitsData;
    //         this.caseInfoData = caseInfoData;
    //         this.personAddressesData = personAddressesData;
    //     },
    //     (error) => {
    //         console.log(error);
    //     }
    // );
    // forkJoin(this.allData)
    //   .pipe(
    //     map(([workUnitsData, caseInfoData, personAddressesData]) => ({
    //       workUnitsData,
    //       caseInfoData,
    //       personAddressesData,
    //     }))
    //   )
    //   .subscribe(
    //     console.log
    //   );
    this.dataSubscription.push(this.getMockData(this.workUnits).subscribe((result: any) => {
      this.workUnitsData = result;
      console.log(this.workUnitsData);
    }));
    this.dataSubscription.push(this.getMockData(this.caseInfo).subscribe((result: any) => {
      this.caseInfoData = result;
    }));
    this.dataSubscription.push(this.getMockData(this.personAddresses).subscribe((result: any) => {
      this.personAddressesData = result;
    }));
    this.secondlevelMenu = this.workUnitsData.filter((x: any) => x.debtors);
    this.thirdlevelMenu = this.workUnitsData.filter((x: any) => x.cases);
    console.log(this.allData);
    console.log(this.secondlevelMenu);
    console.log(this.thirdlevelMenu);
    this.isLoaded = true;
  }

  clickEvent() {
    return this.status = !this.status;
  }

  getMockData(urlPath: string): Observable<any> {
    return this.http.get(urlPath);
  }

  ngOnDestroy(): void {
    this.dataSubscription.forEach((subscription) => subscription.unsubscribe());
  }
}
