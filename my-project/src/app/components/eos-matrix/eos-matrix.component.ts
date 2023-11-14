import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, forkJoin } from 'rxjs';



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
  showAddressesTable: Boolean = false;
  showCaseInfoTable: Boolean = false;
  isOpenSecondLevelMenu: any = {};
  isOpenThirdLevelMenu: any = {};
  isPhysicalPersonSelected: any = {};
  isPersonSelected: any = {};
  isCaseSelected: any = {};
  mainData: any = {};
  workUnitsData: any;
  caseInfoData: any;
  selectedCasesInfo: any;
  personAddressesData: any;
  allAddressesOfPerson: any;
  workUnits: string = '../../../assets/eosMatrixMockData/getWorkUnits.json';
  caseInfo: string = '../../../assets/eosMatrixMockData/getCaseInfo.json';
  personAddresses: string = '../../../assets/eosMatrixMockData/getPersonAddresses.json';

  // firstLevelMenu: any[] = [];
  secondlevelMenu: any[] = [];
  thirdlevelMenu: any[] = [];
  tableData: any;
  indexes: any = {};
  rowData: any;
  modals: any = {
    isEditOrAddOpened: false
  }


  ngOnInit(): void {
    // this.dataSubscription.push(this.getMockData(this.workUnits).subscribe((result: any) => {
    //   this.workUnitsData = result;
    // }));
    // this.dataSubscription.push(this.getMockData(this.caseInfo).subscribe((result: any) => {
    //   this.caseInfoData = result;
    // }));
    // this.dataSubscription.push(this.getMockData(this.personAddresses).subscribe((result: any) => {
    //   this.personAddressesData = result;
    // }));
    forkJoin([
      this.getMockData(this.workUnits),
      this.getMockData(this.caseInfo),
      this.getMockData(this.personAddresses)
    ]).subscribe(res => [
      this.workUnitsData = res[0],
      this.caseInfoData = res[1],
      this.personAddressesData = res[2]
    ]);

    this.isLoaded = true;
  }

  clickEvent() {
    return this.status = !this.status;
  }

  removeAllSelectedClass(select: any, index1: number, index2?: number, index3?: number): void {
    (Object.keys(select) as (keyof typeof select)[]).forEach((key) => {
      if (key && (key === 'line' + index1 + index2 + index3 || key === 'line' + index1 + index2 || key === 'line' + index1)) {
        select[key] = true;
      } else {
        select[key] = false;
      }
    });
  }

  openSecondLevelMenu(index: number) {
    this.isOpenSecondLevelMenu['line' + index] = !this.isOpenSecondLevelMenu['line' + index];
    this.isPhysicalPersonSelected['line' + index] = true;
    this.removeAllSelectedClass(this.isPhysicalPersonSelected, index);
    this.removeAllSelectedClass(this.isPersonSelected, index);
    this.removeAllSelectedClass(this.isCaseSelected, index);
  }

  openThirdLevelMenu(index1: number, index2: number, personId: string): void {
    this.isOpenThirdLevelMenu['line' + index1 + index2] = !this.isOpenThirdLevelMenu['line' + index1 + index2];
    this.isPersonSelected['line' + index1 + index2] = true;
    this.removeAllSelectedClass(this.isPhysicalPersonSelected, index1);
    this.removeAllSelectedClass(this.isPersonSelected, index1, index2);
    this.removeAllSelectedClass(this.isCaseSelected, index1, index2);

    this.loadPersonAddressesAndCheckboxCaseStatus(index1, personId);
  }

  loadPersonAddressesAndCheckboxCaseStatus(index1:number, personId: string) {
    this.allAddressesOfPerson = this.personAddressesData.find((x: any) => x.workUnitId === personId);
    const allCheckboxes = this.workUnitsData[index1].cases.filter((item: any) => item.workUnitId === personId);
    this.allAddressesOfPerson.addresses.forEach((x:any, index: number) => {
      x.checkboxStatus = index < allCheckboxes.length ? allCheckboxes[index].status : 0;
    });
    this.rowData = this.allAddressesOfPerson;
    this.showAddressesTable = true;
    this.showCaseInfoTable = false;
  }

  selectCase(index1: number, index2: number, index3: number, caseId:string): void {
    if (!this.isCaseSelected['line' + index1 + index2 + index3]) {
      this.isCaseSelected['line' + index1 + index2 + index3] = true;
      this.removeAllSelectedClass(this.isPhysicalPersonSelected, index1);
      this.removeAllSelectedClass(this.isPersonSelected, index1, index2);
      this.removeAllSelectedClass(this.isCaseSelected, index1, index2, index3);
    }

    this.loadCasesInfo(caseId);
  }

  loadCasesInfo(caseId: string) {
    console.log(caseId);
    console.log(this.caseInfoData);
    this.selectedCasesInfo = this.caseInfoData.find((x: any) => x.workUnitId === caseId);
    console.log(this.selectedCasesInfo);
    this.showCaseInfoTable = true;
    this.showAddressesTable = false;
  }

  getMockData(urlPath: string): Observable<any> {
    return this.http.get(urlPath);
  }

  editOrAddRow(index: number): void {
    this.rowData.index = index;
    this.openEditOrAddModal();
    // this.rowData.addresses[index];
  }

  addNewRow() {
    this.rowData.index = null;
    this.openEditOrAddModal(); 
  }

  openEditOrAddModal() {
    this.modals.isEditOrAddOpened = true;
  }

  ngOnDestroy(): void {
    // this.dataSubscription.forEach((subscription) => subscription.unsubscribe());
  }
}
