import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f') signupForm!: NgForm;
  public headerMenus = [
    {route:'/', name:'Home'},
    {route:'/weather', name:'Weather'},
    {route:'/news', name:'News'},
    {route:'/about', name:'About'},
    
  ];

  options:any={};

  constructor() {}

  ngOnInit(): void {
    this.options.menus = this.headerMenus;
    this.options.blocked = 'signup'
  }


  onSubmit(){
    console.log(this.signupForm.value);
  }
  
}
