import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Services {

  constructor( private http:HttpClient) { }
  
  newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=ca59215c581b4af38016131c3f369416';

  // weatherApi ='https://api.openweathermap.org/data/2.5/weather?lat=12.972797&lon=77.720887&exclude=hourly,daily&appid=a3826c4507ec42242a526d3a23550d23';

  weatherApi ='https://api.openweathermap.org/data/2.5/forecast?lat=12.972797&lon=77.720887&appid=a3826c4507ec42242a526d3a23550d23';


  //api.openweathermap.org/data/2.5/forecast?lat=12.972797&lon=77.720887&exclude=hourly,daily&appid=a3826c4507ec42242a526d3a23550d23

  topHeading():Observable<any>{
    return this.http.get<any>(this.newsApiUrl);
  }
  
  wetherReport():Observable<any>{
    return this.http.get<any>(this.weatherApi);
  }

  


  
}
