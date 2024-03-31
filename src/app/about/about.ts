import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent implements OnInit {

  public headerMenus = [
    {route:'/', name:'Home'},
    {route:'/weather', name:'Weather'},
    {route:'/news', name:'News'},
    
  ];

  options:any={};

  ngOnInit(): void {
    this.options.menus = this.headerMenus;
}

}
