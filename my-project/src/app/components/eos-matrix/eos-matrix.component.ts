import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


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
  isOpenSecondLevelMenu: any = {};
  isOpenThirdLevelMenu: any = {};
  isPersonSelected: any = {
    case000: false
  };
  mainData: any = {};
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
    this.dataSubscription.push(this.getMockData(this.workUnits).subscribe((result: any) => {
      this.workUnitsData = result;
    }));
    this.dataSubscription.push(this.getMockData(this.caseInfo).subscribe((result: any) => {
      this.caseInfoData = result;
    }));
    this.dataSubscription.push(this.getMockData(this.personAddresses).subscribe((result: any) => {
      this.personAddressesData = result;
    }));

    this.isLoaded = true;
  }

  clickEvent() {
    return this.status = !this.status;
  }

  openSecondLevelMenu(index: number) {
    return this.isOpenSecondLevelMenu['line' + index] = !this.isOpenSecondLevelMenu['line' + index];
  }

  openThirdLevelMenu(index1: number, index2: number) {
    return this.isOpenThirdLevelMenu['line' + index1 + index2] = !this.isOpenThirdLevelMenu['line' + index1 + index2];
  
  }
  loadTableData(index1: number, index2: number, index3: number): void {
    if (!this.isPersonSelected['case' + index1 + index2 + index3]) {
      this.isPersonSelected['case' + index1 + index2 + index3] = true;
      (Object.keys(this.isPersonSelected) as (keyof typeof this.isPersonSelected)[]).forEach((key) => {
        if (key && key !== 'case' + index1 + index2 + index3) {
          this.isPersonSelected[key] = false;
        }
      });
      // TODO: haveto load the person data
    }
  }

  getMockData(urlPath: string): Observable<any> {
    return this.http.get(urlPath);
  }

  ngOnDestroy(): void {
    this.dataSubscription.forEach((subscription) => subscription.unsubscribe());
  }
}
