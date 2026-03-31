import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy {

  constructor(){
    console.log('constructor')
    //Initialisation des donnees
    //Injection des dependances
  }

  ngOnInit(): void {
    console.log("ngOnInit")
    //API Call Functions
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit(): void{
    console.log("ngAfterViewInit", performance.now())
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngOnDestroy(): void {
    alert("You are leaving page!")
    console.log("ngOnDestroy")
  }

}
