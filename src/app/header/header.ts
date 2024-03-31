import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit{
  @Input() options: any;
  public myMenus:any;
  public blocked:boolean = false;
  
  ngOnInit(): void {
    this.blocked = (this.options.blocked != '' && this.options.blocked != undefined && this.options.blocked == 'signup') ? true : false ;
    this.myMenus = this.options.menus || [];

  }
}
