import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { ProgressBarComponent } from "../../reusable/progress-bar/progress-bar.component";
import { TabsComponent } from "../../reusable/tabs/tabs.component";

@Component({
  selector: 'app-customer',
  imports: [FormsModule, ProgressBarComponent, TabsComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customerTabs : string[] = ["Basic Info", "Shipment", "Payment"]

  customerObj: any = {
    "customerId": 0,
    "customerName": "",
    "customerCity": "",
    "mobileNo": "",
    "email": ""
  }

  customerArray: any[] = [];

  constructor(private custSrv: CustomerService){
    this.getCustomers();
  }

  getCustomers(){
    debugger;
    this.custSrv.loadCustomers().subscribe((res:any) => {
      debugger;
      this.customerArray = res.data;
    })
  }

  onSaveCustomer(){
    debugger;
    this.custSrv.createNewCustomer(this.customerObj).subscribe((res: any)=>{
      debugger;
      if(res.result){
        alert("Customer Created Successfully !");
        this.getCustomers();
      } else {
        alert(res.message);
      }
    })
  }

}
