import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-row',
  templateUrl: './add-edit-row.component.html',
  styleUrls: ['./add-edit-row.component.scss']
})
export class AddEditRowComponent implements OnInit {
  constructor() { }
  @Input() rowData: any = [];
  @Input() modals: any = {};

  data: any = {};
  errorValidation: boolean = false;

  ngOnInit(): void {
    if (this.rowData?.index || this.rowData?.index === 0) {
      this.data.settlementName = this.rowData.addresses[this.rowData.index].settlementName;
      this.data.address = this.rowData.addresses[this.rowData.index].address;
    }

  }

  closeModal() {
    this.modals.isEditOrAddOpened = false;
  }

  saveChanges(): void {
    if(!this.data?.settlementName?.trim() || !this.data?.address?.trim()) {
      this.errorValidation = true;
    } else {
      if (this.rowData?.index || this.rowData?.index === 0) {
        this.rowData.addresses[this.rowData.index].settlementName = this.data.settlementName ;
        this.rowData.addresses[this.rowData.index].address = this.data.address;
      } else {
        this.rowData.addresses.push({settlementName: this.data.settlementName, address: this.data.address, checkboxStatus: 0});
      }
  
      this.closeModal();
    }
  }
}
