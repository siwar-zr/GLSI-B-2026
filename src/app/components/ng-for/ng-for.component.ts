import { Component } from '@angular/core';
import { DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { NaPipe } from '../../pipes/na.pipe';
import { ProgressBarComponent } from '../../reusable/progress-bar/progress-bar.component';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor, UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, NaPipe, ProgressBarComponent],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  courseName: string = "Angular";

  currentDate: Date = new Date();

  studentObj: any = {
    name: 'Siwar',
    city: 'Nabeul',
    phone: '11223344'
  }

  cityList: string[] = ["Tunis", "Nabeul", "Gafsa", "Sousse", "Tozeur"];

  employeeArray: any[] = [
    {empId: 121, name: '', city: 'Tunis', contactNo:'11111111', attendance:40},
    {empId: 122, name: 'BBB', city: 'Mahdia', contactNo:'22222222', attendance:75},
    {empId: 123,  city: 'Monastir', contactNo:'33333333', attendance:20},
    {empId: 124, name: 'DDD', city: 'Tunis', contactNo:'44444444', attendance:100},
    {empId: 125, name: null, city: 'Nabeul', contactNo:'55555555', attendance:50}
  ]

}
