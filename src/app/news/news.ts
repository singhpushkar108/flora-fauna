import { Component, OnInit } from '@angular/core';
import { Services } from '../service/services';
@Component({
  selector: 'app-news',
  templateUrl: './news.html',
  styleUrls: ['./news.css']
})
export class NewsComponent implements OnInit{


  public headerMenus = [
    {route:'/', name:'Home'},
    {route:'/weather', name:'Weather'},
    {route:'/about', name:'About'},
  ];

  options:any={};

  constructor(private service:Services){

  }

  topHeadingDisplay:any=[]; 


  ngOnInit(): void { 
      this.service.topHeading().subscribe((response)=>{
        if(response.status =='ok'){
          this.topHeadingDisplay = response.articles;
          console.log(this.topHeadingDisplay);
        }
        
      });

      this.options.menus= this.headerMenus;

  }
}
