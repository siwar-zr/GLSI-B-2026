import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {

  div1Visible : boolean = true;
  isChecked: boolean = false;
  dayName: string = '';
  modesOfTransport: string = '';

  cityList: string[] = [
    "Tunis",
    "Nabeul",
    "Sousse",
    "Sfax",
    "Beja"
  ];

  employeeArray: any[] = [
    {empId: 121, name: 'AAA', city: 'Tunis', contactNo:'11111111'},
    {empId: 122, name: 'BBB', city: 'Mahdia', contactNo:'22222222'},
    {empId: 123, name: 'CCC', city: 'Monastir', contactNo:'33333333'},
    {empId: 124, name: 'DDD', city: 'Tunis', contactNo:'44444444'},
    {empId: 125, name: 'EEE', city: 'Nabeul', contactNo:'55555555'}
  ]

  hideshowDiv1(isShow: boolean){
    this.div1Visible = isShow;
  }
}
