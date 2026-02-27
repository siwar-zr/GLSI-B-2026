import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: string = "Siwar";
  luckNo: number = 157;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = "Enter Full Name";
  div1Classname: string = "bg-warning";
  selectedCity: string ="";

  constructor(private router : Router){
    console.log(this.firstName);
  }

  showWelcomeMessage(){
    alert("Welcome to our class !");
  }

  onCityChange(){
    console.log("City changed !");
  }

  navigatetoAdmin(){
    this.router.navigateByUrl("/admin");
  }
}
