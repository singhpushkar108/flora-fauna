import { Component , Input, OnInit} from '@angular/core';
import { MainbodyComponent } from './mainbody/mainbody.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @Input() options:any = {};

  constructor(){}

  ngOnInit(){
      
  }

  
}
